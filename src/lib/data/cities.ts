export interface City {
  slug: string;
  label: string;
  /** Ex. "à Marseille", "au Cannet" — pour insertion dans les titres */
  inCity: string;
  department: string;
  departmentCode: string;
  lat: number;
  lng: number;
  population: number;
  /** Tissu économique local — sert à contextualiser le contenu SEO */
  context: string;
  /** Secteurs les plus pertinents pour cette ville */
  prioritySectors: string[];
  /** Zones et quartiers desservis, cités dans le contenu */
  areas: string[];
  /** Axes routiers structurants */
  axes: string[];
}

export const cities: City[] = [
  {
    slug: "marseille",
    label: "Marseille",
    inCity: "à Marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    lat: 43.2965,
    lng: 5.3698,
    population: 873076,
    context:
      "Premier port de France et deuxième ville du pays, Marseille concentre une densité exceptionnelle d'activités logistiques, de transport routier et de BTP. Le Grand Port Maritime, les zones d'activités de Saint-Charles, Arnavaux et La Valentine génèrent un trafic permanent de poids lourds et d'utilitaires, dans un contexte où le vol de véhicules professionnels reste parmi les plus élevés de France.",
    prioritySectors: ["flotte-entreprise", "camion", "utilitaire", "voiture", "moto", "taxi-vtc"],
    areas: [
      "Vieux-Port",
      "La Joliette",
      "Saint-Charles",
      "Les Arnavaux",
      "La Valentine",
      "Saint-Antoine",
      "Sainte-Marthe",
      "Château-Gombert",
      "La Pointe Rouge",
      "Les Aygalades",
    ],
    axes: ["A7", "A50", "A55", "L2", "RD559"],
  },
  {
    slug: "nice",
    label: "Nice",
    inCity: "à Nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    lat: 43.7102,
    lng: 7.2620,
    population: 348085,
    context:
      "Capitale de la Côte d'Azur, Nice conjugue un parc automobile haut de gamme, une saisonnalité touristique forte et la proximité immédiate de la frontière italienne — trois facteurs qui font de la région l'une des plus exposées au vol de véhicules de valeur et de deux-roues. Le pôle d'activités de Sophia Antipolis et la plaine du Var concentrent par ailleurs de nombreuses flottes d'entreprise.",
    prioritySectors: ["voiture", "moto", "taxi-vtc", "flotte-entreprise", "bateau", "location-vehicules"],
    areas: [
      "Nice Centre",
      "Le Port",
      "Saint-Roch",
      "L'Ariane",
      "Nice Ouest",
      "Saint-Isidore",
      "La Plaine du Var",
      "Cimiez",
      "Carras",
      "Saint-Laurent-du-Var",
    ],
    axes: ["A8", "M6202", "Promenade des Anglais", "Voie Mathis"],
  },
  {
    slug: "toulon",
    label: "Toulon",
    inCity: "à Toulon",
    department: "Var",
    departmentCode: "83",
    lat: 43.1242,
    lng: 5.9280,
    population: 176198,
    context:
      "Première rade militaire d'Europe, Toulon structure une économie de la logistique portuaire, de la maintenance navale et du transport. La métropole Toulon Provence Méditerranée regroupe de nombreuses PME du bâtiment et des travaux publics dont les fourgons et engins constituent l'outil de production, avec une exposition forte au vol de matériel.",
    prioritySectors: ["utilitaire", "flotte-entreprise", "bateau", "voiture", "moto", "camion"],
    areas: [
      "Toulon Centre",
      "Le Mourillon",
      "La Rode",
      "Sainte-Musse",
      "Brunet",
      "Les Routes",
      "La Seyne-sur-Mer",
      "La Valette-du-Var",
      "Ollioules",
      "La Garde",
    ],
    axes: ["A50", "A57", "DN8", "Tunnel de Toulon"],
  },
  {
    slug: "aix-en-provence",
    label: "Aix-en-Provence",
    inCity: "à Aix-en-Provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    lat: 43.5297,
    lng: 5.4474,
    population: 147122,
    context:
      "Aix-en-Provence et sa zone d'activités des Milles forment l'un des pôles tertiaires et industriels les plus dynamiques de la région. La densité de sièges sociaux, de sociétés de services et de flottes commerciales y est parmi les plus élevées de PACA, avec un enjeu de gestion de parc plus marqué encore que l'enjeu antivol.",
    prioritySectors: ["flotte-entreprise", "voiture", "utilitaire", "location-vehicules", "taxi-vtc"],
    areas: [
      "Aix Centre",
      "Les Milles",
      "Pont de l'Arc",
      "Jas de Bouffan",
      "Encagnane",
      "Puyricard",
      "Luynes",
      "La Duranne",
      "Vitrolles",
      "Bouc-Bel-Air",
    ],
    axes: ["A8", "A51", "A7", "RD9"],
  },
  {
    slug: "avignon",
    label: "Avignon",
    inCity: "à Avignon",
    department: "Vaucluse",
    departmentCode: "84",
    lat: 43.9493,
    lng: 4.8055,
    population: 93671,
    context:
      "Carrefour logistique entre la vallée du Rhône et la Provence, Avignon accueille des plateformes de distribution et un tissu dense d'entreprises agricoles et agroalimentaires. La zone de Courtine et le pôle de Cavaillon-Châteaurenard génèrent un trafic permanent de poids lourds et de matériel agricole, particulièrement exposé au vol en période de faible activité.",
    prioritySectors: ["camion", "flotte-entreprise", "engin-chantier", "utilitaire", "remorque"],
    areas: [
      "Intra-muros",
      "Courtine",
      "Montfavet",
      "Le Pontet",
      "Saint-Chamand",
      "Réalpanier",
      "Villeneuve-lès-Avignon",
      "Sorgues",
      "Morières-lès-Avignon",
    ],
    axes: ["A7", "A9", "RN7", "LEO"],
  },
  {
    slug: "cannes",
    label: "Cannes",
    inCity: "à Cannes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    lat: 43.5528,
    lng: 7.0174,
    population: 74152,
    context:
      "Cannes concentre une densité de véhicules et de bateaux de très forte valeur, amplifiée par les grands événements qui rythment l'année. La saisonnalité, le stationnement en extérieur et la proximité de l'A8 en font une zone où le vol de véhicules haut de gamme et de deux-roues est structurellement élevé.",
    prioritySectors: ["voiture", "bateau", "moto", "taxi-vtc", "location-vehicules"],
    areas: [
      "La Croisette",
      "Le Suquet",
      "La Bocca",
      "Palm Beach",
      "Le Cannet",
      "Mandelieu-la-Napoule",
      "Vallauris",
      "Port Canto",
    ],
    axes: ["A8", "RD6007", "RD6098"],
  },
  {
    slug: "antibes",
    label: "Antibes",
    inCity: "à Antibes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    lat: 43.5808,
    lng: 7.1251,
    population: 72999,
    context:
      "Port Vauban, premier port de plaisance d'Europe, place Antibes au cœur de l'industrie du yachting méditerranéen. La ville combine ainsi un enjeu nautique majeur, un parc automobile de valeur et la proximité de Sophia Antipolis, premier technopôle européen et donc pôle important de flottes d'entreprise.",
    prioritySectors: ["bateau", "voiture", "flotte-entreprise", "moto", "camping-car"],
    areas: [
      "Vieil Antibes",
      "Port Vauban",
      "Juan-les-Pins",
      "La Fontonne",
      "Les Semboules",
      "Sophia Antipolis",
      "Biot",
      "Vallauris Golfe-Juan",
    ],
    axes: ["A8", "RD6007", "RD35"],
  },
  {
    slug: "hyeres",
    label: "Hyères",
    inCity: "à Hyères",
    department: "Var",
    departmentCode: "83",
    lat: 43.1204,
    lng: 6.1286,
    population: 57635,
    context:
      "Entre l'aéroport Toulon-Hyères, le port de la Capte et la presqu'île de Giens, Hyères combine flux touristiques saisonniers, plaisance et activité agricole horticole. Les véhicules stationnés longue durée aux abords de l'aéroport et des embarcadères des îles constituent une cible privilégiée en haute saison.",
    prioritySectors: ["voiture", "bateau", "camping-car", "utilitaire", "moto"],
    areas: [
      "Hyères Centre",
      "La Capte",
      "Giens",
      "L'Ayguade",
      "Costebelle",
      "Les Salins",
      "La Crau",
      "Carqueiranne",
    ],
    axes: ["A570", "DN98", "RD559"],
  },
  {
    slug: "frejus-saint-raphael",
    label: "Fréjus — Saint-Raphaël",
    inCity: "à Fréjus et Saint-Raphaël",
    department: "Var",
    departmentCode: "83",
    lat: 43.4332,
    lng: 6.7370,
    population: 89000,
    context:
      "L'agglomération Fréjus–Saint-Raphaël constitue la porte d'entrée est du Var, sur l'axe A8 entre Cannes et Toulon. Forte saisonnalité touristique, camping-cars nombreux, ports de plaisance et zones d'activités du Capitou : un profil de risque marqué en période estivale sur les véhicules de loisirs.",
    prioritySectors: ["camping-car", "voiture", "bateau", "utilitaire", "remorque"],
    areas: [
      "Fréjus Centre",
      "Fréjus-Plage",
      "Saint-Aygulf",
      "Le Capitou",
      "Saint-Raphaël Centre",
      "Boulouris",
      "Agay",
      "Puget-sur-Argens",
    ],
    axes: ["A8", "DN7", "RD559"],
  },
  {
    slug: "arles",
    label: "Arles",
    inCity: "à Arles",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    lat: 43.6768,
    lng: 4.6280,
    population: 50467,
    context:
      "Plus vaste commune de France métropolitaine, Arles s'étend sur la Camargue et concentre une activité agricole, logistique et industrielle importante. L'étendue du territoire, la dispersion des exploitations et des chantiers rendent le suivi du matériel roulant particulièrement difficile sans dispositif de géolocalisation.",
    prioritySectors: ["engin-chantier", "camion", "remorque", "utilitaire", "flotte-entreprise"],
    areas: [
      "Arles Centre",
      "Trinquetaille",
      "Barriol",
      "Griffeuille",
      "Salin-de-Giraud",
      "Saliers",
      "Raphèle-lès-Arles",
      "Camargue",
    ],
    axes: ["A54", "RN113", "RD570"],
  },
  {
    slug: "gap",
    label: "Gap",
    inCity: "à Gap",
    department: "Hautes-Alpes",
    departmentCode: "05",
    lat: 44.5594,
    lng: 6.0790,
    population: 40559,
    context:
      "Préfecture des Hautes-Alpes et principale ville des Alpes du Sud, Gap dessert un territoire de montagne où les chantiers isolés, les stations et les exploitations forestières multiplient les points de stockage de matériel sans surveillance. L'éloignement des sites y rend la localisation du matériel encore plus déterminante qu'en zone urbaine.",
    prioritySectors: ["engin-chantier", "utilitaire", "camion", "remorque", "flotte-entreprise"],
    areas: [
      "Gap Centre",
      "Fontreyne",
      "Beauregard",
      "Micropolis",
      "Tallard",
      "La Bâtie-Neuve",
      "Veynes",
    ],
    axes: ["RN85", "RN94", "A51"],
  },
  {
    slug: "salon-de-provence",
    label: "Salon-de-Provence",
    inCity: "à Salon-de-Provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    lat: 43.6406,
    lng: 5.0975,
    population: 45528,
    context:
      "Située au croisement de l'A7, l'A54 et l'A8, Salon-de-Provence est un nœud logistique majeur de la région. Les plateformes de la Crau et les zones d'activités environnantes accueillent un volume considérable de poids lourds et de flottes de distribution, avec les risques de vol de fret qui accompagnent ce type de trafic.",
    prioritySectors: ["camion", "flotte-entreprise", "utilitaire", "engin-chantier", "remorque"],
    areas: [
      "Salon Centre",
      "La Crau",
      "Les Viougues",
      "Bel Air",
      "Lançon-Provence",
      "Pélissanne",
      "Grans",
      "Miramas",
    ],
    axes: ["A7", "A54", "RN113", "RN569"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Toutes les combinaisons secteur × ville qui ont du sens (priorité de la ville) */
export function getSectorCityPairs(): { sectorSlug: string; citySlug: string }[] {
  const pairs: { sectorSlug: string; citySlug: string }[] = [];
  for (const city of cities) {
    for (const sectorSlug of city.prioritySectors) {
      pairs.push({ sectorSlug, citySlug: city.slug });
    }
  }
  return pairs;
}

/** Villes qui ciblent un secteur donné */
export function getCitiesForSector(sectorSlug: string): City[] {
  return cities.filter((c) => c.prioritySectors.includes(sectorSlug));
}
