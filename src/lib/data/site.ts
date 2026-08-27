export const site = {
  name: "Track My Cars",
  legalName: "Track My Cars",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://trackmycars.fr",
  phone: "+33651111609",
  phoneDisplay: "06 51 11 16 09",
  email: "contact@trackmycars.fr",
  whatsapp: "https://wa.me/33651111609",
  region: "Provence-Alpes-Côte d'Azur",
  regionCode: "FR-PAC",
  tagline: "Suivi GPS professionnel pour véhicules et matériels",
  description:
    "Trackers GPS professionnels pour voitures, flottes, poids lourds et engins. Installation et livraison en région PACA. Formule sans engagement, garantie 2 ans.",
  social: {
    instagram: "https://www.instagram.com/trackmycars",
    tiktok: "https://www.tiktok.com/@trackmycars",
    snapchat: "https://www.snapchat.com/add/trackmycars",
  },
  guarantees: [
    { label: "Couverture mondiale", detail: "Plus de 150 pays, sans frais de roaming" },
    { label: "Sans engagement", detail: "Formule mensuelle résiliable à tout moment" },
    { label: "Garantie 2 ans", detail: "Matériel garanti pièces et main-d'œuvre" },
    { label: "Support français", detail: "Équipe basée en France, joignable directement" },
  ],
} as const;

export interface Plan {
  slug: string;
  name: string;
  /** Durée d'engagement en mois */
  months: number;
  /** Prix total facturé pour la période */
  totalPrice: number;
  /** Prix ramené au mois */
  pricePerMonth: number;
  tagline: string;
  features: string[];
  highlight?: boolean;
}

/**
 * Tarifs repris de trackmycars.fr/nos-abonnements.
 * Les trackers embarquent une carte SIM 4G consommant ~100 Mo/mois ;
 * l'abonnement couvre cette connectivité et l'accès à la plateforme.
 */
export const plans: Plan[] = [
  {
    slug: "1-mois",
    name: "1 mois",
    months: 1,
    totalPrice: 15,
    pricePerMonth: 15,
    tagline: "Sans engagement, résiliable chaque mois",
    features: [
      "Carte SIM 4G incluse (~100 Mo/mois)",
      "Suivi temps réel illimité",
      "Alertes de mouvement et de zone",
      "Application iOS & Android",
      "Interface web sans installation",
      "Support français",
    ],
  },
  {
    slug: "12-mois",
    name: "12 mois",
    months: 12,
    totalPrice: 90,
    pricePerMonth: 7.5,
    tagline: "La formule la plus économique",
    highlight: true,
    features: [
      "Tout le plan 1 mois",
      "50 % d'économie sur le tarif mensuel",
      "Historique d'itinéraire complet",
      "Alertes illimitées",
      "Support prioritaire",
      "Idéal flotte et usage professionnel",
    ],
  },
  {
    slug: "6-mois",
    name: "6 mois",
    months: 6,
    totalPrice: 60,
    pricePerMonth: 10,
    tagline: "Le bon compromis durée / prix",
    features: [
      "Tout le plan 1 mois",
      "33 % d'économie sur le tarif mensuel",
      "Historique d'itinéraire complet",
      "Alertes illimitées",
      "Support français",
    ],
  },
];
