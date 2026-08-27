import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { plans, site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  ProductJsonLd,
} from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = `${product.name} — ${product.price} €`;
  const description = `${product.tagline}. ${product.description.split(". ")[0]}. Garantie 3 ans, livraison gratuite, sans engagement.`;

  return {
    title,
    description,
    keywords: product.keywords,
    alternates: { canonical: `/produits/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/produits/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const relatedSectors = sectors.filter((s) =>
    s.recommendedProducts.includes(product.slug)
  );
  const others = products.filter((p) => p.slug !== product.slug);

  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/produits" },
    { name: product.shortName, href: `/produits/${product.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={product.faq} />
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
        slug={product.slug}
        features={product.features}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Fiche produit */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div>
            <p className="eyebrow">Traceur GPS</p>
            <h1 className="mt-3 text-3xl sm:text-4xl">{product.name}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{product.tagline}</p>

            <p className="mt-6 flex items-baseline gap-3">
              <span className="stat-value text-4xl">{product.price} €</span>
              <span className="text-sm text-muted-foreground">
                + abonnement dès 5,90 €/mois
              </span>
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-5 border-y border-border py-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Installation
                </dt>
                <dd className="mt-1 text-sm font-semibold">{product.installation}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Autonomie
                </dt>
                <dd className="mt-1 text-sm font-semibold">{product.autonomy}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href="/devis">Commander ce tracker</CTA>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold border border-border hover:border-accent hover:text-accent transition-all"
              >
                {site.phoneDisplay}
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-foreground">
              {site.guarantees.map((g) => (
                <li key={g.label} className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">▪</span>
                  <span>
                    <span className="font-semibold text-foreground">{g.label}</span> —{" "}
                    {g.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Description */}
      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow">Présentation</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              À quoi sert le {product.shortName.toLowerCase()}
            </h2>
            <div className="rule mt-5" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {relatedSectors.length > 0 && (
              <>
                <h3 className="mt-10 text-lg font-bold">
                  Recommandé pour ces usages
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {relatedSectors.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/secteurs/${s.slug}`}
                        className="inline-block border border-border bg-background rounded-md px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            <p className="eyebrow">Fonctions</p>
            <h2 className="mt-3 text-xl font-bold">Ce que fait ce boîtier</h2>
            <div className="rule mt-5" />
            <ul className="mt-6 space-y-2.5 text-sm">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className="text-accent mt-0.5" aria-hidden="true">▪</span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Abonnement */}
      <Section>
        <SectionHead
          eyebrow="Abonnement associé"
          title="Le tarif mensuel dépend du nombre de véhicules"
          lead="Le boîtier est un achat unique. L'abonnement couvre la carte SIM multi-opérateurs, la plateforme, les alertes et l'historique. Sans engagement de durée."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`border rounded-lg p-6 ${
                plan.highlight ? "border-accent border-2" : "border-border"
              }`}
            >
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {plan.maxVehicles
                  ? `${plan.minVehicles} à ${plan.maxVehicles} véhicules`
                  : `${plan.minVehicles}+ véhicules`}
              </p>
              <p className="mt-4">
                <span className="stat-value text-2xl">
                  {plan.pricePerMonth.toFixed(2).replace(".", ",")} €
                </span>
                <span className="text-xs text-muted-foreground"> /mois/véhicule</span>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Questions fréquentes"
          title={`${product.shortName} — vos questions`}
        />
        <div className="mt-10 max-w-4xl">
          <FaqList items={product.faq} />
        </div>
      </Section>

      {/* Autres produits */}
      <Section>
        <SectionHead eyebrow="Comparer" title="Les autres modèles de la gamme" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">
            Commander le {product.shortName.toLowerCase()}
          </h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Indiquez le nombre de véhicules à équiper et votre zone. Nous confirmons
            la disponibilité, le tarif total et le délai de livraison ou
            d&apos;installation.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander un devis</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
