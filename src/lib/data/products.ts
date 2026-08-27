export interface Product {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  image: string;
  tagline: string;
  description: string;
  autonomy: string;
  installation: string;
  features: string[];
  bestFor: string[];
  keywords: string[];
  faq: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    slug: "tracker-aimante",
    name: "Tracker GPS Aimanté",
    shortName: "Tracker Aimanté",
    price: 179,
    image: "/images/tracker-aimante.jpg",
    tagline: "Pose sans câblage, 30 jours d'autonomie",
    description:
      "Le tracker GPS aimanté se fixe en quelques secondes sous n'importe quel véhicule ou engin, sans branchement ni intervention d'un installateur. Sa batterie longue durée offre jusqu'à 30 jours d'autonomie et son boîtier étanche résiste à la pluie, à la poussière et aux projections. C'est la solution idéale pour un suivi discret, temporaire ou sur des matériels non électrifiés : remorques, bennes, engins de chantier, conteneurs.",
    autonomy: "Jusqu'à 30 jours",
    installation: "Aimantée — aucune installation requise",
    features: [
      "Application mobile iOS & Android",
      "Suivi en temps réel",
      "Historique d'itinéraire",
      "Alerte excès de vitesse",
      "Alarme de mouvement",
      "Alerte de déplacement",
      "Alerte de sortie de zone (geofencing)",
      "Micro intégré (écoute à distance)",
      "30 jours d'autonomie",
      "Boîtier étanche IP67",
    ],
    bestFor: ["remorque", "engin-chantier", "camion", "moto"],
    keywords: [
      "tracker gps aimanté",
      "traceur gps sans installation",
      "balise gps magnétique",
      "gps aimanté remorque",
      "tracker gps autonome longue durée",
    ],
    faq: [
      {
        question: "Le tracker aimanté tient-il vraiment sous un véhicule en roulant ?",
        answer:
          "Oui. Les aimants néodyme du boîtier développent une force de traction de plusieurs dizaines de kilos sur toute surface métallique. Le tracker reste en place à vitesse autoroutière comme sur piste. Nous recommandons une pose sur le châssis ou dans le passage de roue, à l'abri des projections directes.",
      },
      {
        question: "Quelle est l'autonomie réelle du tracker aimanté ?",
        answer:
          "Jusqu'à 30 jours en usage standard (véhicule en mouvement quelques heures par jour). En mode veille prolongée, l'autonomie peut dépasser 60 jours. L'application vous alerte automatiquement lorsque la batterie descend sous 20 %.",
      },
      {
        question: "Faut-il un abonnement en plus du tracker ?",
        answer:
          "Oui, un abonnement est nécessaire pour la carte SIM et l'accès à la plateforme de suivi. Nos abonnements sont sans engagement à partir de 9,90 € par mois et par tracker, avec dégressivité pour les flottes.",
      },
    ],
  },
  {
    slug: "tracker-coupe-moteur",
    name: "Tracker GPS Coupe-Moteur",
    shortName: "Tracker Coupe moteur",
    price: 199,
    image: "/images/tracker-coupe-moteur.jpg",
    tagline: "Immobilisez votre véhicule à distance en cas de vol",
    description:
      "Le tracker coupe-moteur est notre solution antivol la plus complète. Câblé de façon invisible sur le circuit électrique du véhicule, il permet non seulement de localiser votre bien en temps réel, mais aussi de couper le démarrage à distance depuis votre smartphone. En cas de vol, vous immobilisez le véhicule dès son prochain arrêt et transmettez la position exacte aux forces de l'ordre.",
    autonomy: "Alimentation véhicule + batterie de secours",
    installation: "Câblée — installation par nos techniciens recommandée",
    features: [
      "Application mobile iOS & Android",
      "Suivi en temps réel",
      "Historique d'itinéraire",
      "Alerte excès de vitesse",
      "Alarme moteur ON/OFF",
      "Alarme de mouvement",
      "Alerte de déplacement",
      "Alerte de sortie de zone (geofencing)",
      "Coupe-moteur à distance",
      "Boîtier invisible une fois installé",
    ],
    bestFor: ["voiture", "taxi", "vtc", "moto", "camion", "flotte"],
    keywords: [
      "tracker gps coupe moteur",
      "antivol gps voiture",
      "traceur gps immobilisation à distance",
      "gps antivol moto",
      "coupe circuit à distance gps",
    ],
    faq: [
      {
        question: "Le coupe-moteur peut-il s'activer pendant que je roule ?",
        answer:
          "Non, et c'est une sécurité essentielle. La commande d'immobilisation n'est appliquée qu'au prochain arrêt complet du véhicule, moteur coupé. Il est techniquement impossible de stopper un véhicule en mouvement depuis l'application.",
      },
      {
        question: "L'installation d'un coupe-moteur est-elle légale ?",
        answer:
          "Oui. L'installation d'un dispositif de géolocalisation et d'immobilisation sur un véhicule dont vous êtes propriétaire est parfaitement légale en France. Dans un contexte professionnel, l'employeur doit informer les salariés, déclarer le traitement au registre RGPD et respecter la finalité déclarée.",
      },
      {
        question: "Le tracker est-il détectable par un voleur ?",
        answer:
          "Le boîtier est installé hors de vue, sans témoin lumineux apparent, et son câblage se fond dans le faisceau d'origine. Nos techniciens varient les emplacements de pose. Une alerte de débranchement vous prévient instantanément si le dispositif est coupé.",
      },
    ],
  },
  {
    slug: "tracker-mini",
    name: "Tracker GPS Mini",
    shortName: "Tracker Mini",
    price: 79,
    image: "/images/tracker-mini.jpg",
    tagline: "Le format le plus discret de notre gamme",
    description:
      "À peine plus grand qu'une boîte d'allumettes, le tracker mini se glisse partout : sous un siège, dans une sacoche de moto, dans un coffre à outils ou dans un bagage. Malgré sa taille, il embarque l'intégralité des fonctions de suivi temps réel, d'alertes et de geofencing. C'est l'entrée de gamme idéale pour un premier équipement ou pour protéger un bien mobile qui n'est pas un véhicule.",
    autonomy: "Jusqu'à 7 jours",
    installation: "Autonome — à poser, aucune installation",
    features: [
      "Application mobile iOS & Android",
      "Suivi en temps réel",
      "Historique d'itinéraire",
      "Alerte excès de vitesse",
      "Alarme de mouvement",
      "Alerte de déplacement",
      "Alerte de sortie de zone (geofencing)",
      "Micro intégré (écoute à distance)",
      "7 jours d'autonomie",
      "Format ultra-compact",
    ],
    bestFor: ["moto", "voiture", "bateau", "camping-car"],
    keywords: [
      "mini tracker gps",
      "petit traceur gps discret",
      "balise gps miniature",
      "tracker gps moto discret",
      "traceur gps pas cher",
    ],
    faq: [
      {
        question: "Quelle est la différence entre le Tracker Mini et le Tracker Aimanté ?",
        answer:
          "Les fonctions de suivi sont identiques. Le Mini privilégie la discrétion et le prix (79 €, 7 jours d'autonomie, à poser librement) ; l'Aimanté privilégie l'autonomie et la fixation extérieure (179 €, 30 jours, aimants haute puissance, étanchéité renforcée).",
      },
      {
        question: "Le Tracker Mini fonctionne-t-il en dehors de la France ?",
        answer:
          "Oui. La carte SIM multi-opérateurs incluse dans l'abonnement couvre l'Europe et plus de 150 pays. Aucun frais de roaming supplémentaire n'est facturé sur nos abonnements standard.",
      },
      {
        question: "Peut-on suivre autre chose qu'un véhicule ?",
        answer:
          "Absolument. Le format du Tracker Mini le rend adapté au suivi de bagages, matériel professionnel, outillage, matériel audiovisuel ou tout bien de valeur transporté. La seule contrainte est de le recharger tous les 7 jours environ.",
      },
    ],
  },
  {
    slug: "tracker-obd",
    name: "Tracker GPS OBD",
    shortName: "Tracker OBD",
    price: 89,
    image: "/images/tracker-obd.webp",
    tagline: "Branché sur la prise diagnostic, opérationnel en 10 secondes",
    description:
      "Le tracker OBD se branche directement sur la prise diagnostic OBD-II présente sur tous les véhicules commercialisés depuis 2001. Aucun outil, aucun câblage : vous le clipsez, il s'alimente et transmet. Au-delà de la localisation, il remonte les données moteur du véhicule (démarrages, coupures, diagnostics) et vous alerte immédiatement s'il est débranché. C'est le choix privilégié des gestionnaires de flotte pour un déploiement rapide sur plusieurs véhicules.",
    autonomy: "Alimentation permanente par la prise OBD",
    installation: "Prise OBD-II — branchement en 10 secondes",
    features: [
      "Application mobile iOS & Android",
      "Suivi en temps réel",
      "Historique d'itinéraire",
      "Alerte excès de vitesse",
      "Alarme moteur ON/OFF",
      "Alarme de mouvement",
      "Alerte de déplacement",
      "Alerte de sortie de zone (geofencing)",
      "Micro intégré (écoute à distance)",
      "Alerte de débranchement immédiate",
    ],
    bestFor: ["flotte", "voiture", "taxi", "vtc", "utilitaire"],
    keywords: [
      "tracker gps obd",
      "traceur gps prise obd2",
      "gps flotte entreprise obd",
      "boîtier gps sans installation voiture",
      "suivi véhicule société obd",
    ],
    faq: [
      {
        question: "Mon véhicule est-il compatible avec le tracker OBD ?",
        answer:
          "Tous les véhicules essence commercialisés en Europe depuis 2001 et diesel depuis 2004 disposent d'une prise OBD-II normalisée. Si votre véhicule est plus ancien, orientez-vous vers le Tracker Aimanté ou le Tracker Coupe-Moteur.",
      },
      {
        question: "Le tracker OBD décharge-t-il la batterie du véhicule ?",
        answer:
          "Non. La consommation en veille est inférieure à 10 mA, soit l'équivalent d'une horloge de tableau de bord. Un véhicule dont la batterie est en bon état peut rester immobilisé plusieurs semaines sans incidence.",
      },
      {
        question: "Que se passe-t-il si un conducteur débranche le boîtier ?",
        answer:
          "Une notification vous est envoyée dans la seconde sur l'application, avec la dernière position connue et l'horodatage exact du débranchement. C'est une fonction déterminante en gestion de flotte.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
