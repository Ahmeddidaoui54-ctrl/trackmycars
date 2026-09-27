import Link from "next/link";
import type { Metadata } from "next";
import { site, plans } from "@/lib/data/site";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { cities } from "@/lib/data/cities";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "À propos — qui est Track My Cars",
  description:
    "Track My Cars installe des traceurs GPS pour véhicules, flottes et matériels en région PACA. Notre méthode, nos engagements, et ce que nous ne faisons pas.",
  keywords: [
    "track my cars avis",
    "track my cars",
    "installateur traceur gps paca",
    "entreprise geolocalisation vehicule france",
  ],
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos — qui est Track My Cars",
    description:
      "Notre méthode, nos engagements, et ce que nous refusons de faire.",
    url: `${site.url}/a-propos`,
  },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
];

const engagements = [
  {
    t: "Les prix sont affichés",
    d: "Tous nos tarifs figurent sur le site, boîtier et abonnement. La plupart de nos concurrents les masquent derrière un formulaire de devis. Nous pensons qu'un client a le droit de savoir ce qu'il va payer avant de donner son numéro de téléphone.",
  },
  {
    t: "Vous êtes propriétaire du matériel",
    d: "Le boîtier s'achète, il ne se loue pas. Si vous arrêtez l'abonnement, vous gardez l'appareil et vous pouvez le réactiver plus tard sans rien racheter.",
  },
  {
    t: "Une formule sans engagement",
    d: "La formule mensuelle se résilie à tout moment, sans préavis ni pénalité. Les formules 6 et 12 mois engagent sur leur durée, en contrepartie d'un tarif plus bas — c'est écrit clairement.",
  },
  {
    t: "La conformité livrée avec le matériel",
    d: "Sur un déploiement professionnel, nous fournissons la note d'information aux salariés, la mention pour le registre des traitements et la trame de consultation du CSE. Un dispositif irrégulier ne protège personne.",
  },
];

const refus = [
  {
    t: "Nous ne vendons pas à qui veut suivre une personne",
    d: "Poser un traceur sur le véhicule de quelqu'un à son insu est un délit puni d'un an d'emprisonnement et de 45 000 € d'amende. Quand une demande va dans ce sens, nous ne donnons pas suite — quelle que soit la situation invoquée.",
  },
  {
    t: "Nous ne présentons pas le micro comme un outil de surveillance",
    d: "Trois de nos boîtiers embarquent un micro. Il sert à écouter l'environnement d'un véhicule volé, après dépôt de plainte. Il ne sert pas à écouter un salarié ou un proche, et nous ne le vendrons jamais comme tel.",
  },
  {
    t: "Nous ne prétendons pas être les moins chers",
    d: "Un boîtier d'import à 45 € coûte moins que le nôtre, et nous l'écrivons dans notre comparatif. Ce que nous vendons en plus, c'est un support joignable, une garantie exploitable et une carte SIM qui ne perd pas le signal.",
  },
  {
    t: "Nous n'inventons pas de chiffres",
    d: "Vous ne trouverez sur ce site ni compteur de clients ni note moyenne tant que nous n'aurons pas assez d'avis réels pour que ces chiffres veuillent dire quelque chose.",
  },
];

export default function AProposPage() {
  const cheapest = Math.min(...products.map((p) => p.price));
  const best = plans.reduce((a, b) => (a.pricePerMonth <= b.pricePerMonth ? a : b));

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <LocalBusinessJsonLd />
      <SpeakableJsonLd url={`${site.url}/a-propos`} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary text-white mt-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
              À propos
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-white">
              Nous vendons du suivi GPS, et nous disons comment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 speakable">
              Track My Cars installe des traceurs GPS pour véhicules, flottes
              professionnelles et matériels de chantier en région
              Provence-Alpes-Côte d&apos;Azur. Cinq boîtiers, de {cheapest} € à
              199 €, et un abonnement à partir de{" "}
              {best.pricePerMonth.toFixed(2).replace(".", ",")} € par mois.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que nous faisons */}
      <Section>
        <div className="max-w-3xl">
          <p className="eyebrow">Notre métier</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">
            Rendre un véhicule retrouvable, et parfois inutilisable
          </h2>
          <div className="rule mt-5" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            125 200 véhicules ont été volés en France en 2025 selon le ministère
            de l&apos;Intérieur, soit un toutes les quatre minutes. Seuls 40 %
            sont retrouvés. Dans le bâtiment, 68 % des professionnels ont été
            confrontés au vol dans l&apos;année, pour une perte moyenne de
            31 000 € par entreprise.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Un traceur GPS ne dissuade pas le vol : il en change l&apos;issue.
            Pendant les premières heures, le véhicule reste immobile quelque
            part pendant que les voleurs vérifient qu&apos;il n&apos;est pas
            suivi. C&apos;est la seule fenêtre où il est encore intact et
            localisable. Notre travail consiste à transformer cette fenêtre en
            information exploitable — et, sur notre modèle coupe-moteur, à
            empêcher le véhicule de repartir.
          </p>
        </div>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-border/50 pt-8">
          {[
            { v: `${products.length}`, l: "boîtiers au catalogue" },
            { v: `${sectors.length}`, l: "secteurs équipés" },
            { v: `${cities.length}`, l: "métropoles couvertes en PACA" },
            { v: "150+", l: "pays couverts par la carte SIM" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="text-3xl font-bold text-cta tabular-nums">{s.v}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.l}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Engagements */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Nos engagements"
          title="Quatre choses sur lesquelles nous ne transigeons pas"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {engagements.map((e) => (
            <div key={e.t} className="border-t-2 border-cta pt-5">
              <h3 className="text-lg font-bold">{e.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ce que nous refusons */}
      <Section>
        <SectionHead
          eyebrow="Ce que nous ne faisons pas"
          title="Un vendeur se juge aussi à ce qu'il refuse"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {refus.map((r) => (
            <div key={r.t} className="border-t-2 border-destructive pt-5">
              <h3 className="text-lg font-bold">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Zone */}
      <Section className="bg-primary text-white">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
            Où nous intervenons
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl text-white">
            Sur site en PACA, par la poste partout en France
          </h2>
          <div className="mt-5 h-0.5 w-12 bg-cta" />
          <p className="mt-6 text-base leading-relaxed text-white/80">
            Nos techniciens se déplacent sur les cinq départements de la région
            pour les installations câblées : {cities.map((c) => c.label).join(", ")}.
            Les modèles autonomes et OBD, qui ne demandent aucune installation,
            sont expédiés gratuitement dans toute la France sous 48 à
            72 heures.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href="/zones">Voir les zones desservies</CTA>
            <Link href="/contact" className="btn btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Nous joindre</p>
            <h2 className="mt-3 text-2xl">Une équipe en France, joignable</h2>
            <div className="rule mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Pas de centre d&apos;appels, pas de numéro surtaxé. Le numéro
              ci-dessous est celui de l&apos;équipe qui installe et paramètre
              les boîtiers.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Téléphone
                </dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phone}`} className="text-lg font-bold hover:text-cta">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="font-semibold hover:text-cta">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Horaires
                </dt>
                <dd className="mt-1 text-muted-foreground">
                  Du lundi au samedi, 8 h – 19 h
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="eyebrow">Pour aller plus loin</p>
            <h2 className="mt-3 text-2xl">Nos pages de référence</h2>
            <div className="rule mt-5" />
            <ul className="mt-6 space-y-3">
              {[
                { href: "/tarifs", l: "Tarifs — le coût réel sur trois ans", d: "Y compris pourquoi le « sans abonnement » n'existe pas" },
                { href: "/comparatif", l: "Comparatif du marché", d: "Sept solutions, y compris quand elles nous battent" },
                { href: "/guide-legal", l: "Guide légal", d: "Les six obligations, article par article" },
                { href: "/blog", l: "Blog", d: "Démarches après un vol, détection de traceurs" },
              ].map((x) => (
                <li key={x.href}>
                  <Link href={x.href} className="group block">
                    <span className="font-semibold group-hover:text-cta transition-colors">
                      {x.l} →
                    </span>
                    <span className="block text-sm text-muted-foreground">{x.d}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
