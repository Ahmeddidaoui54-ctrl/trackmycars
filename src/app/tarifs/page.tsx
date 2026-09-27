import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { plans, site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { BreadcrumbJsonLd, FAQJsonLd ,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Tarifs traceur GPS — le coût réel sur 3 ans",
  description:
    "Combien coûte vraiment un traceur GPS ? Prix du boîtier, coût de la carte SIM, total sur 3 ans. Pourquoi le « sans abonnement » n'existe pas, et ce que vous payez réellement.",
  keywords: [
    "prix traceur gps",
    "traceur gps prix",
    "combien coute un traceur gps",
    "traceur gps sans abonnement",
    "traceur gps sans abonnement prix",
    "tarif geolocalisation vehicule",
    "abonnement traceur gps prix",
    "traceur gps pas cher",
    "prix carte sim pour traceur gps",
    "traceur gps avec ou sans abonnement",
  ],
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Prix d'un traceur GPS — le coût réel sur 3 ans",
    description:
      "Le « sans abonnement » n'existe pas : le réseau est toujours payé. Voici le calcul complet, boîtier et connectivité compris.",
    url: `${site.url}/tarifs`,
  },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Tarifs", href: "/tarifs" },
];

/** Coût total = prix du boîtier + (abonnement annuel × durée) */
const ANNUAL = 90; // formule 12 mois
function total(price: number, years: number) {
  return price + ANNUAL * years;
}

/** Offres du marché, pour situer honnêtement notre position */
const market = [
  {
    name: "Boîtier d'entrée de gamme",
    detail: "Grande distribution ou marketplace",
    device: 30,
    network: 42,
    networkLabel: "Carte SIM prépayée, ~3,50 €/mois",
    y3: 30 + 42 * 3,
    included: "Aucun support, aucune garantie utile, pas d'installation",
    warn: true,
  },
  {
    name: "Traceur grand public à abonnement",
    detail: "Type Invoxia, Beepings",
    device: 149,
    network: 60,
    networkLabel: "Abonnement annuel, ~60 €/an",
    y3: 149 + 60 * 3,
    included: "Application, support en ligne",
  },
  {
    name: "Track My Cars — Tracker Mini",
    detail: "Notre entrée de gamme",
    device: 79,
    network: 90,
    networkLabel: "Formule 12 mois, 7,50 €/mois",
    y3: 79 + 90 * 3,
    included: "Garantie 2 ans, support français, installation possible sur site",
    ours: true,
  },
  {
    name: "Track My Cars — Coupe-moteur",
    detail: "Notre modèle antivol complet",
    device: 199,
    network: 90,
    networkLabel: "Formule 12 mois, 7,50 €/mois",
    y3: 199 + 90 * 3,
    included: "Immobilisation à distance, pose par nos techniciens, garantie 2 ans",
    ours: true,
  },
];

const faq = [
  {
    question: "Combien coûte un traceur GPS ?",
    answer:
      "Un traceur GPS coûte entre 79 € et 199 € à l'achat selon le modèle, auquel s'ajoute la connectivité : 15 € par mois sans engagement, ou 90 € pour douze mois, soit 7,50 € par mois. Sur trois ans, comptez donc entre 349 € et 469 € tout compris, boîtier et réseau. C'est le coût complet, sans frais caché : l'application mobile, l'interface web et les alertes sont incluses.",
  },
  {
    question: "Existe-t-il des traceurs GPS sans abonnement ?",
    answer:
      "Pas réellement. Un traceur transmet sa position par le réseau cellulaire, ce qui a un coût permanent. Les produits vendus « sans abonnement » fonctionnent de trois façons : soit vous fournissez votre propre carte SIM et payez un forfait ailleurs, soit plusieurs années de connectivité sont incluses dans un prix d'achat plus élevé, soit l'appareil n'émet que sur Bluetooth et ne fonctionne qu'à quelques mètres. Dans tous les cas, le réseau est payé — la seule question est de savoir où.",
  },
  {
    question: "Comment fonctionne un traceur sans abonnement ?",
    answer:
      "Le boîtier attend que vous insériez une carte SIM que vous avez achetée séparément, puis transmet ses positions via ce forfait. Vous payez donc un abonnement, mais à un opérateur plutôt qu'au vendeur du traceur. Un forfait data adapté coûte entre 2 et 5 € par mois, à quoi il faut ajouter la gestion de la carte, son renouvellement, et l'absence de support si la transmission s'interrompt.",
  },
  {
    question: "Pourquoi payer un abonnement chez vous plutôt qu'une carte SIM ailleurs ?",
    answer:
      "Parce que notre carte SIM est multi-opérateurs : elle bascule automatiquement sur le meilleur réseau disponible, en France comme à l'étranger, là où une carte SIM classique reste sur un seul opérateur et perd le signal dans ses zones blanches. L'abonnement couvre aussi l'hébergement de vos données, la plateforme, les alertes illimitées et un support joignable. Un traceur qui ne transmet plus ne protège rien.",
  },
  {
    question: "Le prix baisse-t-il si j'équipe plusieurs véhicules ?",
    answer:
      "Oui. Au-delà de trois véhicules, nous établissons une proposition adaptée au volume, avec installation sur site incluse à partir d'une certaine taille de parc. Contactez-nous avec le nombre de véhicules et leur type : nous chiffrons la configuration complète.",
  },
  {
    question: "Que se passe-t-il si j'arrête l'abonnement ?",
    answer:
      "Le boîtier reste votre propriété — vous l'avez acheté, vous ne le louez pas. Seule la transmission des positions s'interrompt. Vous pouvez réactiver un abonnement plus tard sans racheter de matériel, ce qui est utile pour un véhicule saisonnier, un camping-car remisé ou un engin de chantier hors service.",
  },
  {
    question: "Puis-je changer de formule en cours de route ?",
    answer:
      "Oui. À l'échéance de votre période en cours, vous choisissez librement de reconduire la même formule ou d'en prendre une autre. Aucune reconduction n'est imposée, et la formule 1 mois se résilie à tout moment sans préavis ni pénalité.",
  },
  {
    question: "L'application mobile est-elle facturée en plus ?",
    answer:
      "Non. L'application iOS et Android est entièrement gratuite, sans frais caché ni option payante. L'interface web, accessible depuis n'importe quel navigateur sans installation, est également incluse. Les alertes sont illimitées.",
  },
  {
    question: "Y a-t-il des frais d'installation ?",
    answer:
      "Les modèles OBD, mini et aimanté ne demandent aucune installation : vous les branchez ou les posez vous-même en quelques secondes, et la livraison est gratuite. Pour un boîtier câblé avec coupe-moteur, l'installation par nos techniciens est offerte à partir de trois véhicules équipés ; en dessous, une participation forfaitaire s'applique selon la distance.",
  },
];

export default function TarifsPage() {
  const cheapest = Math.min(...products.map((p) => p.price));

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={faq} />
      <SpeakableJsonLd url={`${site.url}/tarifs`} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Hero */}
      <section className="bg-primary text-white mt-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
              Tarifs
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-white">
              Ce que coûte vraiment un traceur GPS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Boîtier, carte SIM, plateforme : voici le calcul complet sur trois ans,
              sans rien cacher. Y compris quand la comparaison ne nous avantage pas.
            </p>
          </div>
        </div>
      </section>

      {/* La vérité sur le "sans abonnement" */}
      <Section>
        <div className="max-w-3xl">
          <p className="eyebrow">Le point de départ</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">
            Le traceur GPS « sans abonnement » n&apos;existe pas
          </h2>
          <div className="rule mt-5" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            C&apos;est la recherche la plus fréquente du marché, et c&apos;est une
            promesse impossible à tenir. Un traceur GPS calcule sa position grâce aux
            satellites — cette partie est effectivement gratuite — mais il doit ensuite
            vous l&apos;envoyer, et cela passe par le réseau cellulaire. Un réseau
            cellulaire se paie, toujours.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Les produits vendus « sans abonnement » relèvent de trois cas de figure :
          </p>
          <ol className="mt-6 space-y-4">
            {[
              {
                t: "La carte SIM est à votre charge",
                d: "Le boîtier est vendu vide. Vous achetez un forfait data ailleurs, entre 2 et 5 € par mois, que vous gérez et renouvelez vous-même. Vous payez un abonnement — simplement pas au même endroit.",
              },
              {
                t: "L'abonnement est intégré au prix d'achat",
                d: "Plusieurs années de connectivité sont incluses dans un tarif de départ plus élevé. C'est honnête, mais ce n'est pas gratuit, et la facture repart au terme de la période.",
              },
              {
                t: "L'appareil n'émet pas sur le réseau",
                d: "Certains produits très bon marché fonctionnent en Bluetooth. La portée est de quelques dizaines de mètres au mieux : utile pour retrouver ses clés dans un appartement, sans aucun intérêt face à un vol de véhicule.",
              },
            ].map((c, i) => (
              <li key={c.t} className="flex gap-4">
                <span className="shrink-0 text-2xl font-bold text-cta leading-none pt-0.5">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-bold">{c.t}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {c.d}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-base leading-relaxed">
            <strong>
              La seule question qui vaut n&apos;est donc pas « avec ou sans
              abonnement », mais combien coûte l&apos;ensemble sur la durée où vous
              allez l&apos;utiliser.
            </strong>
          </p>
        </div>
      </Section>

      {/* Comparatif marché */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Le calcul"
          title="Combien vous coûtent trois ans de suivi"
          lead="Prix du boîtier, coût annuel du réseau, et total réel. Les tarifs concurrents sont ceux relevés publiquement ; les nôtres sont ceux de notre formule 12 mois."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-3xl border-collapse text-sm bg-white">
            <caption className="sr-only">
              Coût total d&apos;un traceur GPS sur trois ans selon la solution
            </caption>
            <thead>
              <tr className="border-b-2 border-primary">
                <th scope="col" className="p-3 text-left font-bold">Solution</th>
                <th scope="col" className="p-3 text-right font-bold">Boîtier</th>
                <th scope="col" className="p-3 text-left font-bold">Réseau</th>
                <th scope="col" className="p-3 text-right font-bold">Total 3 ans</th>
                <th scope="col" className="p-3 text-left font-bold">Ce qui est compris</th>
              </tr>
            </thead>
            <tbody>
              {market.map((m) => (
                <tr
                  key={m.name}
                  className={`border-b border-border/50 ${m.ours ? "bg-cta/5" : ""}`}
                >
                  <th scope="row" className="p-3 text-left align-top">
                    <span className="block font-bold">{m.name}</span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      {m.detail}
                    </span>
                  </th>
                  <td className="p-3 text-right align-top tabular-nums">{m.device} €</td>
                  <td className="p-3 align-top text-xs text-muted-foreground">
                    {m.networkLabel}
                  </td>
                  <td className="p-3 text-right align-top">
                    <span className={`font-bold tabular-nums ${m.ours ? "text-cta" : ""}`}>
                      {m.y3} €
                    </span>
                  </td>
                  <td
                    className={`p-3 align-top text-xs ${
                      m.warn ? "text-destructive" : "text-muted-foreground"
                    }`}
                  >
                    {m.included}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Le boîtier d&apos;entrée de gamme est effectivement le moins cher, et nous ne
          prétendrons pas le contraire. Ce qu&apos;il ne comprend pas, en revanche :
          personne à appeler quand la transmission s&apos;arrête, aucune garantie
          exploitable, une carte SIM mono-opérateur qui perd le signal hors de sa
          couverture, et aucune installation. Sur un véhicule à 300 € c&apos;est un
          arbitrage raisonnable. Sur un fourgon chargé d&apos;outillage ou une flotte,
          l&apos;économie de 200 € se paie au premier incident.
        </p>
      </Section>

      {/* Notre grille */}
      <Section>
        <SectionHead
          eyebrow="Notre grille"
          title="Le boîtier s'achète une fois, le réseau s'abonne"
          lead="Vous restez propriétaire du matériel. L'abonnement couvre la carte SIM 4G multi-opérateurs et l'accès à la plateforme — l'application et l'interface web sont incluses."
        />

        <h3 className="mt-12 text-xl font-bold">Les boîtiers</h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-3xl border-collapse text-sm">
            <caption className="sr-only">Prix des boîtiers et coût total sur 1 et 3 ans</caption>
            <thead>
              <tr className="border-b-2 border-primary">
                <th scope="col" className="p-3 text-left font-bold">Modèle</th>
                <th scope="col" className="p-3 text-left font-bold">Pour qui</th>
                <th scope="col" className="p-3 text-right font-bold">Boîtier</th>
                <th scope="col" className="p-3 text-right font-bold">1 an</th>
                <th scope="col" className="p-3 text-right font-bold">3 ans</th>
              </tr>
            </thead>
            <tbody>
              {[...products]
                .sort((a, b) => a.price - b.price)
                .map((p) => (
                  <tr key={p.slug} className="border-b border-border/50">
                    <th scope="row" className="p-3 text-left font-semibold">
                      <Link href={`/produits/${p.slug}`} className="hover:text-cta">
                        {p.shortName}
                      </Link>
                    </th>
                    <td className="p-3 text-xs text-muted-foreground">{p.tagline}</td>
                    <td className="p-3 text-right tabular-nums">{p.price} €</td>
                    <td className="p-3 text-right tabular-nums text-muted-foreground">
                      {total(p.price, 1)} €
                    </td>
                    <td className="p-3 text-right tabular-nums font-bold">
                      {total(p.price, 3)} €
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Totaux calculés avec la formule 12 mois à 90 € par an et par tracker. Livraison
          gratuite. Prix boîtiers TTC.
        </p>

        <h3 className="mt-14 text-xl font-bold">La connectivité</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`rounded-xl p-6 ${
                plan.highlight
                  ? "border-2 border-cta bg-white shadow-lg"
                  : "border border-border/50 bg-white"
              }`}
            >
              {plan.highlight && (
                <p className="mb-3 -mt-1">
                  <span className="inline-block bg-cta text-white text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm">
                    Le plus choisi
                  </span>
                </p>
              )}
              <h4 className="text-lg font-bold">{plan.name}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
              <p className="mt-4">
                <span className="text-3xl font-bold text-primary tabular-nums">
                  {plan.totalPrice} €
                </span>
              </p>
              <p className="mt-1 text-sm font-semibold text-cta">
                soit {plan.pricePerMonth.toFixed(2).replace(".", ",")} €/mois
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="text-cta mt-0.5" aria-hidden="true">✔</span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link
                  href="/devis"
                  className={`btn w-full ${
                    plan.highlight ? "btn-primary" : "btn-outline text-primary"
                  }`}
                >
                  S&apos;abonner
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Nos trackers, équipés de cartes SIM 4G, consomment environ 100 Mo de données
          par mois. L&apos;abonnement est souscrit par tracker : chaque boîtier a sa
          propre carte SIM. Au-delà de trois véhicules, nous établissons une
          proposition adaptée au volume.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <CTA href="/devis">Demander un devis</CTA>
          <Link href="/produits" className="btn btn-outline text-primary">
            Voir les boîtiers
          </Link>
        </div>
      </Section>

      {/* Rentabilité */}
      <Section className="bg-primary text-white">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
            Mise en perspective
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl text-white">
            À quoi comparer ces {cheapest} € ?
          </h2>
          <div className="mt-5 h-0.5 w-12 bg-cta" />
          <p className="mt-6 text-base leading-relaxed text-white/80">
            125 200 véhicules ont été volés en France en 2025 selon le ministère de
            l&apos;Intérieur, soit un toutes les quatre minutes, et seuls 40 % sont
            retrouvés. Dans le BTP, 68 % des professionnels ont été confrontés au vol
            sur l&apos;année, pour une perte moyenne de 31 000 € par entreprise.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Un fourgon d&apos;artisan complet représente couramment 15 000 à 40 000 €
            d&apos;outillage. Le coût moyen d&apos;un sinistre vol a progressé de 138 %
            en dix ans, et les primes auto augmentent d&apos;environ 5 % en 2026.
          </p>
          <p className="mt-6 text-lg font-semibold text-white">
            Trois ans de suivi GPS coûtent moins cher qu&apos;une franchise.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHead
          eyebrow="Questions fréquentes"
          title="Prix, abonnement et coût réel"
        />
        <div className="mt-10 max-w-4xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl">
            Un chiffrage pour votre situation exacte
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Un véhicule ou cinquante, un usage permanent ou saisonnier : donnez-nous le
            contexte et nous revenons avec le coût total, sans surdimensionner
            l&apos;équipement.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander un devis</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
