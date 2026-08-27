import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/lib/data/cities";
import { getSector } from "@/lib/data/sectors";
import { products } from "@/lib/data/products";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  LocalBusinessJsonLd,
  ItemListJsonLd,
} from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const title = `Traceur GPS ${city.inCity} (${city.departmentCode}) — Installation sur site`;
  const description = `Tracker GPS ${city.inCity} : installation par nos techniciens en ${city.department}, suivi temps réel, antivol et gestion de flotte. Sans engagement, garantie 3 ans.`;

  return {
    title,
    description,
    keywords: [
      `traceur gps ${city.label.toLowerCase()}`,
      `tracker gps ${city.label.toLowerCase()}`,
      `antivol gps ${city.label.toLowerCase()}`,
      `geolocalisation flotte ${city.label.toLowerCase()}`,
      `boitier gps ${city.department.toLowerCase()}`,
    ],
    alternates: { canonical: `/zones/${city.slug}` },
    openGraph: { title, description, url: `${site.url}/zones/${city.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const citySectors = city.prioritySectors
    .map((s) => getSector(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const nearby = cities
    .filter((c) => c.slug !== city.slug && c.department === city.department)
    .concat(cities.filter((c) => c.slug !== city.slug && c.department !== city.department))
    .slice(0, 6);

  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Zones desservies", href: "/zones" },
    { name: city.label, href: `/zones/${city.slug}` },
  ];

  const faq = [
    {
      question: `Combien de temps faut-il pour être équipé ${city.inCity} ?`,
      answer: `Les boîtiers autonomes et OBD sont expédiés sous 48 à 72 heures et opérationnels dès réception, sans intervention. Pour une installation câblée avec coupe-moteur, nous planifions un rendez-vous ${city.inCity} sous une semaine en moyenne, sur votre site ou à votre domicile.`,
    },
    {
      question: `Quels quartiers de ${city.label} couvrez-vous ?`,
      answer: `L'ensemble de l'agglomération, notamment ${city.areas.join(", ")}. Si votre adresse se situe en périphérie de ${city.label}, contactez-nous : nous couvrons largement au-delà des limites communales, sur tout le département ${city.department}.`,
    },
    {
      question: `Le déplacement d'un technicien ${city.inCity} est-il facturé ?`,
      answer: `Le déplacement est offert à partir de trois véhicules équipés. En dessous, une participation forfaitaire s'applique selon la distance. Sur un déploiement de flotte, l'installation sur site est intégralement incluse dans l'offre Flotte.`,
    },
    {
      question: `Proposez-vous un suivi après l'installation ${city.inCity} ?`,
      answer: `Oui. Le support est assuré par notre équipe basée en France, joignable par téléphone, email et WhatsApp. Le matériel est garanti 3 ans pièces et main-d'œuvre, et une intervention sur site reste possible en cas de dysfonctionnement.`,
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={faq} />
      <LocalBusinessJsonLd
        city={city.label}
        lat={city.lat}
        lng={city.lng}
        department={city.department}
      />
      <ItemListJsonLd
        name={`Secteurs équipés ${city.inCity}`}
        items={citySectors.map((s) => ({
          name: `${s.label} ${city.inCity}`,
          url: `/secteurs/${s.slug}/${city.slug}`,
        }))}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary text-primary-foreground grid-bg mt-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {city.department} · {city.departmentCode}
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Traceur GPS {city.inCity}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              {city.context}
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

      {/* Secteurs locaux */}
      <Section>
        <SectionHead
          eyebrow={`Nos interventions ${city.inCity}`}
          title={`Ce que nous équipons ${city.inCity}`}
          lead={`Le tissu économique de ${city.label} détermine les usages les plus fréquents. Voici les secteurs pour lesquels nous intervenons le plus dans l'agglomération.`}
        />
        <div className="mt-12 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {citySectors.map((s) => (
            <Link
              key={s.slug}
              href={`/secteurs/${s.slug}/${city.slug}`}
              className="group bg-background p-6 hover:bg-muted transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                  {s.label}
                </h3>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.painPoints[0].body}
              </p>
              <p className="mt-4 text-xs">
                <span className="stat-value text-accent">{s.stat.value}</span>{" "}
                <span className="text-muted-foreground">{s.stat.label}</span>
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Zones couvertes */}
      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Périmètre</p>
            <h2 className="mt-3 text-2xl">Quartiers et communes desservis</h2>
            <div className="rule mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Nos techniciens interviennent sur l&apos;ensemble de
              l&apos;agglomération de {city.label} et sur le département{" "}
              {city.department}. Si votre adresse ne figure pas dans cette liste,
              contactez-nous : la couverture est plus large que les secteurs cités.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {city.areas.map((a) => (
                <li
                  key={a}
                  className="border border-border bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Axes structurants</p>
            <h2 className="mt-3 text-2xl">Le facteur temps</h2>
            <div className="rule mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Un véhicule dérobé {city.inCity} rejoint{" "}
              {city.axes.slice(0, 2).join(" ou ")} en quelques minutes. Passé ce
              délai, la zone de recherche s&apos;élargit de façon exponentielle et les
              chances de récupération s&apos;effondrent. Une alerte de mouvement
              transmise dans la minute change entièrement cette équation.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {city.axes.map((a) => (
                <li
                  key={a}
                  className="border border-border bg-background rounded-md px-3 py-1.5 text-xs font-mono text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Produits */}
      <Section>
        <SectionHead
          eyebrow="Matériel disponible"
          title={`Nos trackers livrés ${city.inCity}`}
          lead="Livraison gratuite sous 48 à 72 heures. Installation sur site pour les modèles câblés."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Questions fréquentes"
          title={`Track My Cars ${city.inCity}`}
        />
        <div className="mt-10 max-w-4xl">
          <FaqList items={faq} />
        </div>
      </Section>

      {/* Villes voisines */}
      <Section>
        <p className="eyebrow">Ailleurs en PACA</p>
        <h2 className="mt-3 text-xl font-bold">Autres zones desservies</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {nearby.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/zones/${c.slug}`}
                className="inline-block border border-border rounded-md px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                {c.label}
                <span className="ml-1.5 text-xs text-muted-foreground">
                  {c.departmentCode}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Un projet {city.inCity} ?</h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Décrivez votre parc et votre besoin. Nous revenons vers vous avec une
            configuration chiffrée et un créneau d&apos;intervention en{" "}
            {city.department}.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander un devis</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
