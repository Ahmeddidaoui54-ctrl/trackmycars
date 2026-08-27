import Link from "next/link";
import type { Metadata } from "next";
import { sectors } from "@/lib/data/sectors";
import { getCitiesForSector } from "@/lib/data/cities";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Secteurs équipés — Traceur GPS par type de véhicule",
  description:
    "Traceur GPS adapté à votre activité : voiture, moto, camion, taxi VTC, bus, flotte d'entreprise, engin de chantier, utilitaire, remorque, bateau, camping-car, location.",
  alternates: { canonical: "/secteurs" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Secteurs", href: "/secteurs" },
];

export default function SecteursPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <ItemListJsonLd
        name="Secteurs équipés"
        items={sectors.map((s) => ({ name: s.label, url: `/secteurs/${s.slug}` }))}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Ciblage par usage"
          title="Le risque n'est pas le même selon ce que vous protégez"
          lead="Un vol de deux-roues, une non-restitution de véhicule loué et une disparition de mini-pelle sur chantier appellent trois réponses techniques différentes. Sélectionnez votre secteur pour la configuration qui correspond réellement à votre exposition."
        />

        <div className="mt-14 space-y-px bg-border border border-border rounded-lg overflow-hidden">
          {sectors.map((s) => {
            const sectorCities = getCitiesForSector(s.slug);
            return (
              <article key={s.slug} className="bg-background p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="sm:w-1/3">
                    <h2 className="text-xl font-bold">
                      <Link href={`/secteurs/${s.slug}`} className="hover:text-accent">
                        {s.label}
                      </Link>
                    </h2>
                    <p className="mt-2">
                      <span className="stat-value text-accent text-lg">{s.stat.value}</span>{" "}
                      <span className="text-xs text-muted-foreground">{s.stat.label}</span>
                    </p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.intro}
                    </p>
                    {sectorCities.length > 0 && (
                      <p className="mt-4 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Villes couvertes :</span>{" "}
                        {sectorCities.map((c, i) => (
                          <span key={c.slug}>
                            {i > 0 && " · "}
                            <Link
                              href={`/secteurs/${s.slug}/${c.slug}`}
                              className="hover:text-accent underline decoration-border underline-offset-2"
                            >
                              {c.label}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                    <p className="mt-4">
                      <Link
                        href={`/secteurs/${s.slug}`}
                        className="text-sm font-semibold text-accent hover:underline"
                      >
                        Solutions pour {s.plural} →
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12">
          <CTA href="/devis">Décrire mon besoin</CTA>
        </div>
      </Section>
    </>
  );
}
