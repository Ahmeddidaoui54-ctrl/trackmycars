import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sectors, getSector } from "@/lib/data/sectors";
import { getProduct } from "@/lib/data/products";
import { getCitiesForSector } from "@/lib/data/cities";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    keywords: sector.keywords,
    alternates: { canonical: `/secteurs/${sector.slug}` },
    openGraph: {
      title: sector.metaTitle,
      description: sector.metaDescription,
      url: `${site.url}/secteurs/${sector.slug}`,
    },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const recommended = sector.recommendedProducts
    .map((p) => getProduct(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const sectorCities = getCitiesForSector(sector.slug);
  const others = sectors.filter((s) => s.slug !== sector.slug).slice(0, 6);

  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Secteurs", href: "/secteurs" },
    { name: sector.label, href: `/secteurs/${sector.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={sector.faq} />
      <ServiceJsonLd
        name={`Traceur GPS ${sector.label}`}
        description={sector.metaDescription}
        serviceType="Géolocalisation de véhicules"
        url={`${site.url}/secteurs/${sector.slug}`}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Hero secteur */}
      <section className="bg-primary text-primary-foreground grid-bg mt-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">{sector.label}</p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">{sector.h1}</h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              {sector.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA href="/devis">Demander un devis</CTA>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold border border-current hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <Section>
        <SectionHead
          eyebrow="Le constat"
          title={`Ce qui expose ${sector.possessive}`}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {sector.painPoints.map((p, i) => (
            <div key={p.title} className="border-t-2 border-destructive pt-5">
              <span className="stat-value text-sm text-destructive">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bénéfices */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="La réponse"
          title={`Ce que change un traceur GPS sur ${sector.possessive}`}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {sector.benefits.map((b) => (
            <div key={b.title} className="border-t-2 border-accent pt-5">
              <h3 className="text-lg font-bold">{b.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Produits recommandés */}
      <Section>
        <SectionHead
          eyebrow="Équipement recommandé"
          title={`Les trackers adaptés aux ${sector.plural}`}
          lead="Classés par pertinence pour cet usage. Tous partagent la même application et la même couverture réseau."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* Maillage géo */}
      {sectorCities.length > 0 && (
        <Section className="bg-muted">
          <SectionHead
            eyebrow="Couverture locale"
            title={`Traceur GPS ${sector.label.toLowerCase()} par ville`}
            lead={`Nos techniciens interviennent sur site dans ces métropoles de ${site.region}. Chaque page détaille le contexte local et les modalités d'intervention.`}
          />
          <div className="mt-10 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {sectorCities.map((c) => (
              <Link
                key={c.slug}
                href={`/secteurs/${sector.slug}/${c.slug}`}
                className="group bg-background p-5 hover:bg-muted transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold group-hover:text-accent transition-colors">
                    {sector.label} {c.inCity}
                  </h3>
                  <span className="text-xs text-muted-foreground">{c.departmentCode}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {c.department} · {c.population.toLocaleString("fr-FR")} habitants
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <SectionHead
          eyebrow="Questions fréquentes"
          title={`${sector.label} — ce qu'on nous demande`}
        />
        <div className="mt-10 max-w-4xl">
          <FaqList items={sector.faq} />
        </div>
      </Section>

      {/* Autres secteurs */}
      <Section className="bg-muted">
        <SectionHead eyebrow="Autres usages" title="Vous équipez aussi ces matériels ?" />
        <div className="mt-8 flex flex-wrap gap-2">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/secteurs/${s.slug}`}
              className="border border-border bg-background rounded-md px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">
            Une configuration chiffrée pour {sector.possessive}
          </h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Décrivez-nous votre parc et votre exposition. Nous revenons vers vous avec
            le matériel adapté, le coût total et le délai d&apos;intervention.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander un devis</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
