import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  LocalBusinessJsonLd,
  FAQJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Professionnels — Géolocalisation & sécurité de flotte",
  description:
    "Solution de géolocalisation pour flottes et véhicules professionnels : artisans, BTP, transport, VTC, loueurs. Multi-véhicules, geofencing, coupe-moteur, conformité CNIL/RGPD. Devis multi-véhicules.",
  alternates: { canonical: "/professionnels" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Professionnels", href: "/professionnels" },
];

/** Portes d'entrée métier — neutre, sans promesse logicielle (télématique
 *  avancée / ROI gatés tant que la capacité opérateur n'est pas confirmée). */
const metiers = [
  {
    href: "/flotte-btp-artisans",
    title: "BTP & Artisans",
    body: "Vol d'outillage dans les fourgons la nuit, preuve de passage sur chantier, alerte si un engin quitte une zone définie (geofencing).",
  },
  {
    href: "/secteurs/taxi-vtc",
    title: "Transport & VTC",
    body: "Suivi multi-véhicules, historique d'itinéraire opposable en cas de litige de course, coupe-moteur en cas de non-restitution.",
  },
  {
    href: "/flotte-location-courte-duree",
    title: "Loueurs & courte durée",
    body: "Antivol radical, alerte de franchissement de zone non autorisée, coupure moteur à distance sur impayé ou vol avéré.",
  },
  {
    href: "/secteurs/flotte-entreprise",
    title: "Flottes & TPE/PME",
    body: "Une carte pour toute la flotte, kilomètres et interventions tracés, cadre clair pour les véhicules confiés aux équipes.",
  },
];

const benefits = [
  {
    title: "Une carte, toute la flotte",
    body: "Chaque véhicule équipé remonte sa position sur une vue unique. Fini les appels de coordination pour savoir qui est où.",
  },
  {
    title: "Geofencing & alertes",
    body: "Vous définissez des zones (dépôt, chantier, secteur). Une alerte part dès qu'un véhicule en sort en dehors des plages prévues.",
  },
  {
    title: "Coupe-moteur à distance",
    body: "Sur les modèles équipés, le redémarrage est bloqué au prochain arrêt — dissuasion réelle en cas de vol ou de non-restitution.",
  },
  {
    title: "Preuve horodatée",
    body: "Historique d'itinéraire exploitable pour un litige client, un dossier d'assurance ou une preuve de passage sur site.",
  },
];

/** Questions CNIL/RGPD — base factuelle reprise de /guide-legal, pas d'invention. */
const faq = [
  {
    question: "Est-il légal de géolocaliser le véhicule d'un salarié ?",
    answer:
      "Oui, sous conditions. La géolocalisation doit être proportionnée au but poursuivi (art. L.1121-1 du Code du travail), les salariés doivent être informés individuellement au préalable, les représentants du personnel consultés, et le traitement inscrit au registre RGPD de l'entreprise. Elle ne peut pas servir à surveiller en permanence un salarié qui dispose d'une liberté dans l'organisation de ses déplacements.",
  },
  {
    question: "Faut-il déclarer les balises GPS auprès de la CNIL ?",
    answer:
      "Depuis le RGPD, il n'y a plus de déclaration préalable à la CNIL. L'entreprise doit en revanche inscrire le traitement à son registre des activités de traitement, définir une finalité et une durée de conservation limitées, et pouvoir démontrer sa conformité en cas de contrôle.",
  },
  {
    question: "Le dispositif doit-il être désactivable hors temps de travail ?",
    answer:
      "Oui. Le salarié doit pouvoir désactiver la géolocalisation en dehors de ses heures de travail, notamment lorsqu'il est autorisé à utiliser le véhicule à titre personnel. Un bouton de bascule « professionnel / privé » répond à cette exigence.",
  },
  {
    question: "Combien de temps peut-on conserver les données de localisation ?",
    answer:
      "La durée doit être limitée à ce qui est nécessaire à la finalité. À titre indicatif, les données de localisation brutes sont généralement conservées deux mois maximum, sauf obligation légale spécifique justifiant une durée plus longue.",
  },
];

export default function ProfessionnelsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <LocalBusinessJsonLd />
      <ItemListJsonLd
        name="Solutions professionnelles"
        items={metiers.map((m) => ({ name: m.title, url: m.href }))}
      />
      <FAQJsonLd questions={faq} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Espace professionnels"
          title="Sécuriser et piloter un parc de 3 à 50+ véhicules"
          lead="La protection d'un parc professionnel ne répond pas aux mêmes règles qu'un antivol grand public : exposition financière plus lourde, litiges clients, et un cadre légal précis sur la géolocalisation des salariés. Cette page regroupe les solutions par métier, avec la conformité CNIL/RGPD traitée dès le départ."
          as="h1"
        />

        <div className="mt-14 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-2">
          {metiers.map((m) => (
            <article key={m.href} className="bg-background p-6 sm:p-8">
              <h2 className="text-xl font-bold">
                <Link href={m.href} className="hover:text-accent">
                  {m.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              <p className="mt-4">
                <Link href={m.href} className="text-sm font-semibold text-accent hover:underline">
                  Voir la solution →
                </Link>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHead
          eyebrow="Ce que vous pilotez"
          title="Les leviers concrets sur un parc"
          as="h2"
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3 className="text-base font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <SectionHead
            eyebrow="Conformité"
            title="Géolocalisation des salariés : le cadre CNIL / RGPD"
            lead="C'est la première question juridique d'un dirigeant. Les réponses ci-dessous reprennent le cadre légal — le détail complet est sur notre guide."
            as="h2"
          />
          <dl className="mt-10 space-y-8">
            {faq.map((q) => (
              <div key={q.question}>
                <dt className="text-base font-bold text-foreground speakable">{q.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm">
            <Link href="/guide-legal" className="font-semibold text-accent hover:underline">
              Guide légal complet : géolocalisation de véhicules →
            </Link>
          </p>
        </div>
      </Section>

      <Section className="bg-muted/40">
        <div className="max-w-2xl">
          <SectionHead
            eyebrow="Devis professionnel"
            title="Un besoin de 3 véhicules ou plus ?"
            lead="Décrivez votre parc et votre usage : on vous revient avec une recommandation d'équipement et un devis multi-véhicules adapté."
            as="h2"
          />
          <div className="mt-8">
            <CTA href="/devis">Demander un devis multi-véhicules</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
