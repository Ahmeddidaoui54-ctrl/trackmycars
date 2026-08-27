import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { cities } from "@/lib/data/cities";
import { Section, SectionHead, CTA, FaqList } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { FAQJsonLd, HowToJsonLd, ItemListJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Traceur GPS véhicules, flottes et poids lourds — PACA",
  description:
    "Trackers GPS professionnels : voitures, flottes d'entreprise, poids lourds, engins de chantier. Installation à Marseille, Nice, Toulon, Aix. Sans engagement, garantie 3 ans.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    name: "Choisissez votre tracker",
    text: "Quatre modèles selon l'usage : aimanté sans installation, OBD immédiat, coupe-moteur antivol ou mini discret.",
  },
  {
    name: "Installation ou pose libre",
    text: "Nos techniciens interviennent sur site en PACA, ou vous posez vous-même les modèles autonomes en quelques secondes.",
  },
  {
    name: "Activez votre compte",
    text: "La carte SIM est déjà dans le boîtier. Vous créez votre compte, le tracker apparaît sur la carte.",
  },
  {
    name: "Suivez en temps réel",
    text: "Position, historique, alertes de zone et de mouvement, depuis l'application mobile ou le navigateur.",
  },
];

const faq = [
  {
    question: "Quel traceur GPS choisir pour mon véhicule ?",
    answer:
      "Pour une voiture ou un utilitaire récent, le tracker OBD se branche en dix secondes sur la prise diagnostic. Pour une protection antivol renforcée avec immobilisation à distance, choisissez le coupe-moteur. Pour un matériel sans alimentation — remorque, engin, bateau — le tracker aimanté fonctionne sur sa propre batterie. Pour un deux-roues ou un bien de valeur, le format mini est le plus discret.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non. Le boîtier est un achat unique et l'abonnement mensuel est résiliable à tout moment, sans préavis ni pénalité. Vous restez propriétaire du matériel.",
  },
  {
    question: "Le suivi fonctionne-t-il en dehors de la France ?",
    answer:
      "Oui. La carte SIM multi-opérateurs incluse dans l'abonnement couvre l'Europe et plus de 150 pays, sans frais de roaming supplémentaires sur nos abonnements standard.",
  },
  {
    question: "Est-ce légal de géolocaliser un véhicule ?",
    answer:
      "Sur un véhicule dont vous êtes propriétaire, oui, sans restriction. Sur un véhicule confié à un salarié ou à un client, la géolocalisation est légale à condition d'informer la personne, de déclarer le traitement au registre RGPD et de ne pas collecter de données en dehors du temps de travail. Nous fournissons la documentation type avec chaque déploiement professionnel.",
  },
  {
    question: "Intervenez-vous partout en région PACA ?",
    answer:
      "Oui. Nos techniciens se déplacent sur les Bouches-du-Rhône, le Var, les Alpes-Maritimes, le Vaucluse et les Hautes-Alpes, avec un maillage sur Marseille, Nice, Toulon, Aix-en-Provence, Avignon, Cannes et Antibes. Les modèles sans installation sont livrés gratuitement partout en France.",
  },
  {
    question: "Combien coûte la solution complète ?",
    answer:
      "Le boîtier va de 79 € à 199 € selon le modèle, en achat unique. L'abonnement démarre à 9,90 € par mois et par véhicule, et descend à 5,90 € au-delà de vingt véhicules. Livraison et application incluses.",
  },
];

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FAQJsonLd questions={faq} />
      <HowToJsonLd name="Comment équiper un véhicule d'un traceur GPS" steps={steps} />
      <ItemListJsonLd
        name="Secteurs équipés par Track My Cars"
        items={sectors.map((s) => ({ name: s.label, url: `/secteurs/${s.slug}` }))}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground grid-bg">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Suivi GPS professionnel · {site.region}</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Vous ne pouvez pas protéger ce que vous ne voyez pas.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Trackers GPS pour voitures, flottes d&apos;entreprise, poids lourds,
              utilitaires et engins de chantier. Position en temps réel, alerte au
              premier mouvement, immobilisation à distance. Installation et livraison
              sur toute la région Provence-Alpes-Côte d&apos;Azur.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA href="/devis">Demander un devis</CTA>
              <CTA href="/produits" variant="outline">
                Voir les trackers
              </CTA>
            </div>
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-primary-foreground/15 pt-8">
              {[
                { v: "150+", l: "pays couverts" },
                { v: "3 ans", l: "de garantie" },
                { v: "0 €", l: "de frais de livraison" },
                { v: "0", l: "engagement de durée" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="stat-value text-2xl sm:text-3xl text-accent">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/60">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Secteurs — cœur du ciblage */}
      <Section>
        <SectionHead
          eyebrow="Ciblage par usage"
          title="Chaque secteur a son risque, et son équipement"
          lead="Un fourgon d'artisan, un poids lourd chargé et une mini-pelle sur chantier ne se protègent pas de la même façon. Nous partons de votre métier, pas du catalogue."
        />
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-lg overflow-hidden">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/secteurs/${s.slug}`}
              className="group bg-background p-6 hover:bg-muted transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                  {s.label}
                </h3>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.painPoints[0].body}
              </p>
              <p className="mt-4 text-xs">
                <span className="stat-value text-accent">{s.stat.value}</span>{" "}
                <span className="text-muted-foreground">{s.stat.label}</span>
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Produits */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Nos trackers"
          title="Quatre boîtiers, quatre façons de couvrir un risque"
          lead="Tous partagent la même application, les mêmes alertes et la même couverture. Ils diffèrent par le mode d'alimentation, la discrétion et la capacité d'immobilisation."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10">
          <CTA href="/abonnements" variant="outline">
            Voir les abonnements
          </CTA>
        </div>
      </Section>

      {/* Comment ça marche */}
      <Section dark>
        <SectionHead
          eyebrow="Mise en service"
          title="Opérationnel le jour même"
          lead="Sur les modèles autonomes et OBD, aucune immobilisation du véhicule n'est nécessaire. Sur les modèles câblés, comptez 45 minutes par véhicule."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.name} className="border-t-2 border-accent pt-5">
              <span className="stat-value text-3xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Zones */}
      <Section>
        <SectionHead
          eyebrow="Couverture régionale"
          title="Installation et livraison partout en PACA"
          lead="Nos techniciens interviennent sur site dans les principales métropoles de la région. Les modèles sans installation sont expédiés gratuitement dans toute la France."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/zones/${c.slug}`}
              className="border border-border rounded-md px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              {c.label}
              <span className="ml-1.5 text-xs text-muted-foreground">{c.departmentCode}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted">
        <SectionHead eyebrow="Questions fréquentes" title="Ce qu'on nous demande le plus" />
        <div className="mt-10 max-w-4xl">
          <FaqList items={faq} />
        </div>
      </Section>

      {/* CTA final */}
      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">
            Dites-nous ce que vous devez protéger.
          </h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Un véhicule ou deux cents, une voiture personnelle ou une flotte de poids
            lourds : nous vous répondons avec une configuration chiffrée, pas avec un
            catalogue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href="/devis">Demander un devis</CTA>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold border border-current hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
