import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sectors, getSector } from "@/lib/data/sectors";
import { cities, getCity, getSectorCityPairs, getCitiesForSector } from "@/lib/data/cities";
import { getProduct } from "@/lib/data/products";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  LocalBusinessJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getSectorCityPairs().map((p) => ({
    sector: p.sectorSlug,
    city: p.citySlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string; city: string }>;
}): Promise<Metadata> {
  const { sector: sectorSlug, city: citySlug } = await params;
  const sector = getSector(sectorSlug);
  const city = getCity(citySlug);
  if (!sector || !city) return {};

  const title = `Traceur GPS ${sector.label} ${city.inCity} (${city.departmentCode})`;
  const description = `${sector.label} : installation de traceur GPS ${city.inCity} et alentours. Suivi temps réel, alerte de mouvement, coupe-moteur. Intervention sur site en ${city.department}.`;

  return {
    title,
    description,
    keywords: [
      ...sector.keywords.map((k) => `${k} ${city.label.toLowerCase()}`),
      `traceur gps ${city.label.toLowerCase()}`,
      `gps ${sector.label.toLowerCase()} ${city.department.toLowerCase()}`,
    ],
    alternates: { canonical: `/secteurs/${sector.slug}/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/secteurs/${sector.slug}/${city.slug}`,
    },
  };
}

export default async function SectorCityPage({
  params,
}: {
  params: Promise<{ sector: string; city: string }>;
}) {
  const { sector: sectorSlug, city: citySlug } = await params;
  const sector = getSector(sectorSlug);
  const city = getCity(citySlug);
  if (!sector || !city) notFound();

  const recommended = sector.recommendedProducts
    .slice(0, 3)
    .map((p) => getProduct(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // Autres secteurs prioritaires dans cette ville
  const otherSectorsHere = city.prioritySectors
    .filter((s) => s !== sector.slug)
    .map((s) => getSector(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Mêmes secteurs dans d'autres villes
  const otherCitiesForSector = getCitiesForSector(sector.slug).filter(
    (c) => c.slug !== city.slug
  );

  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Secteurs", href: "/secteurs" },
    { name: sector.label, href: `/secteurs/${sector.slug}` },
    { name: city.label, href: `/secteurs/${sector.slug}/${city.slug}` },
  ];

  // FAQ locale : questions du secteur + une question géographique unique
  const localFaq = [
    {
      question: `Intervenez-vous directement ${city.inCity} pour l'installation ?`,
      answer: `Oui. Nos techniciens se déplacent ${city.inCity} et sur l'ensemble de ${city.department}, y compris ${city.areas.slice(0, 4).join(", ")}. L'installation d'un boîtier câblé prend environ 45 minutes par véhicule et peut se faire sur votre site, sans immobilisation prolongée. Les modèles autonomes et OBD sont livrés gratuitement sous 48 à 72 heures.`,
    },
    {
      question: `Quel délai pour équiper une flotte ${city.inCity} ?`,
      answer: `Avec des boîtiers OBD ou aimantés, un parc entier peut être opérationnel en une demi-journée : chaque véhicule est équipé en quelques secondes. Pour des installations câblées avec coupe-moteur, nous planifions une intervention groupée sur votre site ${city.inCity}, généralement sous une semaine selon le nombre de véhicules.`,
    },
    ...sector.faq,
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={localFaq} />
      <LocalBusinessJsonLd
        city={city.label}
        lat={city.lat}
        lng={city.lng}
        department={city.department}
      />
      <ServiceJsonLd
        name={`Traceur GPS ${sector.label} ${city.inCity}`}
        description={`Installation de traceurs GPS pour ${sector.plural} ${city.inCity} et en ${city.department}.`}
        serviceType="Géolocalisation de véhicules"
        areaServed={city.label}
        url={`${site.url}/secteurs/${sector.slug}/${city.slug}`}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Hero local */}
      <section className="bg-primary text-primary-foreground grid-bg mt-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {city.label} · {city.department} ({city.departmentCode})
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Traceur GPS {sector.label.toLowerCase()} {city.inCity}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              {city.context}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA href="/devis">Devis pour {city.label}</CTA>
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

      {/* Pourquoi ici */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow">Contexte local</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              Pourquoi équiper {sector.possessive} {city.inCity}
            </h2>
            <div className="rule mt-5" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {sector.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {city.inCity.charAt(0).toUpperCase() + city.inCity.slice(1)}, cette
              exposition se double d&apos;une contrainte propre au territoire :{" "}
              {city.axes.length > 0 && (
                <>
                  la proximité immédiate des axes {city.axes.join(", ")} permet à un
                  véhicule dérobé de quitter l&apos;agglomération en quelques minutes.
                  {" "}
                </>
              )}
              C&apos;est précisément ce délai que la géolocalisation permet de
              transformer en information exploitable, plutôt qu&apos;en constat a
              posteriori.
            </p>

            <h3 className="mt-10 text-xl font-bold">
              Zones d&apos;intervention autour de {city.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nos techniciens se déplacent sur l&apos;ensemble de l&apos;agglomération,
              notamment sur les secteurs suivants :
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {city.areas.map((a) => (
                <li
                  key={a}
                  className="border border-border rounded-md px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="border border-border rounded-lg p-6 bg-muted sticky top-24">
              <p className="eyebrow">En bref</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Secteur
                  </dt>
                  <dd className="mt-0.5 font-semibold">{sector.label}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Zone
                  </dt>
                  <dd className="mt-0.5 font-semibold">
                    {city.label}, {city.department}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Chiffre-clé
                  </dt>
                  <dd className="mt-0.5">
                    <span className="stat-value text-accent text-lg">
                      {sector.stat.value}
                    </span>{" "}
                    <span className="text-xs text-muted-foreground">
                      {sector.stat.label}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    À partir de
                  </dt>
                  <dd className="mt-0.5">
                    <span className="stat-value text-lg">
                      {Math.min(...recommended.map((p) => p.price))} €
                    </span>{" "}
                    <span className="text-xs text-muted-foreground">
                      + 7,50 €/mois
                    </span>
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <CTA href="/devis">Demander un devis</CTA>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Risques */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Le constat"
          title={`Ce qui expose ${sector.possessive} ${city.inCity}`}
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
      <Section>
        <SectionHead
          eyebrow="La réponse"
          title="Ce que vous obtenez concrètement"
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

      {/* Produits */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Équipement recommandé"
          title={`Trackers adaptés aux ${sector.plural} ${city.inCity}`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* FAQ locale */}
      <Section>
        <SectionHead
          eyebrow="Questions fréquentes"
          title={`${sector.label} ${city.inCity} — vos questions`}
        />
        <div className="mt-10 max-w-4xl">
          <FaqList items={localFaq} />
        </div>
      </Section>

      {/* Maillage interne */}
      <Section className="bg-muted">
        <div className="grid gap-12 md:grid-cols-2">
          {otherSectorsHere.length > 0 && (
            <div>
              <p className="eyebrow">Autres secteurs {city.inCity}</p>
              <h2 className="mt-3 text-xl font-bold">
                Nous équipons aussi {city.inCity}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {otherSectorsHere.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/secteurs/${s.slug}/${city.slug}`}
                      className="inline-block border border-border bg-background rounded-md px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                <Link
                  href={`/zones/${city.slug}`}
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  Toute notre offre {city.inCity} →
                </Link>
              </p>
            </div>
          )}

          {otherCitiesForSector.length > 0 && (
            <div>
              <p className="eyebrow">{sector.label} ailleurs en PACA</p>
              <h2 className="mt-3 text-xl font-bold">
                Autres villes couvertes pour ce secteur
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {otherCitiesForSector.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/secteurs/${sector.slug}/${c.slug}`}
                      className="inline-block border border-border bg-background rounded-md px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                <Link
                  href={`/secteurs/${sector.slug}`}
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  Tout sur le secteur {sector.label} →
                </Link>
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">
            Équipez {sector.possessive} {city.inCity}
          </h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Intervention sur site en {city.department}, matériel garanti 2 ans,
            abonnement sans engagement. Dites-nous ce que vous avez à protéger.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href="/devis">Demander un devis</CTA>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold border border-current hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
