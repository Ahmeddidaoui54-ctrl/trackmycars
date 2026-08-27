import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "CGV Track My Cars : commande, prix, livraison, droit de rétractation de 14 jours, garantie 3 ans, abonnement sans engagement et résiliation.",
  alternates: { canonical: "/cgv" },
  robots: { index: false, follow: true },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "CGV", href: "/cgv" },
];

const articles = [
  {
    title: "Objet",
    body: `Les présentes conditions régissent la vente de traceurs GPS et la fourniture des services d'abonnement associés par ${site.legalName}. Toute commande implique l'acceptation sans réserve des présentes conditions.`,
  },
  {
    title: "Prix",
    body: "Les prix des boîtiers sont indiqués en euros. Les tarifs d'abonnement sont exprimés hors taxes, par véhicule et par mois. Le prix applicable est celui en vigueur au jour de la commande. Les frais de livraison sont offerts en France métropolitaine.",
  },
  {
    title: "Commande et paiement",
    body: "La commande est ferme à réception du paiement ou de l'acompte convenu. Pour les déploiements de flotte, un devis préalable détaille le matériel, l'abonnement et les prestations d'installation.",
  },
  {
    title: "Livraison",
    body: "Les boîtiers ne nécessitant pas d'installation sont expédiés sous 48 à 72 heures ouvrées. Les installations câblées font l'objet d'un rendez-vous planifié, en région Provence-Alpes-Côte d'Azur, généralement sous une semaine.",
  },
  {
    title: "Droit de rétractation",
    body: "Le client consommateur dispose de quatorze jours à compter de la réception pour exercer son droit de rétractation, sans motif. Le retour est gratuit et le remboursement intervient dans les quatorze jours suivant la réception du matériel, sous réserve qu'il soit complet et en état de revente.",
  },
  {
    title: "Garantie",
    body: "Le matériel est garanti trois ans, pièces et main-d'œuvre, contre tout défaut de fabrication dans des conditions normales d'usage. Sont exclus les dommages résultant d'un accident, d'une immersion hors spécification, d'une modification ou d'une intervention par un tiers non habilité. Les garanties légales de conformité et des vices cachés s'appliquent en tout état de cause.",
  },
  {
    title: "Abonnement et résiliation",
    body: "L'abonnement est conclu sans engagement de durée. Il est facturé mensuellement et reconduit tacitement. Il peut être résilié à tout moment, par email ou depuis l'espace client ; la facturation cesse à la fin du mois en cours. Le client demeure propriétaire du boîtier après résiliation.",
  },
  {
    title: "Disponibilité du service",
    body: "Le service de suivi dépend de la disponibilité des réseaux satellitaires et cellulaires, sur lesquels l'éditeur n'a pas de maîtrise. Aucune garantie de continuité absolue ne peut être donnée. Un traceur GPS ne constitue en aucun cas un dispositif de secours ou une balise de détresse.",
  },
  {
    title: "Usage licite",
    body: "Le client s'engage à n'utiliser le service que sur des biens dont il est propriétaire ou détenteur légitime, et à respecter les obligations d'information des personnes concernées prévues par le RGPD. Toute utilisation destinée à surveiller une personne à son insu est strictement interdite et engage la seule responsabilité du client.",
  },
  {
    title: "Droit applicable",
    body: "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire, le cas échéant par la voie de la médiation de la consommation.",
  },
];

export default function CgvPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl">Conditions générales de vente</h1>
          <div className="rule mt-5" />

          <ol className="mt-10 space-y-8">
            {articles.map((a, i) => (
              <li key={a.title}>
                <h2 className="text-lg font-bold">
                  <span className="stat-value text-accent text-sm mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {a.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
