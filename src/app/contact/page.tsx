import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { cities } from "@/lib/data/cities";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact — Track My Cars",
  description:
    "Contactez Track My Cars : téléphone, email et WhatsApp. Équipe basée en France, réponse sous 24 h ouvrées. Intervention sur toute la région PACA.",
  alternates: { canonical: "/contact" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Contact", href: "/contact" },
];

const channels = [
  {
    label: "Téléphone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    detail: "Du lundi au samedi, de 8 h à 19 h. Le plus rapide pour un conseil technique.",
  },
  {
    label: "WhatsApp",
    value: "Ouvrir une conversation",
    href: site.whatsapp,
    detail: "Pratique pour envoyer une photo du véhicule ou du matériel à équiper.",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    detail: "Pour une demande détaillée, un devis de flotte ou une question administrative.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <LocalBusinessJsonLd />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Contact"
          title="Une équipe en France, joignable directement"
          lead="Pas de centre d'appel, pas de formulaire sans réponse. Vous parlez à quelqu'un qui connaît le matériel et peut vous dire, le cas échéant, qu'un traceur n'est pas la bonne réponse à votre besoin."
          as="h1"
        />

        <div className="mt-14 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-3">
          {channels.map((c) => (
            <div key={c.label} className="bg-background p-7">
              <p className="eyebrow">{c.label}</p>
              <p className="mt-3">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-lg font-bold hover:text-accent"
                >
                  {c.value}
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Zone d&apos;intervention</h2>
            <div className="rule mt-3" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Nos techniciens se déplacent sur toute la région {site.region} pour les
              installations câblées : Bouches-du-Rhône, Var, Alpes-Maritimes, Vaucluse et
              Hautes-Alpes. Les modèles autonomes et OBD sont livrés gratuitement partout
              en France, sous 48 à 72 heures ouvrées.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Les principales agglomérations couvertes en intervention sur site sont{" "}
              {cities.map((c) => c.label).join(", ")}. Si votre adresse se situe en
              périphérie, contactez-nous : notre rayon d&apos;action dépasse largement
              les limites communales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Ce qu&apos;il faut nous dire</h2>
            <div className="rule mt-3" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Pour vous répondre utilement dès le premier échange, trois informations
              suffisent :
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                {
                  t: "Ce que vous devez équiper",
                  d: "Voiture, moto, fourgon, poids lourd, engin de chantier, remorque, bateau… Le type de matériel détermine le modèle de boîtier, notamment s'il dispose ou non d'une alimentation électrique.",
                },
                {
                  t: "Combien d'unités",
                  d: "Au-delà de trois véhicules, la proposition change : tarif adapté au volume, installation groupée sur votre site et documentation RGPD fournie.",
                },
                {
                  t: "Votre commune",
                  d: "Elle détermine si nos techniciens interviennent chez vous ou si l'envoi postal est la meilleure option.",
                },
              ].map((x) => (
                <li key={x.t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cta" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">{x.t}</span>
                    <span className="block text-muted-foreground">{x.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-bold">Délais de réponse</h2>
          <div className="rule mt-3" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Nous répondons aux demandes de devis sous 24 heures ouvrées. Les commandes
            passées avant midi du lundi au vendredi sont traitées le jour même, avec une
            livraison sous 48 heures et un numéro de suivi. Pour une installation câblée,
            comptez environ une semaine pour la prise de rendez-vous, et 45 minutes
            d&apos;immobilisation par véhicule.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            En cas de vol d&apos;un véhicule équipé, appelez-nous directement : nous
            pouvons vous aider à extraire l&apos;historique de positions à transmettre
            aux forces de l&apos;ordre. Déposez plainte d&apos;abord, et ne vous rendez
            jamais seul à l&apos;endroit indiqué par le traceur.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <CTA href="/devis">Demander un devis</CTA>
          <Link href="/faq" className="btn btn-outline text-primary">
            Consulter la FAQ
          </Link>
        </div>
      </Section>
    </>
  );
}
