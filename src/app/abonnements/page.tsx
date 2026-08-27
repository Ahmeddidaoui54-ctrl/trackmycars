import type { Metadata } from "next";
import { plans, site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Abonnements — Suivi GPS dès 5,90 €/mois sans engagement",
  description:
    "Abonnement traceur GPS : Essentiel 9,90 €, Pro 7,90 €, Flotte 5,90 € par mois et par véhicule. Carte SIM incluse, 150 pays, résiliable à tout moment.",
  alternates: { canonical: "/abonnements" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Abonnements", href: "/abonnements" },
];

const faq = [
  {
    question: "Pourquoi un abonnement en plus du boîtier ?",
    answer:
      "Le tracker transmet ses positions via une carte SIM multi-opérateurs qui consomme des données en permanence, sur plus de 150 pays. L'abonnement couvre cette connectivité, l'hébergement de vos données, la plateforme de suivi, l'application mobile et le support. Sans lui, le boîtier ne peut pas communiquer.",
  },
  {
    question: "Puis-je résilier quand je veux ?",
    answer:
      "Oui, à tout moment et sans pénalité. Nos abonnements sont sans engagement de durée : vous résiliez depuis votre espace client ou par simple email, et la facturation s'arrête à la fin du mois en cours. Vous restez propriétaire du boîtier.",
  },
  {
    question: "Le tarif change-t-il si j'ajoute des véhicules ?",
    answer:
      "Oui, à la baisse. Le prix par véhicule diminue automatiquement dès que vous franchissez un palier : 7,90 € à partir du troisième véhicule, 5,90 € au-delà de vingt. Le changement de palier s'applique dès le mois suivant, sans démarche de votre part.",
  },
  {
    question: "Y a-t-il des frais cachés ou du roaming ?",
    answer:
      "Non. La carte SIM, les alertes illimitées, l'application et les mises à jour sont incluses. Aucun frais de roaming n'est facturé sur nos abonnements standard, y compris hors d'Europe, dans la limite des 150 pays couverts.",
  },
  {
    question: "Combien de temps mes données sont-elles conservées ?",
    answer:
      "Trois mois en offre Essentiel, douze mois en Pro, sans limite en Flotte. Vous pouvez exporter vos historiques à tout moment et demander leur suppression conformément au RGPD. Les données sont hébergées en Union européenne.",
  },
  {
    question: "L'abonnement Flotte inclut-il l'installation ?",
    answer:
      "Oui. À partir de vingt et un véhicules, l'installation sur site par nos techniciens est intégralement incluse, ainsi que la formation de vos équipes à la plateforme et un interlocuteur dédié.",
  },
];

export default function AbonnementsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={faq} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Tarification"
          title="Un tarif qui baisse quand votre flotte grandit"
          lead="Le boîtier est un achat unique dont vous restez propriétaire. L'abonnement couvre la connectivité, la plateforme et le support — sans engagement de durée, résiliable à tout moment."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`flex flex-col rounded-lg p-7 ${
                plan.highlight
                  ? "border-2 border-accent bg-background shadow-lg"
                  : "border border-border bg-background"
              }`}
            >
              {plan.highlight && (
                <p className="mb-4 -mt-1">
                  <span className="inline-block bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm">
                    Le plus choisi
                  </span>
                </p>
              )}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.tagline}</p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="stat-value text-4xl">
                  {plan.pricePerMonth.toFixed(2).replace(".", ",")} €
                </span>
                <span className="text-xs text-muted-foreground">/mois/véhicule</span>
              </p>
              <p className="mt-1.5 text-xs text-muted-foreground">
                {plan.maxVehicles
                  ? `De ${plan.minVehicles} à ${plan.maxVehicles} véhicules`
                  : `À partir de ${plan.minVehicles} véhicules`}
              </p>

              <ul className="mt-7 flex-1 space-y-2.5 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="text-accent mt-0.5" aria-hidden="true">▪</span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CTA href="/devis" variant={plan.highlight ? "primary" : "outline"}>
                  Choisir {plan.name}
                </CTA>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
          Tarifs hors taxes, par véhicule et par mois. Le boîtier reste à acquérir
          séparément, de 79 € à 199 € selon le modèle. Le passage d&apos;un palier à
          l&apos;autre est automatique et prend effet le mois suivant.
        </p>
      </Section>

      {/* Ce qui est inclus partout */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Dans tous les plans"
          title="Ce que vous n'avez pas à payer en plus"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.guarantees.map((g) => (
            <div key={g.label} className="border-t-2 border-accent pt-5">
              <h3 className="text-base font-bold">{g.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {g.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHead eyebrow="Questions fréquentes" title="Abonnements et facturation" />
        <div className="mt-10 max-w-4xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">
            Plus de vingt véhicules à équiper ?
          </h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Au-delà de vingt véhicules, nous établissons une proposition sur mesure :
            tarif dégressif, installation incluse, interlocuteur dédié et accès API si
            vous devez intégrer les données à vos outils.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander une proposition</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
