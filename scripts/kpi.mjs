#!/usr/bin/env node
// Tableau de bord SEO trackmycars.fr — releve date + comparaison au precedent.
// Usage : node scripts/kpi.mjs [jours]   (defaut 28)
// Les releves sont archives dans ~/Documents/trackmycars-mesures/ , hors depot git.
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const DIR = join(homedir(), "Documents", "trackmycars-mesures");
mkdirSync(DIR, { recursive: true });
const JOURS = parseInt(process.argv[2] || "28", 10);
const AUJ = new Date().toISOString().slice(0, 10);

function gsc(mode, jours) {
  const out = execFileSync("node", [join(import.meta.dirname, "gsc.mjs"), mode, String(jours)], {
    encoding: "utf8",
  });
  return out.trim().split("\n").filter((l) => l && !l.startsWith("#") && !l.startsWith("cles"));
}

// --- Releve du jour ---
const [clics, impressions, ctr, position] = gsc("summary", JOURS)[0].split("\t").slice(1);
const pages = gsc("page", JOURS).map((l) => l.split("\t"));
const requetes = gsc("query", JOURS).map((l) => l.split("\t"));

const releve = {
  date: AUJ,
  fenetre_jours: JOURS,
  clics: +clics,
  impressions: +impressions,
  ctr,
  position: +position,
  pages_avec_impression: pages.length,
  pages_avec_clic: pages.filter((p) => +p[1] > 0).length,
  requetes_distinctes: requetes.length,
  // Requetes commerciales : celles qui peuvent amener un client
  requetes_commerciales: requetes.filter((r) => /(traceur|gps|balise|tracker|suivi|g[eé]oloc|flotte|antivol|localisation)/i.test(r[0])).length,
  impressions_commerciales: requetes
    .filter((r) => /(traceur|gps|balise|tracker|suivi|g[eé]oloc|flotte|antivol|localisation)/i.test(r[0]))
    .reduce((a, r) => a + +r[2], 0),
  // Part des impressions commerciales en page 1
  part_page1_commercial: (() => {
    const c = requetes.filter((r) => /(traceur|gps|balise|tracker|suivi|g[eé]oloc|flotte|antivol|localisation)/i.test(r[0]));
    const tot = c.reduce((a, r) => a + +r[2], 0);
    const p1 = c.filter((r) => +r[4] <= 10).reduce((a, r) => a + +r[2], 0);
    return tot ? +((100 * p1) / tot).toFixed(1) : 0;
  })(),
  top10_requetes: requetes
    .sort((a, b) => +b[2] - +a[2])
    .slice(0, 10)
    .map((r) => ({ q: r[0], clics: +r[1], imp: +r[2], pos: +r[4] })),
};

const fichier = join(DIR, `kpi_${AUJ}_${JOURS}j.json`);
writeFileSync(fichier, JSON.stringify(releve, null, 2));

// --- Comparaison au releve precedent de meme fenetre ---
const anciens = readdirSync(DIR)
  .filter((f) => f.startsWith("kpi_") && f.endsWith(`_${JOURS}j.json`) && !f.includes(AUJ))
  .sort();
const precedent = anciens.length
  ? JSON.parse(readFileSync(join(DIR, anciens[anciens.length - 1]), "utf8"))
  : null;

const fleche = (n, inverse = false) =>
  n === 0 ? "  =" : (inverse ? n < 0 : n > 0) ? `  ↑` : `  ↓`;

console.log(`\n# Tableau de bord SEO — ${AUJ} — fenetre ${JOURS} jours\n`);
const lignes = [
  ["Clics", releve.clics, precedent?.clics, false],
  ["Impressions", releve.impressions, precedent?.impressions, false],
  ["Position moyenne", releve.position, precedent?.position, true],
  ["Pages avec impression", releve.pages_avec_impression, precedent?.pages_avec_impression, false],
  ["Pages avec au moins 1 clic", releve.pages_avec_clic, precedent?.pages_avec_clic, false],
  ["Requetes distinctes", releve.requetes_distinctes, precedent?.requetes_distinctes, false],
  ["Impressions commerciales", releve.impressions_commerciales, precedent?.impressions_commerciales, false],
  ["% commercial en page 1", releve.part_page1_commercial, precedent?.part_page1_commercial, false],
];
console.log("| Indicateur | Aujourd'hui | Precedent | Evolution |");
console.log("|---|---:|---:|---|");
for (const [nom, val, ancien, inv] of lignes) {
  const d = ancien == null ? null : +(val - ancien).toFixed(2);
  console.log(
    `| ${nom} | ${val} | ${ancien ?? "—"} | ${d == null ? "premier releve" : (d > 0 ? "+" : "") + d + fleche(d, inv)} |`
  );
}
console.log(`\nCTR : ${releve.ctr}${precedent ? ` (precedent ${precedent.ctr})` : ""}`);
console.log(`\nReleve archive : ${fichier}`);
if (precedent) console.log(`Compare a : ${anciens[anciens.length - 1]}`);
