import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { plans } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nos trackers GPS — Aimanté, OBD, Coupe-moteur, Mini",
  description:
    "Quatre traceurs GPS professionnels de 79 € à 199 € : aimanté 30 jours d'autonomie, OBD sans installation, coupe-moteur antivol, mini discret. Garantie 3 ans.",
  alternates: { canonical: "/produits" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Produits", href: "/produits" },
];

const comparison = [
  { label: "Installation", key: "installation" as const },
  { label: "Autonomie", key: "autonomy" as const },
];

export default function ProduitsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <ItemListJsonLd
        name="Trackers GPS"
        items={products.map((p) => ({ name: p.name, url: `/produits/${p.slug}` }))}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Catalogue"
          title="Quatre boîtiers, quatre façons de couvrir un risque"
          lead="Tous nos trackers partagent la même application, les mêmes alertes et la même couverture réseau sur plus de 150 pays. Ils diffèrent par le mode d'alimentation, la discrétion et la capacité d'immobilisation à distance."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* Comparatif */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Comparatif"
          title="Lequel choisir ?"
          lead="Le bon modèle dépend d'abord de la présence ou non d'une alimentation sur le matériel à équiper, puis du niveau de protection recherché."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-3xl border-collapse text-sm">
            <caption className="sr-only">
              Comparatif des quatre modèles de traceurs GPS
            </caption>
            <thead>
              <tr className="border-b-2 border-primary">
                <th scope="col" className="p-3 text-left font-bold">
                  Critère
                </th>
                {products.map((p) => (
                  <th key={p.slug} scope="col" className="p-3 text-left font-bold">
                    {p.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <th scope="row" className="p-3 text-left font-semibold">
                  Prix
                </th>
                {products.map((p) => (
                  <td key={p.slug} className="p-3">
                    <span className="stat-value">{p.price} €</span>
                  </td>
                ))}
              </tr>
              {comparison.map((row) => (
                <tr key={row.key} className="border-b border-border">
                  <th scope="row" className="p-3 text-left font-semibold">
                    {row.label}
                  </th>
                  {products.map((p) => (
                    <td key={p.slug} className="p-3 text-muted-foreground">
                      {p[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-b border-border">
                <th scope="row" className="p-3 text-left font-semibold">
                  Coupe-moteur
                </th>
                {products.map((p) => (
                  <td key={p.slug} className="p-3">
                    {p.features.some((f) => f.toLowerCase().includes("coupe-moteur")) ? (
                      <span className="text-success font-semibold">Oui</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <th scope="row" className="p-3 text-left font-semibold">
                  Micro intégré
                </th>
                {products.map((p) => (
                  <td key={p.slug} className="p-3">
                    {p.features.some((f) => f.toLowerCase().includes("micro")) ? (
                      <span className="text-success font-semibold">Oui</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Abonnements rappel */}
      <Section>
        <SectionHead
          eyebrow="Abonnement"
          title="Le boîtier s'achète, le service s'abonne"
          lead="Le tracker est un achat unique dont vous restez propriétaire. L'abonnement couvre la carte SIM multi-opérateurs, la plateforme et les alertes. Résiliable à tout moment."
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
              <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
              <p className="mt-4">
                <span className="stat-value text-2xl">
                  {plan.pricePerMonth.toFixed(2).replace(".", ",")} €
                </span>
                <span className="text-xs text-muted-foreground"> /mois/véhicule</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTA href="/abonnements" variant="outline">
            Détail des abonnements
          </CTA>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Hésitation entre deux modèles ?</h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Décrivez-nous le matériel à équiper et l&apos;usage. Nous vous
            recommandons la configuration adaptée, sans surdimensionner.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander conseil</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
