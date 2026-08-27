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
    "Trackers GPS professionnels pour voitures, flottes, poids lourds et engins. Installation et livraison en région PACA. Sans engagement, garantie 3 ans.",
  social: {
    instagram: "https://www.instagram.com/trackmycars",
    tiktok: "https://www.tiktok.com/@trackmycars",
    snapchat: "https://www.snapchat.com/add/trackmycars",
  },
  guarantees: [
    { label: "Couverture mondiale", detail: "Plus de 150 pays, sans frais de roaming" },
    { label: "Sans engagement", detail: "Abonnement résiliable à tout moment" },
    { label: "Garantie 3 ans", detail: "Matériel garanti pièces et main-d'œuvre" },
    { label: "Support français", detail: "Équipe basée en France, joignable directement" },
  ],
} as const;

export interface Plan {
  slug: string;
  name: string;
  pricePerMonth: number;
  minVehicles: number;
  maxVehicles: number | null;
  tagline: string;
  features: string[];
  highlight?: boolean;
}

export const plans: Plan[] = [
  {
    slug: "essentiel",
    name: "Essentiel",
    pricePerMonth: 9.9,
    minVehicles: 1,
    maxVehicles: 2,
    tagline: "Pour un ou deux véhicules personnels",
    features: [
      "Carte SIM multi-opérateurs incluse",
      "Suivi temps réel illimité",
      "Historique 3 mois",
      "Alertes de mouvement et de zone",
      "Application iOS & Android",
      "Support par email et WhatsApp",
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    pricePerMonth: 7.9,
    minVehicles: 3,
    maxVehicles: 20,
    tagline: "Pour les artisans, TPE et petites flottes",
    highlight: true,
    features: [
      "Tout le plan Essentiel",
      "Historique 12 mois",
      "Rapports d'activité exportables",
      "Gestion multi-utilisateurs",
      "Geofencing illimité",
      "Support téléphonique prioritaire",
      "Documentation RGPD fournie",
    ],
  },
  {
    slug: "flotte",
    name: "Flotte",
    pricePerMonth: 5.9,
    minVehicles: 21,
    maxVehicles: null,
    tagline: "Pour les flottes de plus de 20 véhicules",
    features: [
      "Tout le plan Pro",
      "Historique illimité",
      "Accès API pour intégration",
      "Regroupement par site ou agence",
      "Interlocuteur dédié",
      "Installation sur site incluse",
      "Formation des équipes",
    ],
  },
];
