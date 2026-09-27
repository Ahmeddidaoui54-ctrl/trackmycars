import Link from "next/link";
import type { Metadata } from "next";
import { competitors } from "@/lib/data/competitors";
import { products } from "@/lib/data/products";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/ProductCard";
import { BreadcrumbJsonLd, FAQJsonLd, ItemListJsonLd ,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Comparatif traceurs GPS 2026 — quel modèle choisir vraiment",
  description:
    "Comparatif honnête des traceurs GPS : Track My Cars, Invoxia, Beepings, TK905, GeoRide, Quartix. Prix réel sur 3 ans, autonomie, coupe-moteur. Y compris quand nous ne sommes pas les moins chers.",
  keywords: [
    "comparatif traceur gps",
    "meilleur traceur gps",
    "meilleur traceur gps voiture",
    "comparatif traceur gps voiture",
    "meilleur traceur gps moto",
    "avis traceur gps",
    "traceur gps comparatif 2026",
    "quel traceur gps choisir",
    "traceur gps invoxia avis",
    "tk905 avis",
  ],
  alternates: { canonical: "/comparatif" },
  openGraph: {
    title: "Comparatif traceurs GPS 2026 — quel modèle choisir vraiment",
    description:
      "Sept solutions comparées sur le prix réel à trois ans, l'autonomie et les fonctions. Sans complaisance, y compris envers nous.",
    url: `${site.url}/comparatif`,
  },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Comparatif", href: "/comparatif" },
];

const faq = [
  {
    question: "Quel est le meilleur traceur GPS en 2026 ?",
    answer:
      "Il n'y a pas de meilleur traceur dans l'absolu, seulement un meilleur choix selon l'usage. Pour un budget minimal sur un véhicule peu utilisé, le Beepings ZEN L est difficile à battre : 179 € avec trois ans de connectivité incluse. Pour un particulier qui veut une solution finie et simple, l'Invoxia GPS Pro. Pour empêcher un véhicule volé de redémarrer, le Track My Cars Coupe-Moteur est le seul de cette comparaison qui le permette. Pour une flotte de plus de cinquante véhicules avec besoin d'analyse d'éco-conduite, Quartix. Le tableau de cette page donne le coût réel de chacun sur trois ans.",
  },
  {
    question: "Comment choisir un traceur GPS ?",
    answer:
      "Trois questions suffisent. Premièrement : le matériel à équiper dispose-t-il d'une alimentation ? Si non — remorque, engin, bateau — il faut un modèle autonome sur batterie. Deuxièmement : voulez-vous seulement savoir où il est, ou aussi pouvoir l'immobiliser ? Le coupe-moteur change la nature de la protection. Troisièmement : combien de véhicules ? Au-delà de trois, le suivi de flotte et la dégressivité tarifaire deviennent déterminants.",
  },
  {
    question: "Les traceurs GPS à 40 € valent-ils quelque chose ?",
    answer:
      "Techniquement, oui : un TK905 ou un Winnes localise correctement. Ce qui manque n'est pas la puce GPS, c'est tout le reste — le support quand la transmission s'arrête, la garantie exploitable, la carte SIM multi-opérateurs qui ne perd pas le signal en zone blanche, et la constance de fabrication d'un lot à l'autre. Sur un véhicule à 500 €, c'est un arbitrage raisonnable. Sur un fourgon chargé d'outillage, l'économie de 200 € se paie au premier incident.",
  },
  {
    question: "Faut-il un traceur avec ou sans abonnement ?",
    answer:
      "La question est mal posée : le « sans abonnement » n'existe pas vraiment. Un traceur transmet par le réseau cellulaire, ce qui a un coût permanent — soit intégré au prix d'achat, soit facturé mensuellement, soit reporté sur une carte SIM que vous achetez ailleurs. Ce qui compte est le total sur la durée d'utilisation. Notre page tarifs détaille ce calcul.",
  },
  {
    question: "Quel traceur GPS pour une moto ?",
    answer:
      "Pour un motard qui veut un écosystème dédié, GeoRide a construit une vraie communauté et un partenariat assurance, au prix d'une installation câblée. Pour un boîtier à poser sans intervention, le Track My Cars Mini se dissimule sous la selle ou dans le carénage et embarque un micro. Le Beepings ZEN L offre la meilleure autonomie du lot. Le critère décisif sur un deux-roues reste la discrétion du boîtier : c'est la première chose qu'un voleur cherche.",
  },
  {
    question: "Quel traceur GPS pour une flotte d'entreprise ?",
    answer:
      "Au-delà de cinquante véhicules avec un besoin d'analyse d'éco-conduite et de rapports détaillés, Quartix est plus complet que nous, et nous le disons. Entre trois et cinquante véhicules, le rapport entre le coût et ce que vous obtenez penche de notre côté : prix affichés, pas d'engagement obligatoire, coupe-moteur disponible, installation sur site en PACA et documentation RGPD fournie.",
  },
];

function euro(n: number | null) {
  return n === null ? "—" : `${n} €`;
}

export default function ComparatifPage() {
  const sorted = [...competitors].sort((a, b) => {
    if (a.threeYears === null) return 1;
    if (b.threeYears === null) return -1;
    return a.threeYears - b.threeYears;
  });

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={faq} />
      <SpeakableJsonLd url={`${site.url}/comparatif`} />
      <ItemListJsonLd
        name="Traceurs GPS comparés"
        items={competitors.map((c) => ({ name: c.name, url: "/comparatif" }))}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary text-white mt-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
              Comparatif 2026
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-white">
              Quel traceur GPS choisir vraiment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Sept solutions comparées sur ce qui compte : le coût réel à trois
              ans, l&apos;autonomie, et ce que le boîtier sait faire. Y compris
              quand la comparaison ne nous avantage pas.
            </p>
          </div>
        </div>
      </section>

      {/* Avertissement de méthode */}
      <Section>
        <div className="max-w-3xl">
          <p className="eyebrow">Notre méthode</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">
            Un comparatif écrit par un vendeur, et qui l&apos;assume
          </h2>
          <div className="rule mt-5" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Nous vendons des traceurs GPS. Un comparatif publié par un vendeur
            mérite de la méfiance, alors voici comment celui-ci est construit :
            nous n&apos;affichons que des tarifs relevés publiquement, nous
            écrivons la limite de chaque produit y compris les nôtres, et
            lorsqu&apos;un concurrent est meilleur sur un critère, nous le
            disons et nous expliquons pourquoi.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Trois conclusions de ce comparatif ne nous arrangent pas : le
            Beepings ZEN L coûte moins cher que nous sur trois ans, Quartix est
            plus complet sur les grandes flottes, et un boîtier d&apos;import à
            45 € reste imbattable en prix d&apos;achat. Elles sont dans le
            tableau.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Tarifs relevés en août 2026. Ils évoluent — vérifiez auprès du
            vendeur avant de décider.
          </p>
        </div>
      </Section>

      {/* Tableau principal */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Le tableau"
          title="Coût réel sur trois ans, boîtier et réseau compris"
          lead="Classé du moins cher au plus cher. Un tarif absent signifie que le vendeur ne le publie pas."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-4xl border-collapse text-sm bg-white">
            <caption className="sr-only">
              Comparatif du coût total des traceurs GPS sur trois ans
            </caption>
            <thead>
              <tr className="border-b-2 border-primary">
                <th scope="col" className="p-3 text-left font-bold">Solution</th>
                <th scope="col" className="p-3 text-right font-bold">Boîtier</th>
                <th scope="col" className="p-3 text-right font-bold">Réseau / an</th>
                <th scope="col" className="p-3 text-right font-bold">Total 3 ans</th>
                <th scope="col" className="p-3 text-left font-bold">Autonomie</th>
                <th scope="col" className="p-3 text-center font-bold">Coupe-moteur</th>
                <th scope="col" className="p-3 text-center font-bold">Micro</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((c) => {
                const ours = c.origin === "Track My Cars";
                return (
                  <tr
                    key={c.slug}
                    className={`border-b border-border/50 ${ours ? "bg-cta/5" : ""}`}
                  >
                    <th scope="row" className="p-3 text-left align-top">
                      <span className="block font-bold">{c.name}</span>
                      <span className="block text-xs font-normal text-muted-foreground">
                        {c.origin}
                      </span>
                    </th>
                    <td className="p-3 text-right align-top tabular-nums">
                      {euro(c.device)}
                    </td>
                    <td className="p-3 text-right align-top tabular-nums text-muted-foreground">
                      {c.yearly === null
                        ? "—"
                        : `${c.yearly.toFixed(2).replace(".", ",").replace(",00", "")} €`}
                    </td>
                    <td className="p-3 text-right align-top">
                      <span className={`font-bold tabular-nums ${ours ? "text-cta" : ""}`}>
                        {euro(c.threeYears)}
                      </span>
                    </td>
                    <td className="p-3 align-top text-xs text-muted-foreground">
                      {c.autonomy}
                    </td>
                    <td className="p-3 text-center align-top">
                      {c.cutoff ? (
                        <span className="font-bold text-success">Oui</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="p-3 text-center align-top">
                      {c.mic ? (
                        <span className="font-bold text-success">Oui</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-3xl text-xs text-muted-foreground">
          Le total à trois ans additionne le prix d&apos;achat du boîtier et
          trois années de connectivité. Pour le TK905 et ses équivalents, la
          carte SIM n&apos;est pas fournie : le calcul retient un forfait data
          à 3,50 € par mois, le minimum praticable.
        </p>
      </Section>

      {/* Analyse produit par produit */}
      <Section>
        <SectionHead
          eyebrow="Produit par produit"
          title="Ce que chacun fait bien, et où il s'arrête"
        />
        <div className="mt-12 space-y-px bg-border border border-border rounded-lg overflow-hidden">
          {competitors.map((c) => {
            const ours = c.origin === "Track My Cars";
            return (
              <article key={c.slug} className={`p-6 sm:p-7 ${ours ? "bg-cta/5" : "bg-white"}`}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="sm:w-1/3">
                    <h3 className="text-lg font-bold">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.origin}</p>
                    {c.threeYears !== null && (
                      <p className="mt-3">
                        <span className="text-xl font-bold text-primary tabular-nums">
                          {c.threeYears} €
                        </span>{" "}
                        <span className="text-xs text-muted-foreground">sur 3 ans</span>
                      </p>
                    )}
                    <p className="mt-3 text-xs text-muted-foreground">
                      {c.networkNote}
                    </p>
                  </div>
                  <div className="sm:w-2/3 space-y-3">
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-success">Ce qu&apos;il fait bien — </span>
                      <span className="text-muted-foreground">{c.strength}</span>
                    </p>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-destructive">Où il s&apos;arrête — </span>
                      <span className="text-muted-foreground">{c.limit}</span>
                    </p>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold">Pour qui — </span>
                      <span className="text-muted-foreground">{c.bestFor}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Le critère que personne ne compare */}
      <Section className="bg-primary text-white">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
            Le critère absent des comparatifs
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl text-white">
            Savoir où est le véhicule, ou l&apos;empêcher de repartir
          </h2>
          <div className="mt-5 h-0.5 w-12 bg-cta" />
          <p className="mt-6 text-base leading-relaxed text-white/80">
            Tous les traceurs de ce comparatif font la même chose : ils vous
            disent où se trouve votre véhicule. Un seul permet de couper le
            démarrage à distance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            La différence est concrète. Sans coupe-moteur, vous suivez votre
            véhicule volé sur une carte et vous transmettez la position aux
            forces de l&apos;ordre, en espérant qu&apos;elles arrivent avant
            qu&apos;il ne soit démonté ou embarqué. Avec, le véhicule ne
            redémarrera pas à son prochain arrêt — et un véhicule immobilisé
            n&apos;a plus de valeur pour un voleur.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            La commande ne s&apos;applique jamais en roulant : elle attend
            l&apos;arrêt complet du véhicule, moteur coupé. C&apos;est une
            sécurité, pas une option.
          </p>
          <div className="mt-8">
            <CTA href="/produits/tracker-coupe-moteur">
              Voir le tracker coupe-moteur
            </CTA>
          </div>
        </div>
      </Section>

      {/* Aide au choix */}
      <Section>
        <SectionHead
          eyebrow="Aide au choix"
          title="Trois questions suffisent"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              q: "Le matériel a-t-il une alimentation ?",
              a: "Une remorque, un engin de chantier ou un bateau n'ont pas de circuit exploitable. Il faut alors un boîtier autonome sur batterie, aimanté ou à poser.",
            },
            {
              n: "02",
              q: "Localiser suffit-il, ou faut-il immobiliser ?",
              a: "Sur un véhicule de valeur, un véhicule loué ou un outil de travail, la capacité à couper le démarrage change la nature de la protection.",
            },
            {
              n: "03",
              q: "Combien de véhicules ?",
              a: "Au-delà de trois, le suivi sur une carte unique, les rapports d'activité et la dégressivité tarifaire deviennent le vrai sujet.",
            },
          ].map((s) => (
            <div key={s.n} className="border-t-2 border-cta pt-5">
              <span className="text-3xl font-bold text-cta">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold">{s.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.a}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTA href="/devis">Décrire mon besoin</CTA>
          <Link href="/tarifs" className="btn btn-outline text-primary">
            Voir le détail des tarifs
          </Link>
        </div>
      </Section>

      {/* Notre gamme */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="Notre gamme"
          title="Les cinq boîtiers Track My Cars"
          lead="Tous partagent la même application, les mêmes alertes et la même couverture réseau. Ils diffèrent par l'alimentation, la discrétion et la capacité d'immobilisation."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Questions fréquentes" title="Choisir son traceur GPS" />
        <div className="mt-10 max-w-4xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl text-white">
            Toujours hésitant après ce tableau ?
          </h2>
          <p className="mt-5 leading-relaxed text-white/80">
            Dites-nous ce que vous devez protéger et comment vous l&apos;utilisez.
            Nous vous dirons quel modèle convient — y compris s&apos;il
            s&apos;agit d&apos;un autre que les nôtres.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander conseil</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
