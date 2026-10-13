import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
  FAQJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Traceur GPS flotte BTP & artisans — antivol outillage & fourgons",
  description:
    "Protection GPS pour fourgons d'artisans et engins de chantier : antivol outillage la nuit, geofencing, preuve de passage sur chantier, alerte de mouvement. Devis multi-véhicules.",
  alternates: { canonical: "/flotte-btp-artisans" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Professionnels", href: "/professionnels" },
  { name: "BTP & Artisans", href: "/flotte-btp-artisans" },
];

const painPoints = [
  {
    title: "Le vol d'outillage la nuit",
    body: "Un fourgon stationné devant le domicile ou sur un chantier est une cible connue. L'outillage dérobé en une nuit représente plusieurs milliers d'euros et l'arrêt du chantier le lendemain.",
  },
  {
    title: "L'engin qui disparaît du chantier",
    body: "Mini-pelle, compresseur, groupe électrogène : du matériel qui se déplace rarement, donc qu'on ne surveille pas — jusqu'au jour où il n'est plus là.",
  },
  {
    title: "La preuve de passage contestée",
    body: "Un client conteste une intervention ou des heures sur site. Sans trace horodatée du passage du véhicule, la discussion est invérifiable.",
  },
];

const benefits = [
  {
    title: "Alerte hors-horaires",
    body: "Vous définissez les plages de travail. Tout mouvement du fourgon la nuit ou le week-end déclenche une notification immédiate.",
  },
  {
    title: "Geofencing chantier & dépôt",
    body: "Une zone est tracée autour du dépôt et de chaque chantier. Dès qu'un engin en sort sans raison, vous êtes alerté avant qu'il ne soit loin.",
  },
  {
    title: "Preuve de passage horodatée",
    body: "L'historique d'itinéraire atteste de l'heure d'arrivée et de départ sur chaque site — opposable en cas de litige client ou de facturation d'heures.",
  },
  {
    title: "Coupe-moteur sur les modèles équipés",
    body: "En cas de vol avéré, le véhicule est immobilisé au prochain arrêt, le temps que les forces de l'ordre interviennent.",
  },
];

const faq = [
  {
    question: "Quel est le meilleur traceur pour éviter le vol d'outillage BTP ?",
    answer:
      "Un traceur autonome à batterie longue durée, posé de façon discrète dans le fourgon, couplé à une alerte de mouvement hors-horaires. L'objectif n'est pas seulement de localiser après le vol, mais d'être prévenu dès le premier mouvement suspect, la nuit.",
  },
  {
    question: "Peut-on tracer un engin de chantier qui n'a pas de batterie accessible ?",
    answer:
      "Oui, avec un traceur autonome magnétique ou à batterie interne longue durée, qui ne dépend pas de l'alimentation de l'engin. C'est la solution adaptée au matériel stocké ou peu utilisé.",
  },
  {
    question: "Le geofencing fonctionne-t-il sur plusieurs chantiers à la fois ?",
    answer:
      "Oui. Vous pouvez définir autant de zones que nécessaire (dépôt + chantiers en cours), chacune avec ses propres règles d'alerte. Chaque véhicule ou engin est rattaché aux zones qui le concernent.",
  },
];

export default function FlotteBtpArtisansPage() {
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
          eyebrow="BTP & artisans"
          title="Protéger les fourgons, l'outillage et les engins de chantier"
          lead="Pour un artisan, le véhicule et son contenu sont l'outil de travail. Un vol la nuit, c'est l'outillage perdu et le chantier arrêté. L'enjeu n'est pas de localiser après coup, mais d'être alerté au premier mouvement suspect — et de disposer d'une preuve de passage sur chaque site."
          as="h1"
        />
      </Section>

      <Section className="bg-muted/40 pt-0!">
        <SectionHead eyebrow="Le problème" title="Ce qui expose un artisan" as="h2" />
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
          <SectionHead eyebrow="Questions fréquentes" title="BTP & artisans" as="h2" />
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
            title="Équiper vos fourgons et vos engins"
            lead="Indiquez le nombre de véhicules et d'engins à protéger : on vous recommande l'équipement adapté et un devis multi-véhicules."
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
