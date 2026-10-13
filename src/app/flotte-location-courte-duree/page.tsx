import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
  FAQJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Traceur GPS location courte durée — coupe-moteur & antivol flotte",
  description:
    "Sécurisation GPS pour loueurs de véhicules : antivol, alerte de franchissement de zone, coupure moteur à distance sur impayé ou non-restitution. Suivi de flotte. Devis multi-véhicules.",
  alternates: { canonical: "/flotte-location-courte-duree" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Professionnels", href: "/professionnels" },
  { name: "Loueurs & courte durée", href: "/flotte-location-courte-duree" },
];

const painPoints = [
  {
    title: "La non-restitution",
    body: "Un véhicule loué qui n'est pas rendu à l'échéance immobilise un actif et bloque les réservations suivantes. Sans localisation, la récupération dépend de la bonne volonté du locataire.",
  },
  {
    title: "Le franchissement de zone non autorisé",
    body: "Certains contrats interdisent la sortie du territoire ou d'un périmètre défini. Sans alerte, le dépassement n'est constaté qu'au retour — ou jamais.",
  },
  {
    title: "L'impayé sur un véhicule dans la nature",
    body: "Loyer impayé, caution insuffisante : l'actif roule sans contrepartie financière et sans moyen de pression légal immédiat.",
  },
];

const benefits = [
  {
    title: "Coupure moteur à distance",
    body: "Sur les modèles équipés, et dans le cadre contractuel prévu, le redémarrage est bloqué au prochain arrêt en cas de vol avéré ou de non-restitution.",
  },
  {
    title: "Alerte de franchissement de zone",
    body: "Vous définissez un périmètre autorisé par contrat. Toute sortie déclenche une alerte immédiate, avant que le véhicule ne soit hors de portée.",
  },
  {
    title: "Suivi de flotte en temps réel",
    body: "Chaque véhicule de location remonte sa position sur une vue unique : disponibilité, localisation, état de la rotation.",
  },
  {
    title: "Preuve horodatée opposable",
    body: "L'historique d'itinéraire documente l'usage réel : utile pour un litige, une déclaration de sinistre ou une procédure de récupération.",
  },
];

const faq = [
  {
    question: "La coupure moteur à distance est-elle légale sur un véhicule loué ?",
    answer:
      "Elle doit être strictement encadrée par le contrat de location et n'être déclenchée que dans les cas prévus (vol avéré, non-restitution après mise en demeure), à l'arrêt, jamais en roulant. Le locataire doit être informé de la présence du dispositif et de ses conditions d'activation à la signature.",
  },
  {
    question: "Comment récupérer un véhicule non restitué ?",
    answer:
      "La localisation en temps réel permet de connaître la position du véhicule et de la transmettre aux autorités dans le cadre d'une procédure. Couplée à la preuve d'itinéraire et à la mise en demeure contractuelle, elle accélère nettement la récupération.",
  },
  {
    question: "Peut-on suivre toute une flotte de location sur une seule interface ?",
    answer:
      "Oui. Chaque véhicule équipé est rattaché à un compte unique, avec la position et l'historique de chacun, ce qui permet de gérer la rotation et la disponibilité sans multiplier les outils.",
  },
];

export default function FlotteLocationCourteDureePage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <LocalBusinessJsonLd />
      <FAQJsonLd questions={faq} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Loueurs & courte durée"
          title="Sécuriser des véhicules confiés à des tiers"
          lead="Un parc de location, c'est des actifs qui roulent entre des mains que vous ne contrôlez pas. L'enjeu : savoir où ils sont, être alerté d'un usage hors cadre, et disposer d'un levier réel — coupure moteur encadrée — en cas de vol ou de non-restitution."
          as="h1"
        />
      </Section>

      <Section className="bg-muted/40 pt-0!">
        <SectionHead eyebrow="Le problème" title="Ce qui expose un loueur" as="h2" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {painPoints.map((p) => (
            <div key={p.title}>
              <h3 className="text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="La réponse" title="Ce que le dispositif apporte" as="h2" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3 className="text-base font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <div className="max-w-3xl">
          <SectionHead eyebrow="Questions fréquentes" title="Location courte durée" as="h2" />
          <dl className="mt-10 space-y-8">
            {faq.map((q) => (
              <div key={q.question}>
                <dt className="text-base font-bold text-foreground speakable">{q.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <SectionHead
            eyebrow="Devis"
            title="Équiper votre flotte de location"
            lead="Indiquez la taille de votre parc et vos contraintes contractuelles : on vous recommande l'équipement et un devis multi-véhicules."
            as="h2"
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <CTA href="/devis">Demander un devis</CTA>
            <Link href="/professionnels" className="btn btn-outline">
              Voir toutes les solutions pro
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
