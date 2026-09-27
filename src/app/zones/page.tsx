import Link from "next/link";
import type { Metadata } from "next";
import { cities } from "@/lib/data/cities";
import { getSector } from "@/lib/data/sectors";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { PriceStrip } from "@/components/ui/PriceStrip";

export const metadata: Metadata = {
  title: "Traceur GPS en PACA — zones desservies",
  description:
    "Installation et livraison de traceurs GPS à Marseille, Nice, Toulon, Aix-en-Provence, Avignon, Cannes, Antibes, Hyères, Fréjus, Arles, Gap et Salon-de-Provence.",
  alternates: { canonical: "/zones" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Zones desservies", href: "/zones" },
];

const byDepartment = cities.reduce<Record<string, typeof cities>>((acc, c) => {
  (acc[c.department] ||= []).push(c);
  return acc;
}, {});

export default function ZonesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <ItemListJsonLd
        name="Villes desservies"
        items={cities.map((c) => ({ name: c.label, url: `/zones/${c.slug}` }))}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Couverture régionale"
          title={`Intervention sur toute la région ${site.region}`}
          lead="Nos techniciens se déplacent sur site pour les installations câblées, dans les cinq départements de la région. Les boîtiers autonomes et OBD sont livrés gratuitement partout en France sous 48 à 72 heures."
          as="h1"
        />

        <div className="mt-14 space-y-12">
          {Object.entries(byDepartment).map(([dept, list]) => (
            <div key={dept}>
              <h2 className="text-xl font-bold">
                {dept}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  ({list[0].departmentCode})
                </span>
              </h2>
              <div className="rule mt-3" />
              <div className="mt-6 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-2">
                {list.map((c) => (
                  <article key={c.slug} className="bg-background p-6">
                    <h3 className="text-lg font-bold">
                      <Link href={`/zones/${c.slug}`} className="hover:text-accent">
                        {c.label}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {c.population.toLocaleString("fr-FR")} habitants
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.context.split(". ").slice(0, 2).join(". ")}.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {c.prioritySectors.slice(0, 4).map((s) => {
                        const sector = getSector(s);
                        if (!sector) return null;
                        return (
                          <li key={s}>
                            <Link
                              href={`/secteurs/${s}/${c.slug}`}
                              className="inline-block border border-border rounded-sm px-2 py-1 text-xs text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                            >
                              {sector.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <PriceStrip className="mt-14 max-w-3xl" />

        <div className="mt-14">
          <CTA href="/devis">Vérifier la couverture de ma zone</CTA>
        </div>
      </Section>
    </>
  );
}
