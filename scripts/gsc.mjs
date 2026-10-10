#!/usr/bin/env node
// Extraction Google Search Console — sans aucune dependance externe.
// Usage :
//   node scripts/gsc.mjs query   [jours]   -> top requetes
//   node scripts/gsc.mjs page    [jours]   -> top pages
//   node scripts/gsc.mjs both    [jours]   -> requete x page
//   node scripts/gsc.mjs summary [jours]   -> total du site
import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";

let KEY;
try {
  KEY = JSON.parse(readFileSync(new URL("../gsc-key.json", import.meta.url), "utf8"));
} catch {
  console.error("gsc-key.json introuvable. Crée un compte de service Google Cloud,");
  console.error("ajoute-le en lecture dans la Search Console de trackmycars.fr,");
  console.error("et place sa clé JSON dans trackmycars-platform/gsc-key.json (gitignoré).");
  process.exit(1);
}
const SITE = "sc-domain:trackmycars.fr";
const SITE_FALLBACK = "https://trackmycars.fr/";

const b64 = (o) =>
  Buffer.from(typeof o === "string" ? o : JSON.stringify(o))
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

async function token() {
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: KEY.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: KEY.token_uri,
    exp: now + 3600,
    iat: now,
  };
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64(claim)}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  const sig = signer.sign(KEY.private_key, "base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const res = await fetch(KEY.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${sig}`,
    }),
  });
  const j = await res.json();
  if (!j.access_token) throw new Error("auth: " + JSON.stringify(j));
  return j.access_token;
}

async function query(tok, site, dims, days, rowLimit = 500) {
  const end = new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10);
  const start = new Date(Date.now() - (days + 2) * 864e5).toISOString().slice(0, 10);
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${tok}`, "Content-Type": "application/json" },
      body: JSON.stringify({ startDate: start, endDate: end, dimensions: dims, rowLimit }),
    }
  );
  return { status: res.status, data: await res.json(), start, end };
}

const mode = process.argv[2] || "summary";
const days = parseInt(process.argv[3] || "90", 10);
const dims = { query: ["query"], page: ["page"], both: ["page", "query"], summary: [] }[mode];
if (!dims) {
  console.error("mode inconnu : query | page | both | summary");
  process.exit(1);
}

const tok = await token();
let r = await query(tok, SITE, dims, days);
let used = SITE;
if (r.status !== 200) {
  r = await query(tok, SITE_FALLBACK, dims, days);
  used = SITE_FALLBACK;
}
if (r.status !== 200) {
  console.error(`Erreur ${r.status} :`, JSON.stringify(r.data).slice(0, 400));
  console.error("\nVerifie que le compte de service GSC de trackmycars.fr est bien");
  console.error("ajoute comme utilisateur dans Search Console (Parametres > Utilisateurs).");
  process.exit(1);
}

const rows = r.data.rows || [];
console.log(`# ${used} — ${mode} — ${r.start} au ${r.end} — ${rows.length} lignes\n`);
console.log(["cles", "clics", "impressions", "ctr", "position"].join("\t"));
for (const row of rows) {
  console.log(
    [
      (row.keys || ["TOTAL"]).join(" | "),
      row.clicks,
      row.impressions,
      (row.ctr * 100).toFixed(2) + "%",
      row.position.toFixed(1),
    ].join("\t")
  );
}
