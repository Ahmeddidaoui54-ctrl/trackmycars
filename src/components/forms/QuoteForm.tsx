"use client";

import { useState } from "react";
import { sectors } from "@/lib/data/sectors";
import { cities } from "@/lib/data/cities";
import { site } from "@/lib/data/site";

const fleetSizes = ["1 véhicule", "2 à 5", "6 à 20", "21 à 50", "Plus de 50"];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Demande de devis — ${site.name}`,
      "",
      `Nom : ${data.get("nom")}`,
      `Société : ${data.get("societe") || "—"}`,
      `Téléphone : ${data.get("telephone")}`,
      `Email : ${data.get("email")}`,
      `Secteur : ${data.get("secteur")}`,
      `Ville : ${data.get("ville")}`,
      `Parc : ${data.get("parc")}`,
      "",
      `Besoin : ${data.get("besoin")}`,
    ].join("\n");

    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  const field =
    "mt-1.5 w-full border border-border rounded-md px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-accent";
  const label = "block text-xs font-semibold uppercase tracking-wide text-muted-foreground";

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-border/50 rounded-xl p-6 sm:p-8 bg-white ${
        compact ? "shadow-lg" : ""
      }`}
    >
      <h2 className="text-xl font-bold">Votre demande</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Les champs marqués d&apos;un astérisque sont nécessaires pour vous répondre.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={label}>
            Nom et prénom *
          </label>
          <input id="nom" name="nom" type="text" required className={field} />
        </div>
        <div>
          <label htmlFor="societe" className={label}>
            Société
          </label>
          <input id="societe" name="societe" type="text" className={field} />
        </div>
        <div>
          <label htmlFor="telephone" className={label}>
            Téléphone *
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="secteur" className={label}>
            Que devez-vous équiper ? *
          </label>
          <select id="secteur" name="secteur" required defaultValue="" className={field}>
            <option value="" disabled>
              Sélectionnez…
            </option>
            {sectors.map((s) => (
              <option key={s.slug} value={s.label}>
                {s.label}
              </option>
            ))}
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="parc" className={label}>
            Nombre de véhicules *
          </label>
          <select id="parc" name="parc" required defaultValue="" className={field}>
            <option value="" disabled>
              Sélectionnez…
            </option>
            {fleetSizes.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ville" className={label}>
            Ville ou zone *
          </label>
          <input
            id="ville"
            name="ville"
            type="text"
            required
            list="villes-paca"
            placeholder="Marseille, Nice, Toulon…"
            className={field}
          />
          <datalist id="villes-paca">
            {cities.map((c) => (
              <option key={c.slug} value={c.label} />
            ))}
          </datalist>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="besoin" className={label}>
            Votre besoin
          </label>
          <textarea
            id="besoin"
            name="besoin"
            rows={5}
            placeholder="Type de véhicules, contrainte particulière, délai souhaité…"
            className={field}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 btn btn-primary w-full sm:w-auto"
      >
        Envoyer ma demande
      </button>

      {sent && (
        <p className="mt-4 text-sm text-success" role="status">
          Votre demande a été préparée dans WhatsApp. Si la fenêtre ne s&apos;est pas
          ouverte, appelez-nous au {site.phoneDisplay}.
        </p>
      )}

      <p className="mt-5 text-xs text-muted-foreground">
        Vos données servent uniquement à traiter votre demande. Elles ne sont ni
        revendues, ni transmises à des tiers. Vous pouvez demander leur suppression à
        tout moment en écrivant à {site.email}.
      </p>
    </form>
  );
}
