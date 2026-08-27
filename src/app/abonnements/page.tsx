import Link from "next/link";
import type { Metadata } from "next";
import { plans, site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Nos abonnements — Suivi GPS dès 7,50 €/mois",
  description:
    "Abonnement traceur GPS : 15 € pour 1 mois, 60 € pour 6 mois (10 €/mois), 90 € pour 12 mois (7,50 €/mois). Carte SIM 4G incluse, application gratuite.",
  keywords: [
    "abonnement traceur gps",
    "prix abonnement gps véhicule",
    "traceur gps sans engagement",
    "forfait carte sim traceur gps",
  ],
  alternates: { canonical: "/abonnements" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Nos abonnements", href: "/abonnements" },
];

const faq = [
  {
    question: "Pourquoi un abonnement en plus du boîtier ?",
    answer:
      "Le tracker transmet ses positions via une carte SIM 4G qui consomme environ 100 Mo de données par mois. L'abonnement couvre cette connectivité et l'accès à la plateforme de suivi. Sans lui, le boîtier ne peut pas communiquer sa position.",
  },
  {
    question: "L'application mobile est-elle facturée en plus ?",
    answer:
      "Non. L'application iOS et Android est entièrement gratuite, sans frais caché ni option payante. L'interface web est également accessible sans supplément.",
  },
  {
    question: "Quelle formule choisir ?",
    answer:
      "La formule 1 mois à 15 € convient pour tester ou pour un besoin ponctuel : elle est sans engagement. Dès que l'usage devient durable, la formule 12 mois à 90 € revient à 7,50 € par mois, soit la moitié du tarif mensuel. La formule 6 mois à 60 € est le compromis intermédiaire.",
  },
  {
    question: "L'abonnement est-il par tracker ou par compte ?",
    answer:
      "Par tracker. Chaque boîtier dispose de sa propre carte SIM et donc de son propre abonnement. Pour une flotte, contactez-nous : nous établissons une proposition adaptée au nombre de véhicules à équiper.",
  },
  {
    question: "Puis-je changer de formule en cours de route ?",
    answer:
      "Oui. À l'échéance de votre période en cours, vous choisissez librement de reconduire la même formule ou d'en prendre une autre. Aucune reconduction n'est imposée.",
  },
  {
    question: "Que se passe-t-il si je ne renouvelle pas ?",
    answer:
      "Le boîtier reste votre propriété : vous l'avez acheté. Seule la transmission des positions s'interrompt à la fin de la période. Vous pouvez réactiver un abonnement à tout moment sans racheter de matériel.",
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
          eyebrow="Des trackers performants, une connectivité optimisée"
          title="Découvrez nos abonnements trackers"
          lead="Nos trackers, équipés de cartes SIM 4G, consomment environ 100 Mo de données par mois. Vous choisissez la durée qui correspond à votre usage : plus elle est longue, plus le tarif mensuel baisse."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`flex flex-col rounded-xl p-7 ${
                plan.highlight
                  ? "border-2 border-cta bg-white shadow-lg"
                  : "border border-border/50 bg-white"
              }`}
            >
              {plan.highlight && (
                <p className="mb-4 -mt-1">
                  <span className="inline-block bg-cta text-white text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm">
                    Populaire
                  </span>
                </p>
              )}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.tagline}</p>

              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">
                  {plan.totalPrice} €
                </span>
                {plan.months > 1 && (
                  <span className="text-sm text-muted-foreground">
                    au total
                  </span>
                )}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-cta">
                soit {plan.pricePerMonth.toFixed(2).replace(".", ",")} €/mois
              </p>

              <ul className="mt-7 flex-1 space-y-2.5 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="text-cta mt-0.5" aria-hidden="true">✔</span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/devis"
                  className={`btn w-full ${plan.highlight ? "btn-primary" : "btn-outline text-primary"}`}
                >
                  S&apos;abonner
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
          Tarifs par tracker. Le boîtier est à acquérir séparément, de 79 € à 199 €
          selon le modèle, et reste votre propriété. L&apos;application mobile et
          l&apos;interface web sont incluses sans supplément.
        </p>
      </Section>

      {/* Ce qui est inclus */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Dans tous les abonnements"
          title="Ce que vous n'avez pas à payer en plus"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.guarantees.map((g) => (
            <div key={g.label} className="border-t-2 border-cta pt-5">
              <h3 className="text-base font-bold">{g.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {g.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Questions fréquentes" title="Abonnements et facturation" />
        <div className="mt-10 max-w-4xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl text-white">
            Plusieurs véhicules à équiper ?
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Pour une flotte, nous établissons une proposition adaptée au nombre de
            véhicules, avec installation sur site partout en {site.region}.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander une proposition</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
