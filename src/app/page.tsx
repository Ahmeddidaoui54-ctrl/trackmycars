import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { cities } from "@/lib/data/cities";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuoteForm } from "@/components/forms/QuoteForm";
import {
  FAQJsonLd,
  HowToJsonLd,
  ItemListJsonLd,
  LocalBusinessJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Traceur GPS Véhicules & Flottes — Suivi Temps Réel | PACA",
  description:
    "Trackers GPS professionnels pour voitures, flottes, poids lourds et engins. Suivi temps réel, antivol, coupe-moteur. Installation Marseille, Nice, Toulon, Aix. Sans engagement, garantie 2 ans.",
  alternates: { canonical: "/" },
};

/* ————— Contenu repris du site actuel ————— */

const pillars = [
  { icon: "📊", title: "Optimisation Opérationnelle", text: "Améliorez l'efficacité opérationnelle." },
  { icon: "💼", title: "Réduction des Coûts", text: "Moins de dépenses inutiles." },
  { icon: "🛡️", title: "Sécurité Renforcée", text: "Protégez vos véhicules contre le vol." },
  { icon: "🌍", title: "Accessibilité Totale", text: "Suivi multi-plateforme (Web & Mobile)." },
];

const furtifPoints = [
  "COUVERTURE MONDIALE",
  "SANS ENGAGEMENT",
  "GARANTIE 3 ANS",
  "SERVICE CLIENT",
  "APP & PLATEFORME FACILE D'UTILISATION",
];

const installPoints = [
  "Rentabilité immédiate",
  "Tout inclus",
  "Alerte en cas de débranchement",
  "Système 100% légal",
];

const whyUs = [
  {
    icon: "/images/icon-temps-reel.png",
    title: "Suivi en Temps Réel",
    text: "Localisez vos véhicules avec une précision inégalée.",
  },
  {
    icon: "/images/icon-couverture.png",
    title: "Couverture Mondiale",
    text: "Restez connecté où que vous soyez.",
  },
  {
    icon: "/images/icon-installation.png",
    title: "Installation Simplifiée",
    text: "Fixation aimantée, rapide et sans effort.",
  },
];

const techPoints = [
  {
    icon: "/images/icon-gain-temps.png",
    title: "GAIN DE TEMPS",
    text: "Moins d'appels téléphoniques aux collaborateurs",
  },
  {
    icon: "/images/icon-organisation.png",
    title: "ORGANISATION",
    text: "Visibilité instantanée sur vos équipes 24h/24 7j/7",
  },
  {
    icon: "/images/icon-economies.png",
    title: "ECONOMIES",
    text: "Moins de KM parcourus en dehors du temps de travail",
  },
];

const steps = [
  { n: "01", name: "Achetez Votre Tracker", text: "Sélectionnez le modèle adapté à vos besoins." },
  { n: "02", name: "Installation", text: "Installation sur RDV ou autonome." },
  { n: "03", name: "Activez & Connectez", text: "Synchronisez avec notre application intuitive." },
  {
    n: "04",
    name: "Suivez en Temps Réel",
    text: "Observez vos véhicules avec précision depuis n'importe quel appareil.",
  },
];

const testimonials = [
  {
    quote:
      "Depuis que j'utilise Track My Cars, je peux suivre mes véhicules sans effort. Un service fiable et indispensable !",
    author: "Anthony DUVIAL",
  },
  {
    quote: "Facile à installer, interface utilisateur très intuitive. Je recommande vivement !",
    author: "Nicolas MARISSE",
  },
  {
    quote:
      "La précision du suivi et les alertes instantanées ont changé la façon dont nous gérons nos véhicules.",
    author: "Samir BARKI",
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
      "Sur un véhicule dont vous êtes propriétaire et que vous utilisez seul, oui, sans formalité. Sur un véhicule confié à un salarié, la géolocalisation est légale à condition d'informer la personne, de consulter le CSE, d'inscrire le traitement au registre des traitements et de vous limiter à une finalité admise par la CNIL. La géolocalisation permanente est interdite et les trajets domicile-travail ne sont jamais traçables. Nous fournissons la documentation type avec chaque déploiement professionnel.",
  },
  {
    question: "Intervenez-vous partout en région PACA ?",
    answer:
      "Oui. Nos techniciens se déplacent sur les Bouches-du-Rhône, le Var, les Alpes-Maritimes, le Vaucluse et les Hautes-Alpes, avec un maillage sur Marseille, Nice, Toulon, Aix-en-Provence, Avignon, Cannes et Antibes. Les modèles sans installation sont livrés gratuitement partout en France.",
  },
  {
    question: "Combien coûte la solution complète ?",
    answer:
      "Le boîtier va de 79 € à 199 € selon le modèle, en achat unique — vous en restez propriétaire. L'abonnement à la connectivité est de 15 € pour un mois sans engagement, 60 € pour six mois (10 €/mois) ou 90 € pour douze mois (7,50 €/mois). Application mobile et interface web incluses.",
  },
];

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FAQJsonLd questions={faq} />
      <HowToJsonLd
        name="Comment équiper un véhicule d'un traceur GPS"
        steps={steps.map((s) => ({ name: s.name, text: s.text }))}
      />
      <ItemListJsonLd
        name="Secteurs équipés par Track My Cars"
        items={sectors.map((s) => ({ name: s.label, url: `/secteurs/${s.slug}` }))}
      />

      {/* ————— HERO ————— */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/section-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
              Track My Cars
            </p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] text-white leading-[1.1]">
              Suivi GPS Avancé Pour Une Sécurité Maximale De Vos Véhicules
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Localisez, contrôlez et sécurisez vos véhicules en temps réel grâce à
              notre technologie de pointe.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/devis" className="btn btn-primary">
                Demande de Devis
              </Link>
              <Link href="/produits" className="btn btn-outline text-white">
                Nos produits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ————— 4 PILIERS ————— */}
      <section className="mx-auto max-w-7xl px-4 -mt-14 relative z-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl shadow-lg border border-border/40 p-6"
            >
              <span className="text-3xl" aria-hidden="true">{p.icon}</span>
              <h2 className="mt-3 text-base font-bold">{p.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ————— DÉMONSTRATION ————— */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Démonstration</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Demandez une démonstration gratuitement
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Un véhicule ou deux cents, une voiture personnelle ou une flotte de poids
              lourds : décrivez votre besoin et nous revenons vers vous avec une
              configuration chiffrée et une démonstration de la plateforme.
            </p>
            <Image
              src="/images/plateforme.webp"
              alt="Plateforme Track My Cars sur ordinateur et mobile"
              width={900}
              height={542}
              className="mt-8 w-full h-auto"
            />
          </div>
          <QuoteForm compact />
        </div>
      </section>

      {/* ————— TRACKER FURTIF ————— */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl text-white">Tracker furtif</h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                Pensé pour les professionnels, ce dispositif indétectable protège vos
                véhicules contre le vol et les intrusions, même en cas de vitre cassée
                ou d&apos;effraction. Il offre une localisation en temps réel pour un
                suivi optimal de votre flotte.
              </p>
              <p className="mt-5 text-sm font-bold tracking-wide text-cta">
                VOITURE / MOTO / CAMION / TAXI / BUS
              </p>
              <ul className="mt-7 space-y-2.5">
                {furtifPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="text-cta mt-0.5" aria-hidden="true">✔</span>
                    <span className="text-white/90">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Link href="/produits/tracker-coupe-moteur" className="btn btn-primary">
                  Découvrir le tracker furtif
                </Link>
              </div>
            </div>
            <Image
              src="/images/tracker-furtif.png"
              alt="Tracker GPS furtif Track My Cars"
              width={900}
              height={393}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ————— INSTALLATIONS FRANCE ————— */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Image
            src="/images/installations-france.png"
            alt="Installation de traceurs GPS sur toute la France"
            width={1024}
            height={575}
            className="w-full h-auto rounded-lg"
          />
          <div>
            <p className="eyebrow">Couverture</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Installations et livraisons sur toute la France
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Nous équipons tous les véhicules professionnels et toutes les tailles de
              flottes. Suivez vos équipes sur le terrain 24h/24 sur toute
              l&apos;Europe depuis n&apos;importe quel ordinateur ou depuis votre
              smartphone. Notre solution de géolocalisation est utilisable depuis
              n&apos;importe quel poste connecté à internet, sans aucun téléchargement
              et via l&apos;application compatible Android™ et Apple™.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Visualisez les heures d&apos;arrivée et de départ sur les sites de vos
              clients et surveillez l&apos;usage de vos véhicules. Vos données de
              géolocalisation sont sécurisées par mot de passe et archivées 12 mois.
            </p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {installPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <span className="text-cta mt-0.5" aria-hidden="true">✔</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Link href="/produits" className="btn btn-primary">
                Nos produits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ————— APPELEZ-NOUS ————— */}
      <section className="bg-cta text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl text-white">
            Appelez-nous à tout moment !
          </h2>
          <a
            href={`tel:${site.phone}`}
            className="text-2xl sm:text-3xl font-bold text-white hover:opacity-85"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </section>

      {/* ————— POURQUOI NOUS CHOISIR ————— */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Service de qualité</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Pourquoi choisir Track My Cars ?</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Notre mission est simple : fournir des solutions de suivi GPS fiables et
            faciles à utiliser. Que vous soyez un particulier cherchant à sécuriser
            votre véhicule ou une entreprise souhaitant gérer efficacement une flotte,
            nos trackers répondent à vos besoins avec précision.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title}>
              <Image src={w.icon} alt="" width={64} height={64} className="h-14 w-auto" />
              <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ————— TECHNOLOGIE DE POINTE ————— */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">
              Nous offrons un service rapide et efficace juste pour vous !
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Technologie de pointe pour une sécurité maximale
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Nos trackers GPS ne sont pas de simples dispositifs de suivi. Ils
              intègrent des technologies avancées pour offrir une expérience complète
              et sécurisée. Chaque fonctionnalité est pensée pour simplifier la
              surveillance, prévenir les risques et offrir une transparence totale.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {techPoints.map((t) => (
              <div key={t.title} className="bg-white rounded-xl p-7 border border-border/40">
                <Image src={t.icon} alt="" width={56} height={56} className="h-12 w-auto" />
                <h3 className="mt-4 text-base font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTEURS (apport SEO) ————— */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Nos secteurs</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Chaque activité a son risque, et son équipement
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Un fourgon d&apos;artisan, un poids lourd chargé et une mini-pelle sur
            chantier ne se protègent pas de la même façon. Nous partons de votre
            métier, pas du catalogue.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/secteurs/${s.slug}`}
              className="group border border-border/50 rounded-xl p-6 hover:border-cta hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold group-hover:text-cta transition-colors">
                  {s.label}
                </h3>
                <span className="text-cta opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.painPoints[0].body}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ————— COMMENT ÇA MARCHE ————— */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
              Comment ça marche ?
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl text-white">
              Suivi GPS simple, rapide et efficace en quelques étapes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Notre solution de suivi GPS est conçue pour être simple d&apos;utilisation.
              Quelques étapes suffisent pour sécuriser et surveiller vos véhicules.
            </p>
          </div>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="border-t-2 border-cta pt-5">
                <span className="text-3xl font-bold text-cta">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ————— PRODUITS ————— */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <p className="eyebrow">Produits phares</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Nos produits</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ————— ZONES (apport SEO) ————— */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Couverture régionale</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Installation et livraison partout en PACA
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Nos techniciens interviennent sur site dans les principales métropoles de
              la région. Les modèles sans installation sont expédiés gratuitement dans
              toute la France.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/zones/${c.slug}`}
                className="bg-white border border-border/50 rounded-lg px-4 py-2.5 text-sm font-semibold hover:border-cta hover:text-cta transition-colors"
              >
                {c.label}
                <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                  {c.departmentCode}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ————— TÉMOIGNAGES ————— */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Témoignages</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Ils parlent de nous</h2>
          <p className="mt-5 text-base text-muted-foreground">
            Des milliers de clients satisfaits font confiance à Track My Cars.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="border border-border/50 rounded-xl p-7 bg-white"
            >
              <div className="flex gap-0.5 text-gold" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ————— FAQ (apport SEO) ————— */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Ce qu&apos;on nous demande le plus</h2>
          </div>
          <div className="mt-10 max-w-4xl divide-y divide-border/50 border-y border-border/50">
            {faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                  <h3 className="text-base font-bold leading-snug">{item.question}</h3>
                  <span
                    className="mt-1 shrink-0 text-cta transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/faq" className="btn btn-primary">
              Voir toute la FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
