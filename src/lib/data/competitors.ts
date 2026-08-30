/**
 * Offres concurrentes relevées publiquement en août 2026.
 *
 * Ces tarifs évoluent : la page qui les affiche le précise et invite à
 * vérifier auprès du vendeur. On ne publie que ce qui est vérifiable, et
 * on ne dénigre pas — quand un concurrent est meilleur sur un point, on
 * l'écrit. C'est ce qui rend la comparaison crédible, et lisible par une IA.
 */
export interface Competitor {
  slug: string;
  name: string;
  origin: string;
  /** Prix du boîtier, en euros */
  device: number | null;
  /** Coût annuel de la connectivité, en euros */
  yearly: number | null;
  /** Comment la connectivité est facturée */
  networkNote: string;
  autonomy: string;
  cutoff: boolean;
  mic: boolean;
  install: string;
  /** Coût total sur 3 ans, calculé */
  threeYears: number | null;
  /** Ce pour quoi ce produit est réellement bon */
  strength: string;
  /** La limite honnête */
  limit: string;
  /** Le public auquel il convient */
  bestFor: string;
}

export const competitors: Competitor[] = [
  {
    slug: "tracker-mini",
    name: "Track My Cars — Tracker Mini",
    origin: "Track My Cars",
    device: 79,
    yearly: 90,
    networkNote: "Carte SIM 4G multi-opérateurs incluse, formule 12 mois",
    autonomy: "7 jours",
    cutoff: false,
    mic: true,
    install: "À poser, aucune installation",
    threeYears: 79 + 90 * 3,
    strength: "Le format le plus compact avec micro intégré, et un support français joignable.",
    limit: "Autonomie de 7 jours : il faut le recharger toutes les semaines.",
    bestFor: "Deux-roues, biens de valeur, premier équipement",
  },
  {
    slug: "tracker-coupe-moteur",
    name: "Track My Cars — Coupe-Moteur",
    origin: "Track My Cars",
    device: 199,
    yearly: 90,
    networkNote: "Carte SIM 4G multi-opérateurs incluse, formule 12 mois",
    autonomy: "Alimentation véhicule",
    cutoff: true,
    mic: false,
    install: "Câblée, par nos techniciens",
    threeYears: 199 + 90 * 3,
    strength:
      "Le seul de cette liste capable d'empêcher le redémarrage du véhicule à distance.",
    limit: "Nécessite une installation câblée : compter 45 minutes par véhicule.",
    bestFor: "Voiture, flotte, véhicule loué, taxi et VTC",
  },
  {
    slug: "invoxia-gps-pro",
    name: "Invoxia GPS Tracker Pro",
    origin: "France",
    device: 149,
    yearly: 59.85,
    networkNote: "Abonnement annuel obligatoire",
    autonomy: "Plusieurs mois selon l'usage",
    cutoff: false,
    mic: false,
    install: "À poser",
    threeYears: Math.round(149 + 59.85 * 3),
    strength:
      "Marque française installée, application soignée, remontée de position toutes les 30 secondes, couverture d'une quarantaine de pays.",
    limit: "Pas de coupe-moteur, pas d'installation sur site, pas de suivi de flotte.",
    bestFor: "Particulier qui veut une solution simple et bien finie",
  },
  {
    slug: "beepings-zen-l",
    name: "Beepings ZEN L",
    origin: "France",
    device: 179,
    yearly: 9.9,
    networkNote: "3 ans d'abonnement inclus à l'achat, puis 9,90 € par an",
    autonomy: "2 à 12 mois selon l'usage",
    cutoff: false,
    mic: false,
    install: "À poser",
    threeYears: 179,
    strength:
      "Le coût le plus bas de cette liste sur trois ans, avec une autonomie remarquable.",
    limit:
      "Position rafraîchie toutes les cinq minutes, pas de coupe-moteur, pas de suivi de flotte ni d'installation.",
    bestFor: "Particulier au budget serré, véhicule peu utilisé",
  },
  {
    slug: "tk905-winnes",
    name: "TK905 / Winnes et équivalents",
    origin: "Import, marketplaces",
    device: 45,
    yearly: 42,
    networkNote: "Carte SIM non incluse : forfait à souscrire, ~3,50 €/mois",
    autonomy: "Jusqu'à 90 jours en veille",
    cutoff: false,
    mic: false,
    install: "Aimanté, à poser",
    threeYears: 45 + 42 * 3,
    strength: "Le prix d'achat le plus bas du marché, et une bonne autonomie.",
    limit:
      "Aucun support en français, garantie difficile à faire jouer, carte SIM et plateforme à gérer soi-même, qualité variable d'un lot à l'autre.",
    bestFor: "Usage ponctuel, bricoleur autonome, budget minimal",
  },
  {
    slug: "georide",
    name: "GeoRide",
    origin: "France",
    device: null,
    yearly: null,
    networkNote: "Abonnement mensuel, matériel parfois inclus",
    autonomy: "Alimentation moto",
    cutoff: false,
    mic: false,
    install: "Câblée sur la moto",
    threeYears: null,
    strength:
      "Spécialiste du deux-roues avec une vraie communauté, des fonctions pensées pour les motards et un partenariat assurance.",
    limit:
      "Réservé à la moto, installation câblée nécessaire, pas de coupe-moteur.",
    bestFor: "Motard cherchant un écosystème dédié",
  },
  {
    slug: "quartix",
    name: "Quartix",
    origin: "Royaume-Uni",
    device: null,
    yearly: null,
    networkNote: "Abonnement flotte, tarif non public",
    autonomy: "Alimentation véhicule",
    cutoff: false,
    mic: false,
    install: "Sur site",
    threeYears: null,
    strength:
      "Rapports de flotte très complets, analyse d'éco-conduite, forte présence en Europe.",
    limit:
      "Engagement de douze mois minimum, tarif non affiché, aucune vente aux particuliers, pas de coupe-moteur.",
    bestFor: "Flotte de plus de cinquante véhicules avec besoin d'analyse fine",
  },
];

export function getCompetitor(slug: string) {
  return competitors.find((c) => c.slug === slug);
}
