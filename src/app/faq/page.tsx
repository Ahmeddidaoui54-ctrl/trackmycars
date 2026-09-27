import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { BreadcrumbJsonLd, FAQJsonLd ,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQ — Traceur GPS, installation, légalité, abonnement",
  description:
    "Toutes les réponses sur les traceurs GPS : choix du modèle, installation, légalité de la géolocalisation, RGPD, couverture réseau, abonnement et garantie.",
  alternates: { canonical: "/faq" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "FAQ", href: "/faq" },
];

/** Les huit questions du site actuel, reprises telles quelles. */
const officielles = [
  {
    question: "Comment installer Track My Cars ?",
    answer:
      "Nous avons conçu le traceur GPS Track My Cars pour qu'il soit simple et convivial. Sur le modèle OBD, il suffit de le brancher sur le port OBD de votre véhicule — voir la question suivante pour le localiser. Vous pouvez également opter pour un modèle alimenté par batterie, qui se place discrètement n'importe où dans le véhicule. Une fois connecté, activez le traceur via l'application mobile, compatible iOS et Android, en saisissant le numéro d'identification du traceur. Un manuel d'utilisation détaillé est inclus dans votre commande.",
  },
  {
    question: "Où se trouve la prise OBD dans mon véhicule ?",
    answer:
      "La prise OBD est présente sur tous les véhicules commercialisés depuis 2001 pour l'essence et 2004 pour le diesel. Elle se situe généralement sous le volant, à gauche du tableau de bord, dans le compartiment à fusibles, sur la console centrale, à l'intérieur de la boîte à gants ou à proximité du frein à main. Le manuel de votre véhicule indique son emplacement exact.",
  },
  {
    question: "Pourquoi ai-je besoin d'une carte SIM pour le traceur GPS ?",
    answer:
      "L'application doit communiquer avec le traceur GPS pour fournir les données de localisation en temps réel, et cette communication passe par le réseau cellulaire. La carte SIM 4G est incluse dans nos abonnements, qui couvrent environ 100 Mo de données par mois — le volume nécessaire à un suivi permanent.",
  },
  {
    question: "Ai-je besoin d'un smartphone pour utiliser le tracker ?",
    answer:
      "Non. Vous pouvez surveiller votre traceur depuis l'interface web, accessible sur n'importe quel navigateur sans installation. Le traceur envoie également des alertes par SMS, ce qui rend le service utilisable avec n'importe quel téléphone capable de recevoir des messages.",
  },
  {
    question: "Combien de temps faut-il pour recevoir ma commande ?",
    answer:
      "Nous traitons toutes les commandes le jour même, du lundi au vendredi. Les colis sont expédiés quotidiennement avec une livraison sous 48 heures, et un numéro de suivi vous est communiqué pour chaque commande.",
  },
  {
    question: "L'application mobile est-elle entièrement gratuite ?",
    answer:
      "Absolument. L'application mobile est 100 % gratuite, sans frais caché ni option payante. L'interface web l'est également. Seule la connectivité fait l'objet d'un abonnement, à partir de 7,50 € par mois sur la formule 12 mois.",
  },
  {
    question: "Le traceur GPS est-il couvert par la garantie ?",
    answer:
      "Oui. Nos traceurs sont livrés avec une garantie de 2 ans couvrant les pièces et la main-d'œuvre. En cas de panne non liée à une mauvaise utilisation, la réparation ou le remplacement est pris en charge sans frais supplémentaires.",
  },
  {
    question: "Que faire si je ne suis pas satisfait de mon traceur ?",
    answer:
      "Vous pouvez demander un remboursement dans les quatorze jours suivant la réception de votre commande si le traceur ne répond pas à vos attentes, après avoir respecté les consignes d'installation et contacté notre équipe d'assistance. Le retour est gratuit.",
  },
];

const general = [
  {
    question: "Comment fonctionne un traceur GPS ?",
    answer:
      "Le boîtier capte sa position via les satellites GPS, puis la transmet à notre plateforme par le réseau cellulaire, grâce à une carte SIM intégrée. Vous consultez cette position en temps réel depuis l'application mobile ou un navigateur. La fréquence de transmission s'adapte à l'état du véhicule : très rapprochée en mouvement, espacée à l'arrêt pour préserver la batterie.",
  },
  {
    question: "Quelle précision de localisation puis-je attendre ?",
    answer:
      "En extérieur dégagé, la précision est de l'ordre de 3 à 5 mètres. Elle se dégrade en environnement urbain dense, sous un tunnel ou dans un parking souterrain, où le signal satellite est masqué. Dans ces cas, le boîtier bascule sur la triangulation par antennes cellulaires, moins précise mais suffisante pour identifier un quartier ou un bâtiment.",
  },
  {
    question: "Que se passe-t-il en cas de perte de réseau ?",
    answer:
      "Les positions continuent d'être enregistrées en mémoire interne. Dès que le boîtier retrouve une couverture cellulaire, il transmet l'intégralité du trajet manquant. Aucune donnée n'est perdue, seul l'affichage temps réel est différé.",
  },
  {
    question: "Un voleur peut-il brouiller le signal ?",
    answer:
      "Des brouilleurs GPS existent, mais leur détention et leur usage sont illégaux en France. Nos boîtiers détectent une tentative de brouillage et émettent une alerte spécifique, avec la dernière position valide. Les modèles câblés signalent également toute coupure d'alimentation.",
  },
];

const legal = [
  {
    question: "Est-il légal de poser un traceur GPS sur un véhicule ?",
    answer:
      "Sur un véhicule dont vous êtes propriétaire et que vous utilisez seul, oui, sans formalité. Dès qu'une autre personne conduit le véhicule — salarié, locataire, proche — vous devez l'informer de l'existence du dispositif, de sa finalité et de la durée de conservation des données. Poser un traceur à l'insu d'une personne pour suivre ses déplacements est un délit pénal.",
  },
  {
    question: "Quelles obligations pour une flotte d'entreprise ?",
    answer:
      "Quatre obligations. Informer individuellement chaque salarié concerné (article L.1222-4 du Code du travail). Consulter le CSE lorsqu'il existe (article L.2312-38). Inscrire le traitement au registre des traitements — aucune déclaration préalable à la CNIL n'est requise, mais une analyse d'impact peut l'être. Enfin, se limiter à une finalité admise : facturation d'une prestation, sécurité, optimisation des tournées, ou suivi du temps de travail à titre subsidiaire uniquement. La géolocalisation permanente est interdite, les trajets domicile-travail ne sont jamais traçables, et la CNIL retient une conservation de deux mois en principe. Nous fournissons un modèle de note d'information avec chaque déploiement professionnel.",
  },
  {
    question: "Puis-je géolocaliser le véhicule d'un client en location ?",
    answer:
      "Oui, à condition que le contrat de location mentionne clairement le dispositif avant signature, avec sa finalité et la durée de conservation des données. Une géolocalisation dissimulée d'un client est illicite. Si vous prévoyez une clause d'immobilisation à distance, elle doit également figurer au contrat et rester proportionnée.",
  },
  {
    question: "Où sont hébergées mes données ?",
    answer:
      "En Union européenne. Vous pouvez exporter vos historiques à tout moment et demander leur suppression conformément au RGPD. Les durées de conservation par défaut sont de trois mois en offre Essentiel, douze mois en Pro et illimitées en Flotte, paramétrables à la baisse.",
  },
];

const service = [
  {
    question: "Quel est le délai de livraison ?",
    answer:
      "48 à 72 heures ouvrées pour les modèles sans installation, partout en France, sans frais de port. Pour une installation câblée par nos techniciens en région PACA, comptez environ une semaine pour la prise de rendez-vous.",
  },
  {
    question: "Que couvre la garantie de 2 ans ?",
    answer:
      "Les pièces et la main-d'œuvre en cas de défaillance du matériel dans des conditions normales d'usage. Les dommages liés à un accident, une immersion prolongée hors spécification ou une intervention par un tiers non habilité ne sont pas couverts. Le remplacement se fait par échange standard.",
  },
  {
    question: "Puis-je retourner le boîtier si je change d'avis ?",
    answer:
      "Oui. Vous disposez de quatorze jours à compter de la réception pour exercer votre droit de rétractation, sans avoir à justifier de motif. Le retour est gratuit et le remboursement intervient sous quatorze jours après réception du matériel.",
  },
  {
    question: "Comment joindre le support ?",
    answer:
      "Par téléphone, email ou WhatsApp, avec une équipe basée en France. Les clients en offre Pro bénéficient d'une ligne prioritaire, et les comptes Flotte disposent d'un interlocuteur dédié qui connaît votre parc.",
  },
];

const allQuestions = [
  ...officielles,
  ...general,
  ...legal,
  ...service,
  ...products.flatMap((p) => p.faq),
  ...sectors.flatMap((s) => s.faq),
];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={allQuestions} />
      <SpeakableJsonLd url={`${site.url}/faq`} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 rounded-xl border border-border/50 bg-muted p-6">
          <p className="text-lg font-bold">Besoin de notre aide ?</p>
          <a
            href={`tel:${site.phone}`}
            className="text-2xl font-bold text-cta hover:opacity-85"
          >
            +33 6 51 11 16 09
          </a>
          <a href="/devis" className="btn btn-primary btn-sm sm:ml-auto">
            Prendre rendez-vous
          </a>
        </div>

        <SectionHead
          eyebrow="FAQ"
          title="Toutes les réponses, sans détour"
          lead="Fonctionnement technique, cadre légal, garanties et service : voici ce qu'on nous demande le plus. Si votre question n'y figure pas, appelez-nous, la réponse prend deux minutes."
        />

        <div className="mt-14 space-y-14 max-w-4xl">
          <div>
            <h2 className="text-2xl font-bold">Votre traceur au quotidien</h2>
            <div className="rule mt-3 mb-6" />
            <FaqList items={officielles} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Fonctionnement</h2>
            <div className="rule mt-3 mb-6" />
            <FaqList items={general} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Cadre légal et RGPD</h2>
            <div className="rule mt-3 mb-6" />
            <FaqList items={legal} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Commande, garantie et support</h2>
            <div className="rule mt-3 mb-6" />
            <FaqList items={service} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Nos produits</h2>
            <div className="rule mt-3 mb-6" />
            <FaqList items={products.flatMap((p) => p.faq)} />
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Votre question n&apos;est pas là ?</h2>
          <p className="mt-5 text-primary-foreground/80 leading-relaxed">
            Décrivez votre situation, nous vous répondons précisément — y compris pour
            vous dire qu&apos;un traceur n&apos;est pas la bonne réponse à votre
            besoin.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Poser ma question</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
