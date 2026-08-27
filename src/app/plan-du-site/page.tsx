import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { cities, getCitiesForSector } from "@/lib/data/cities";
import { Section, SectionHead, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Plan du site",
  description:
    "Toutes les pages de Track My Cars : produits, secteurs équipés, zones desservies en région PACA, abonnements et informations légales.",
  alternates: { canonical: "/plan-du-site" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Plan du site", href: "/plan-du-site" },
];

const linkCls = "text-sm text-muted-foreground hover:text-accent";

export default function PlanDuSitePage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead eyebrow="Navigation" title="Plan du site" />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold">Pages principales</h2>
            <div className="rule mt-3 mb-4" />
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/produits", label: "Produits" },
                { href: "/secteurs", label: "Secteurs équipés" },
                { href: "/zones", label: "Zones desservies" },
                { href: "/abonnements", label: "Abonnements" },
                { href: "/devis", label: "Demander un devis" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-lg font-bold">Produits</h2>
            <div className="rule mt-3 mb-4" />
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/produits/${p.slug}`} className={linkCls}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-lg font-bold">Informations légales</h2>
            <div className="rule mt-3 mb-4" />
            <ul className="space-y-2">
              {[
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/cgv", label: "Conditions générales de vente" },
                { href: "/politique-confidentialite", label: "Politique de confidentialité" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Zones desservies</h2>
            <div className="rule mt-3 mb-4" />
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/zones/${c.slug}`} className={linkCls}>
                    Traceur GPS {c.inCity} ({c.departmentCode})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Secteurs et villes</h2>
            <div className="rule mt-3 mb-4" />
            <div className="space-y-6">
              {sectors.map((s) => (
                <div key={s.slug}>
                  <h3 className="text-sm font-bold">
                    <Link href={`/secteurs/${s.slug}`} className="hover:text-accent">
                      {s.label}
                    </Link>
                  </h3>
                  <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                    {getCitiesForSector(s.slug).map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/secteurs/${s.slug}/${c.slug}`}
                          className="text-xs text-muted-foreground hover:text-accent"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
