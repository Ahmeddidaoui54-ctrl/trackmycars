export interface Sector {
  slug: string;
  label: string;
  /** Nom au pluriel, utilisé dans les titres */
  plural: string;
  /** Article + nom, ex. "votre voiture", "vos camions" */
  possessive: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Le problème concret que rencontre ce secteur */
  painPoints: { title: string; body: string }[];
  /** Bénéfices spécifiques au secteur */
  benefits: { title: string; body: string }[];
  recommendedProducts: string[];
  keywords: string[];
  faq: { question: string; answer: string }[];
  /** Chiffre choc pour la preuve sociale */
  stat: { value: string; label: string };
}

export const sectors: Sector[] = [
  {
    slug: "voiture",
    label: "Voiture",
    plural: "voitures",
    possessive: "votre voiture",
    h1: "Traceur GPS pour voiture — localisez votre véhicule 24h/24",
    metaTitle: "Traceur GPS Voiture — Antivol & Suivi Temps Réel",
    metaDescription:
      "Tracker GPS pour voiture : localisation temps réel, alerte de déplacement, coupe-moteur à distance. Installation en France, sans engagement, garantie 3 ans.",
    intro:
      "Un véhicule est volé toutes les quatre minutes en France, et moins d'un sur deux est retrouvé. Un traceur GPS change radicalement cette statistique : dès l'alerte de déplacement, vous connaissez la position exacte de votre voiture et pouvez transmettre les coordonnées aux forces de l'ordre en temps réel. Sur les modèles coupe-moteur, vous immobilisez le véhicule à son prochain arrêt.",
    painPoints: [
      {
        title: "Le vol sans effraction",
        body: "Les vols par relais de clé mains-libres et par prise OBD ne laissent aucune trace. L'alarme d'origine ne se déclenche pas, l'assurance conteste, et le véhicule quitte le territoire en quelques heures.",
      },
      {
        title: "Le véhicule prêté",
        body: "Prêter sa voiture à un proche, un jeune conducteur ou un locataire sans aucune visibilité sur l'usage réel. Excès de vitesse, kilométrage, zones fréquentées : sans données, aucun cadre possible.",
      },
      {
        title: "Le stationnement longue durée",
        body: "Voiture laissée à l'aéroport, en gare ou dans un parking non gardé pendant plusieurs semaines. Aucun moyen de savoir si elle a bougé avant de revenir la chercher.",
      },
    ],
    benefits: [
      {
        title: "Alerte de déplacement instantanée",
        body: "Une notification part sur votre téléphone dès que la voiture bouge en dehors des plages horaires que vous avez définies. Vous savez avant même de constater l'absence.",
      },
      {
        title: "Immobilisation à distance",
        body: "Avec le tracker coupe-moteur, une commande depuis l'application empêche le redémarrage au prochain arrêt. Le véhicule devient inexploitable pour le voleur.",
      },
      {
        title: "Dossier assurance solide",
        body: "L'historique d'itinéraire horodaté constitue une preuve exploitable auprès de votre assureur et dans une plainte. Certains assureurs appliquent une réduction de prime sur véhicule tracé.",
      },
    ],
    recommendedProducts: ["tracker-coupe-moteur", "tracker-obd", "tracker-mini"],
    keywords: [
      "traceur gps voiture",
      "tracker gps voiture",
      "antivol gps voiture",
      "balise gps voiture",
      "gps voiture temps réel",
      "localiser sa voiture volée",
    ],
    stat: { value: "1 vol", label: "toutes les 4 minutes en France" },
    faq: [
      {
        question: "Un traceur GPS peut-il être installé sur n'importe quelle voiture ?",
        answer:
          "Oui. Le tracker OBD se branche sur la prise diagnostic présente sur tous les véhicules depuis 2001. Le tracker aimanté ne demande aucun branchement et convient donc aussi aux modèles anciens ou de collection. Le tracker coupe-moteur se câble sur tout véhicule, quel que soit l'âge.",
      },
      {
        question: "La police accepte-t-elle les données GPS pour retrouver un véhicule volé ?",
        answer:
          "Les forces de l'ordre exploitent régulièrement les positions transmises par un propriétaire lors d'un dépôt de plainte pour vol. Vous devez déposer plainte, puis communiquer la position en temps réel : l'intervention est décidée par les services compétents, jamais par vous-même. Ne tentez jamais de récupérer un véhicule par vos propres moyens.",
      },
      {
        question: "Combien coûte le suivi GPS d'une voiture par mois ?",
        answer:
          "Le boîtier est un achat unique à partir de 79 €. L'abonnement à la plateforme et à la carte SIM démarre à 9,90 € par mois sans engagement, incluant l'application, les alertes illimitées et l'historique.",
      },
    ],
  },
  {
    slug: "moto",
    label: "Moto & Scooter",
    plural: "motos",
    possessive: "votre moto",
    h1: "Traceur GPS moto et scooter — le vol le plus fréquent, la parade la plus efficace",
    metaTitle: "Traceur GPS Moto & Scooter — Antivol Discret",
    metaDescription:
      "Tracker GPS moto : boîtier miniature invisible, alerte de mouvement, suivi temps réel. Protégez votre deux-roues contre le vol. Sans engagement, garantie 3 ans.",
    intro:
      "Les deux-roues représentent la catégorie de véhicules la plus volée rapportée au parc en circulation. Une moto se charge en quelques secondes dans un utilitaire, antivol U compris. Le traceur GPS est le seul dispositif qui reste utile après le vol : il vous donne la position du garage ou du container où la machine a été déposée.",
    painPoints: [
      {
        title: "Le vol par enlèvement",
        body: "Deux personnes, un utilitaire, quinze secondes. L'antivol mécanique ne ralentit pas un enlèvement à la main. Aucune alarme sonore ne dissuade dans un parking souterrain.",
      },
      {
        title: "Le stockage avant revente",
        body: "Les machines volées sont stockées quelques jours dans un local le temps d'être démontées ou expédiées. C'est précisément la fenêtre où un traceur permet une intervention.",
      },
      {
        title: "L'assurance qui refuse",
        body: "Sans élément matériel, une déclaration de vol de deux-roues est fréquemment contestée ou indemnisée à la valeur argus la plus basse.",
      },
    ],
    benefits: [
      {
        title: "Boîtier miniature indétectable",
        body: "Le format compact se dissimule sous la selle, dans le carénage ou dans le coffre. Aucun témoin lumineux, aucun bruit, rien à repérer lors d'un démontage rapide.",
      },
      {
        title: "Alarme de mouvement au degré près",
        body: "Le capteur détecte le moindre basculement de la machine. Une moto qu'on soulève déclenche l'alerte avant même d'avoir quitté sa place.",
      },
      {
        title: "Autonomie longue durée",
        body: "Jusqu'à 30 jours sur le modèle aimanté, ce qui couvre l'hivernage complet d'une machine remisée en box ou en garage collectif.",
      },
    ],
    recommendedProducts: ["tracker-mini", "tracker-aimante", "tracker-coupe-moteur"],
    keywords: [
      "traceur gps moto",
      "tracker gps scooter",
      "antivol gps moto",
      "balise gps moto discrète",
      "gps moto volée",
      "traceur gps deux roues",
    ],
    stat: { value: "3×", label: "plus de vols qu'en voiture, à parc égal" },
    faq: [
      {
        question: "Où cacher un traceur GPS sur une moto ?",
        answer:
          "Les emplacements les plus sûrs sont sous la selle dans la mousse, dans le carénage latéral, sous le garde-boue arrière ou dans le tube de cadre selon les modèles. Évitez le top-case et la sacoche, premiers endroits fouillés. Nos techniciens réalisent la pose sur rendez-vous et varient systématiquement les emplacements.",
      },
      {
        question: "Le traceur résiste-t-il à la pluie et aux vibrations ?",
        answer:
          "Oui. Les boîtiers sont certifiés IP67 (immersion temporaire) et testés en vibration. Une moto utilisée quotidiennement, y compris en hiver et sur route dégradée, n'affecte pas le fonctionnement du dispositif.",
      },
      {
        question: "Que faire dès que je reçois une alerte de vol ?",
        answer:
          "Appelez immédiatement le 17 et déposez plainte. Communiquez la position transmise par l'application aux forces de l'ordre et laissez-les intervenir. Ne vous rendez jamais seul sur place : les réseaux organisés autour du vol de deux-roues sont dangereux.",
      },
    ],
  },
  {
    slug: "camion",
    label: "Camion & Poids lourd",
    plural: "camions",
    possessive: "vos camions",
    h1: "Traceur GPS camion et poids lourd — sécurisez le véhicule et la marchandise",
    metaTitle: "Traceur GPS Camion & Poids Lourd — Suivi de Flotte",
    metaDescription:
      "GPS pour camion et poids lourd : suivi temps réel, temps de conduite, alerte de sortie de zone, protection du fret. Déploiement sur toute la France.",
    intro:
      "Sur un poids lourd, la valeur à protéger dépasse largement celle du véhicule : le fret transporté peut représenter plusieurs dizaines de milliers d'euros. Le traceur GPS sécurise l'ensemble, documente les temps de conduite et de repos, et fournit à vos clients des heures d'arrivée fiables sans passer un appel.",
    painPoints: [
      {
        title: "Le vol de fret sur aire de repos",
        body: "Les bâchés stationnés la nuit sur aires non sécurisées sont ciblés pour leur contenu. La perte porte sur la marchandise, la franchise et la relation client.",
      },
      {
        title: "L'absence de visibilité sur la tournée",
        body: "Sans données, la seule source d'information est l'appel au conducteur. Impossible de justifier un retard auprès d'un client ou de constater une dérive d'itinéraire.",
      },
      {
        title: "Les litiges d'heures de livraison",
        body: "Un client conteste une heure d'arrivée, une pénalité tombe. Sans horodatage indépendant, la discussion se règle au détriment du transporteur.",
      },
    ],
    benefits: [
      {
        title: "Preuve d'arrivée et de départ horodatée",
        body: "Chaque entrée et sortie de site client est enregistrée automatiquement. Le rapport se génère en un clic et clôt tout litige de pénalité.",
      },
      {
        title: "Suivi des temps de conduite",
        body: "Les périodes de roulage et d'arrêt sont consolidées par véhicule et par conducteur, en appui du chronotachygraphe pour votre gestion interne.",
      },
      {
        title: "Optimisation carburant",
        body: "Excès de vitesse, ralentis prolongés et kilomètres hors mission deviennent visibles. La réduction constatée sur le poste carburant amortit l'équipement en quelques mois.",
      },
    ],
    recommendedProducts: ["tracker-coupe-moteur", "tracker-obd", "tracker-aimante"],
    keywords: [
      "traceur gps camion",
      "gps poids lourd",
      "suivi gps flotte camions",
      "geolocalisation camion entreprise",
      "tracker gps semi remorque",
      "gps transport routier",
    ],
    stat: { value: "3 à 6 mois", label: "de retour sur investissement constaté" },
    faq: [
      {
        question: "Le GPS remplace-t-il le chronotachygraphe ?",
        answer:
          "Non. Le chronotachygraphe reste l'équipement légal obligatoire pour le contrôle des temps de conduite. Le traceur GPS est un outil de gestion complémentaire : il vous donne en temps réel une visibilité que le tachygraphe ne restitue qu'a posteriori.",
      },
      {
        question: "Peut-on équiper une remorque non motorisée ?",
        answer:
          "Oui, avec le tracker aimanté qui ne nécessite aucune alimentation. C'est la configuration standard pour suivre des semi-remorques, bennes, porte-engins ou conteneurs qui circulent entre plusieurs tracteurs.",
      },
      {
        question: "Faut-il informer les conducteurs salariés ?",
        answer:
          "Oui, c'est une obligation légale. Les salariés et les représentants du personnel doivent être informés individuellement et collectivement de la finalité du dispositif, des données collectées et de leur durée de conservation. Le traitement doit figurer au registre RGPD de l'entreprise. Nous fournissons un modèle de note d'information avec chaque déploiement professionnel.",
      },
    ],
  },
  {
    slug: "taxi-vtc",
    label: "Taxi & VTC",
    plural: "taxis et VTC",
    possessive: "votre véhicule",
    h1: "Traceur GPS taxi et VTC — protégez votre outil de travail",
    metaTitle: "Traceur GPS Taxi & VTC — Sécurité et Gestion",
    metaDescription:
      "GPS pour taxi et VTC : suivi temps réel, coupe-moteur antivol, historique des courses. Protégez le véhicule qui fait votre chiffre d'affaires.",
    intro:
      "Pour un chauffeur de taxi ou de VTC, le véhicule n'est pas un bien : c'est l'outil de production. Une immobilisation de quelques jours après un vol, c'est un chiffre d'affaires à zéro et des échéances qui continuent de courir. Le traceur GPS protège l'actif et, pour les exploitants de plusieurs voitures, structure la gestion des véhicules confiés à des chauffeurs.",
    painPoints: [
      {
        title: "L'immobilisation qui coupe les revenus",
        body: "Vol, disparition ou litige sur un véhicule loué : chaque jour sans voiture est un jour sans recette, avec un loyer ou une traite qui tombe quand même.",
      },
      {
        title: "Le véhicule confié à un chauffeur",
        body: "Location de licence, gérance, chauffeur salarié : le véhicule circule sans que l'exploitant ait la moindre visibilité sur l'usage réel hors service.",
      },
      {
        title: "La contestation de course",
        body: "Un client conteste un trajet, une plateforme réclame un justificatif. Sans trace indépendante de l'itinéraire, la charge de la preuve pèse sur le chauffeur.",
      },
    ],
    benefits: [
      {
        title: "Historique d'itinéraire opposable",
        body: "Chaque trajet est enregistré avec horodatage, distance et vitesse. Un litige client ou plateforme se règle en produisant le tracé exact.",
      },
      {
        title: "Coupe-moteur en cas de non-restitution",
        body: "Sur un véhicule loué ou confié qui n'est pas rendu, l'immobilisation à distance protège votre actif sans intervention physique.",
      },
      {
        title: "Suivi multi-véhicules",
        body: "Un exploitant voit l'ensemble de ses voitures sur une même carte, avec le statut de chacune. L'abonnement est dégressif dès le deuxième véhicule.",
      },
    ],
    recommendedProducts: ["tracker-coupe-moteur", "tracker-obd", "tracker-mini"],
    keywords: [
      "traceur gps taxi",
      "gps vtc",
      "antivol gps taxi",
      "geolocalisation véhicule vtc",
      "gps flotte vtc",
      "tracker gps chauffeur",
    ],
    stat: { value: "0 jour", label: "d'activité perdue avec une localisation immédiate" },
    faq: [
      {
        question: "Puis-je géolocaliser un chauffeur salarié ?",
        answer:
          "Vous pouvez géolocaliser le véhicule pendant le temps de travail, à condition d'informer le salarié, de déclarer le traitement au registre RGPD et de limiter la finalité (sécurité du véhicule, gestion de l'activité). La géolocalisation en dehors du temps de travail est interdite : le dispositif doit pouvoir être désactivé, ou les données de cette période ne pas être exploitées.",
      },
      {
        question: "Le GPS interfère-t-il avec le taximètre ou l'application VTC ?",
        answer:
          "Non. Le traceur fonctionne sur son propre canal, avec sa carte SIM dédiée. Il n'a aucune interaction avec le taximètre, le terminal de paiement ou l'application de la plateforme.",
      },
      {
        question: "L'équipement est-il déductible ?",
        answer:
          "L'achat du boîtier et l'abonnement mensuel constituent des charges d'exploitation liées à l'activité, déductibles dans les conditions de droit commun. Conservez la facture, elle mentionne le véhicule concerné.",
      },
    ],
  },
  {
    slug: "bus-autocar",
    label: "Bus & Autocar",
    plural: "bus et autocars",
    possessive: "vos autocars",
    h1: "Traceur GPS bus et autocar — sécurité des passagers et ponctualité",
    metaTitle: "Traceur GPS Bus & Autocar — Suivi de Ligne",
    metaDescription:
      "GPS pour bus et autocar : position temps réel, respect des itinéraires, information voyageurs, sécurité des passagers. Solution pour transporteurs.",
    intro:
      "Transporter des personnes engage une responsabilité qui ne se délègue pas. Le traceur GPS donne à l'exploitant une vision permanente de sa flotte : position de chaque véhicule sur sa ligne, respect des itinéraires, avance ou retard sur horaire, et localisation immédiate en cas d'incident ou d'accident.",
    painPoints: [
      {
        title: "L'incident sans localisation",
        body: "Panne, accident ou malaise à bord : la première question posée par les secours est la position exacte. Une réponse approximative coûte des minutes décisives.",
      },
      {
        title: "Les retards non expliqués",
        body: "Un service en retard sans donnée, ce sont des réclamations voyageurs et des pénalités d'autorité organisatrice impossibles à contester.",
      },
      {
        title: "Les écarts d'itinéraire",
        body: "Un véhicule qui s'écarte du parcours prévu, en transport scolaire notamment, doit être détecté immédiatement, pas au débriefing du soir.",
      },
    ],
    benefits: [
      {
        title: "Position exacte pour les secours",
        body: "En cas d'incident, la position au mètre près est communiquée aux services d'urgence sans dépendre de la capacité du conducteur à se situer.",
      },
      {
        title: "Alerte de sortie d'itinéraire",
        body: "Le geofencing sur le tracé de ligne déclenche une alerte dès qu'un véhicule quitte le corridor défini. Indispensable en transport scolaire.",
      },
      {
        title: "Données de ponctualité",
        body: "Le respect des horaires est mesuré objectivement, arrêt par arrêt. Les rapports alimentent vos comptes-rendus d'exploitation.",
      },
    ],
    recommendedProducts: ["tracker-obd", "tracker-coupe-moteur", "tracker-aimante"],
    keywords: [
      "traceur gps bus",
      "gps autocar",
      "geolocalisation transport scolaire",
      "suivi gps flotte autocars",
      "gps transport de personnes",
    ],
    stat: { value: "< 1 min", label: "pour transmettre une position aux secours" },
    faq: [
      {
        question: "Le dispositif est-il compatible avec le transport scolaire ?",
        answer:
          "Oui, et c'est l'un de nos cas d'usage les plus fréquents. Le geofencing sur le tracé de ligne et les alertes de sortie de zone répondent directement aux exigences de sécurité des autorités organisatrices et rassurent les familles.",
      },
      {
        question: "Peut-on informer les voyageurs de la position du véhicule ?",
        answer:
          "La plateforme expose une API qui permet d'alimenter votre propre système d'information voyageurs. Nous accompagnons l'intégration technique dans le cadre des déploiements de flotte.",
      },
      {
        question: "Combien de véhicules peut-on suivre sur un même compte ?",
        answer:
          "Il n'y a pas de limite technique. La plateforme gère des flottes de plusieurs centaines de véhicules avec regroupement par ligne, par dépôt ou par exploitant, et gestion des droits par utilisateur.",
      },
    ],
  },
  {
    slug: "flotte-entreprise",
    label: "Flotte d'entreprise",
    plural: "véhicules de société",
    possessive: "votre flotte",
    h1: "Géolocalisation de flotte d'entreprise — reprenez le contrôle de vos véhicules",
    metaTitle: "Géolocalisation Flotte Entreprise — GPS Professionnel",
    metaDescription:
      "Suivi GPS de flotte : position temps réel de tous vos véhicules, rapports d'activité, réduction des coûts carburant. Déploiement France entière, conforme RGPD.",
    intro:
      "Une flotte non tracée coûte entre 10 et 20 % de plus qu'une flotte équipée : kilomètres hors mission, tournées mal optimisées, temps d'intervention surestimés, carburant non maîtrisé. La géolocalisation ne sert pas à surveiller des salariés — elle sert à voir enfin ce que vous payez et à décider sur des chiffres.",
    painPoints: [
      {
        title: "Les kilomètres invisibles",
        body: "Détours personnels, trajets hors horaires, véhicules utilisés le week-end : sans données, ce poste ne se mesure pas et ne se discute pas.",
      },
      {
        title: "Les appels de coordination",
        body: "Une dizaine d'appels par jour pour savoir où est l'équipe, quand elle arrive, si l'intervention est terminée. Du temps administratif pur.",
      },
      {
        title: "Les interventions non facturables",
        body: "Sans horodatage d'arrivée et de départ sur site, une partie du temps réellement passé chez le client n'est jamais facturée.",
      },
    ],
    benefits: [
      {
        title: "Une carte, toute la flotte",
        body: "Position de chaque véhicule en temps réel, statut, dernier arrêt. Vous répondez à un client sur l'heure d'arrivée sans passer un seul appel.",
      },
      {
        title: "Rapports d'activité automatiques",
        body: "Kilométrages, temps de présence par site, temps de roulage, dépassements de vitesse. Exportables pour la paie, la facturation ou l'analyse de rentabilité.",
      },
      {
        title: "Conformité RGPD accompagnée",
        body: "Modèle de note d'information aux salariés, mention au registre des traitements, paramétrage des plages hors temps de travail. Nous livrons le cadre juridique avec le matériel.",
      },
    ],
    recommendedProducts: ["tracker-obd", "tracker-coupe-moteur", "tracker-aimante"],
    keywords: [
      "geolocalisation flotte entreprise",
      "gps véhicule société",
      "suivi flotte automobile",
      "logiciel gestion de flotte gps",
      "tracker gps entreprise",
      "boitier gps professionnel",
    ],
    stat: { value: "10 à 20 %", label: "d'économies constatées sur les coûts de flotte" },
    faq: [
      {
        question: "La géolocalisation des véhicules de société est-elle légale ?",
        answer:
          "Oui, sous conditions strictes. Vous devez : informer individuellement chaque salarié concerné, consulter le CSE lorsqu'il existe, inscrire le traitement au registre RGPD, limiter la collecte à une finalité déterminée, et ne pas géolocaliser en dehors du temps de travail. Un salarié doit pouvoir désactiver le suivi pendant ses pauses et trajets personnels. Nous fournissons la documentation type.",
      },
      {
        question: "Combien de temps prend le déploiement sur 20 véhicules ?",
        answer:
          "Avec des boîtiers OBD, le déploiement est immédiat : chaque véhicule est opérationnel en dix secondes, sans immobilisation. Pour des boîtiers câblés avec coupe-moteur, comptez environ 45 minutes par véhicule ; nos techniciens se déplacent sur votre site partout en France.",
      },
      {
        question: "Le prix baisse-t-il avec le nombre de véhicules ?",
        answer:
          "Oui. L'abonnement est dégressif par palier dès le troisième véhicule, et un tarif spécifique s'applique au-delà de vingt. Contactez-nous pour une proposition chiffrée sur votre parc réel.",
      },
    ],
  },
  {
    slug: "engin-chantier",
    label: "Engin de chantier",
    plural: "engins de chantier",
    possessive: "vos engins",
    h1: "Traceur GPS pour engins de chantier et matériel BTP",
    metaTitle: "Traceur GPS Engin de Chantier — Antivol BTP",
    metaDescription:
      "GPS pour mini-pelle, nacelle, compacteur et matériel BTP : antivol autonome sans câblage, alerte de déplacement, suivi des heures. Garantie 3 ans.",
    intro:
      "Le matériel de chantier est volé parce qu'il est facile à charger, difficile à identifier et impossible à retracer sans dispositif. Une mini-pelle disparue un vendredi soir est démontée ou exportée avant le lundi. Le traceur aimanté, sans câblage ni alimentation, se pose sur n'importe quel engin en trente secondes.",
    painPoints: [
      {
        title: "Le vol de week-end",
        body: "Chantier fermé le vendredi soir, constat le lundi matin. Quarante-huit heures d'avance pour le voleur, aucune chance de retrouver l'engin.",
      },
      {
        title: "Le matériel qui ne revient pas",
        body: "Engin prêté entre chantiers ou loué à un sous-traitant, dont plus personne ne sait où il se trouve exactement au moment où on en a besoin.",
      },
      {
        title: "Les heures machine approximatives",
        body: "Facturation à l'heure d'utilisation sans relevé fiable, entretiens planifiés au jugé, garanties constructeur mal suivies.",
      },
    ],
    benefits: [
      {
        title: "Pose sans câblage ni batterie",
        body: "Le boîtier aimanté se fixe sur toute surface métallique, y compris sur un engin non électrifié ou une remorque porte-engin. Trente secondes, aucun outil.",
      },
      {
        title: "Alerte hors horaires de chantier",
        body: "Définissez la zone du chantier et les plages d'activité. Tout mouvement en dehors déclenche une notification immédiate, la nuit comme le week-end.",
      },
      {
        title: "Résistance aux conditions de chantier",
        body: "Boîtier étanche IP67, résistant à la poussière, aux projections, aux vibrations et aux écarts de température. Conçu pour l'usage extérieur permanent.",
      },
    ],
    recommendedProducts: ["tracker-aimante", "tracker-coupe-moteur", "tracker-obd"],
    keywords: [
      "traceur gps engin de chantier",
      "gps antivol btp",
      "balise gps mini pelle",
      "tracker gps matériel chantier",
      "geolocalisation engin tp",
    ],
    stat: { value: "48 h", label: "d'avance prise par un voleur de week-end" },
    faq: [
      {
        question: "Comment fixer un traceur sur un engin qui vibre beaucoup ?",
        answer:
          "Les aimants néodyme haute puissance résistent aux vibrations d'un engin en travail. Nous recommandons une pose sur une surface plane du châssis, à l'abri des chocs directs et des points de graissage, plutôt que sur un élément mobile ou sur le godet.",
      },
      {
        question: "Faut-il une autonomie particulière pour du matériel remisé ?",
        answer:
          "Le tracker aimanté offre jusqu'à 30 jours en usage courant et davantage en veille prolongée sur un engin immobile. Pour un parc de matériel remisé plusieurs mois, prévoyez une tournée de recharge ou optez pour un modèle câblé sur les engins équipés d'une batterie.",
      },
      {
        question: "Peut-on suivre plusieurs engins depuis un même compte ?",
        answer:
          "Oui. Tous vos matériels apparaissent sur une carte unique, avec regroupement possible par chantier ou par agence. C'est la configuration standard des entreprises de travaux publics et des loueurs de matériel.",
      },
    ],
  },
  {
    slug: "utilitaire",
    label: "Utilitaire & Fourgon",
    plural: "utilitaires",
    possessive: "vos utilitaires",
    h1: "Traceur GPS utilitaire et fourgon — protégez le véhicule et l'outillage",
    metaTitle: "Traceur GPS Utilitaire & Fourgon — Antivol Artisan",
    metaDescription:
      "GPS pour fourgon et utilitaire d'artisan : antivol, suivi des tournées, protection de l'outillage embarqué. Installation partout en France.",
    intro:
      "Pour un artisan, le fourgon vaut moins que ce qu'il contient. Un vol d'utilitaire, c'est le véhicule, l'outillage professionnel et parfois les matériaux d'un chantier en cours — soit plusieurs semaines d'activité arrêtées. Le traceur GPS raccourcit la fenêtre de récupération de plusieurs jours à quelques heures.",
    painPoints: [
      {
        title: "L'outillage embarqué",
        body: "Un fourgon d'artisan complet représente couramment 15 000 à 40 000 € d'outillage. C'est ce contenu, plus que le véhicule, qui est visé.",
      },
      {
        title: "Le stationnement de nuit",
        body: "Véhicule garé en rue devant le domicile, sans surveillance, chargé. Le vol se produit majoritairement entre 2 h et 5 h du matin.",
      },
      {
        title: "Les tournées non optimisées",
        body: "Plusieurs interventions par jour sans visibilité sur les temps réels de trajet et de présence : les devis sont estimés au doigt mouillé.",
      },
    ],
    benefits: [
      {
        title: "Alerte de mouvement nocturne",
        body: "Plage horaire définie une fois pour toutes : tout démarrage entre 20 h et 6 h vous réveille avec une notification et la position en direct.",
      },
      {
        title: "Reprise rapide d'activité",
        body: "Localiser le véhicule dans les heures qui suivent le vol, c'est récupérer l'outillage avant sa dispersion et reprendre les chantiers sans tout racheter.",
      },
      {
        title: "Temps réels par intervention",
        body: "L'horodatage d'arrivée et de départ sur chaque site permet de chiffrer les devis suivants sur des durées constatées, pas estimées.",
      },
    ],
    recommendedProducts: ["tracker-obd", "tracker-coupe-moteur", "tracker-aimante"],
    keywords: [
      "traceur gps utilitaire",
      "gps fourgon artisan",
      "antivol gps camionnette",
      "tracker gps véhicule utilitaire",
      "geolocalisation fourgon entreprise",
    ],
    stat: { value: "15 à 40 k€", label: "d'outillage dans un fourgon d'artisan" },
    faq: [
      {
        question: "Mon assurance couvre-t-elle l'outillage volé dans le fourgon ?",
        answer:
          "Cela dépend de votre contrat et des clauses de garde. De nombreux contrats excluent ou plafonnent fortement l'outillage laissé dans un véhicule la nuit. Vérifiez vos conditions particulières : c'est précisément ce qui rend la récupération rapide du véhicule décisive.",
      },
      {
        question: "Quel modèle choisir pour un fourgon récent ?",
        answer:
          "Le tracker OBD pour un déploiement immédiat sans immobilisation, ou le coupe-moteur si vous voulez pouvoir bloquer le redémarrage à distance. Sur un parc mixte, les deux se pilotent depuis le même compte.",
      },
      {
        question: "Puis-je équiper plusieurs fourgons progressivement ?",
        answer:
          "Oui. Vous ajoutez des véhicules à votre compte au fil de vos besoins, sans engagement de durée ni de volume. La dégressivité tarifaire s'applique automatiquement dès que vous franchissez un palier.",
      },
    ],
  },
  {
    slug: "remorque",
    label: "Remorque & Van",
    plural: "remorques",
    possessive: "votre remorque",
    h1: "Traceur GPS remorque, van et porte-engin",
    metaTitle: "Traceur GPS Remorque & Van — Antivol Sans Câblage",
    metaDescription:
      "Tracker GPS pour remorque, van à chevaux et porte-engin : boîtier autonome aimanté, 30 jours d'autonomie, alerte d'attelage. Sans engagement.",
    intro:
      "Une remorque n'a ni moteur, ni batterie, ni antivol électronique. Elle s'attelle en dix secondes et disparaît sans que rien ne se déclenche. Le traceur aimanté autonome est la seule protection réaliste sur ce type de matériel : il se pose sans alimentation et signale tout déplacement.",
    painPoints: [
      {
        title: "L'attelage express",
        body: "Une remorque garée devant un domicile ou sur un parking s'attelle en quelques secondes. Aucune alarme, aucun bruit, aucun témoin.",
      },
      {
        title: "Le van à chevaux",
        body: "Matériel de forte valeur, souvent stationné en extérieur sur un site isolé, parfois avec l'animal ou l'équipement à l'intérieur.",
      },
      {
        title: "Le porte-engin qui circule",
        body: "Remorque partagée entre plusieurs tracteurs et plusieurs chantiers, dont la position réelle n'est jamais connue de l'exploitation.",
      },
    ],
    benefits: [
      {
        title: "Aucune alimentation nécessaire",
        body: "Le boîtier aimanté fonctionne sur sa propre batterie. Rien à câbler sur un matériel qui n'a pas de circuit électrique exploitable.",
      },
      {
        title: "Alerte de déplacement immédiate",
        body: "Dès que la remorque bouge hors de sa zone habituelle, vous êtes notifié avec sa position en direct et son itinéraire en cours.",
      },
      {
        title: "Suivi de la remorque, pas du tracteur",
        body: "Vous savez où se trouve le matériel lui-même, indépendamment du véhicule qui le tracte à un instant donné.",
      },
    ],
    recommendedProducts: ["tracker-aimante", "tracker-mini"],
    keywords: [
      "traceur gps remorque",
      "gps van chevaux",
      "antivol gps porte engin",
      "balise gps remorque sans alimentation",
      "tracker gps caravane",
    ],
    stat: { value: "10 s", label: "suffisent pour atteler et partir" },
    faq: [
      {
        question: "Où poser le traceur sur une remorque ?",
        answer:
          "Sur le châssis, à l'intérieur d'un longeron ou sous le plancher, à l'abri des regards et des projections directes. Évitez le timon et les zones visibles au premier coup d'œil. Les aimants tiennent sur toute surface métallique nue ou peinte.",
      },
      {
        question: "Faut-il recharger le boîtier régulièrement ?",
        answer:
          "Le modèle aimanté offre jusqu'à 30 jours en usage courant, davantage sur un matériel immobile en veille. L'application vous alerte sous 20 % de batterie : une recharge par mois environ suffit pour un usage intensif.",
      },
      {
        question: "Cela fonctionne-t-il aussi sur une caravane ou un van à chevaux ?",
        answer:
          "Oui, le principe est identique dès lors qu'il existe une surface métallique pour la fixation. C'est un usage courant chez les propriétaires de vans à chevaux et les centres équestres.",
      },
    ],
  },
  {
    slug: "bateau",
    label: "Bateau & Jet-ski",
    plural: "bateaux",
    possessive: "votre bateau",
    h1: "Traceur GPS bateau et jet-ski — suivi au mouillage et en navigation",
    metaTitle: "Traceur GPS Bateau & Jet-ski — Antivol Nautique",
    metaDescription:
      "Tracker GPS pour bateau, semi-rigide et jet-ski : alerte de dérive au mouillage, antivol sur remorque, suivi temps réel. Boîtier étanche IP67.",
    intro:
      "Un bateau se vole rarement par la mer : il part sur remorque, de nuit, depuis un port à sec ou un parking. Le traceur GPS couvre les deux risques — le vol par la route et la dérive au mouillage — avec un boîtier étanche qui supporte l'environnement marin.",
    painPoints: [
      {
        title: "Le vol sur remorque",
        body: "Bateau stocké à terre ou sur son ber, attelé et emmené en quelques minutes. Le mode opératoire le plus fréquent, et le plus rapide.",
      },
      {
        title: "La dérive au mouillage",
        body: "Un mouillage qui chasse pendant la nuit ou un coup de vent, et le bateau part sans que personne à bord ne s'en aperçoive à temps.",
      },
      {
        title: "Le bateau confié",
        body: "Prêt à un proche, mise en location saisonnière ou gardiennage : aucune visibilité sur l'usage réel ni sur la zone de navigation.",
      },
    ],
    benefits: [
      {
        title: "Alerte de zone au mouillage",
        body: "Définissez un rayon autour du point de mouillage. Toute sortie de ce cercle déclenche une notification, y compris à 3 h du matin.",
      },
      {
        title: "Boîtier étanche IP67",
        body: "Conçu pour l'exposition permanente aux embruns, à l'humidité et au soleil. Fixation aimantée ou pose libre dans un coffre étanche.",
      },
      {
        title: "Couverture terrestre pour le vol",
        body: "Si le bateau part sur remorque, le suivi routier reste actif sur tout le réseau : vous suivez le trajet comme pour un véhicule.",
      },
    ],
    recommendedProducts: ["tracker-aimante", "tracker-mini"],
    keywords: [
      "traceur gps bateau",
      "gps antivol jet ski",
      "balise gps bateau mouillage",
      "tracker gps semi rigide",
      "geolocalisation bateau vol",
    ],
    stat: { value: "IP67", label: "étanchéité certifiée pour l'usage marin" },
    faq: [
      {
        question: "Le traceur fonctionne-t-il en pleine mer ?",
        answer:
          "Le positionnement GPS fonctionne partout, mais la transmission des données passe par le réseau cellulaire : elle s'interrompt donc au-delà de la couverture côtière, généralement quelques milles au large. Les positions sont mémorisées et transmises dès le retour dans la couverture. Un traceur GPS ne remplace en aucun cas une balise de détresse.",
      },
      {
        question: "Peut-on l'utiliser sur un jet-ski ?",
        answer:
          "Oui, c'est même un usage privilégié : le jet-ski est très exposé au vol sur remorque et dispose rarement d'un antivol électronique. Le format compact se dissimule dans le coffre avant ou sous la coque de selle.",
      },
      {
        question: "Le sel et l'humidité abîment-ils le boîtier ?",
        answer:
          "Le boîtier est certifié IP67 et résiste à l'immersion temporaire. Comme pour tout matériel embarqué en milieu marin, un rinçage à l'eau douce en fin de saison prolonge sa durée de vie. La garantie est de 3 ans.",
      },
    ],
  },
  {
    slug: "camping-car",
    label: "Camping-car",
    plural: "camping-cars",
    possessive: "votre camping-car",
    h1: "Traceur GPS camping-car — protégez votre véhicule de loisirs",
    metaTitle: "Traceur GPS Camping-car — Antivol & Suivi Europe",
    metaDescription:
      "Tracker GPS camping-car : antivol pendant le remisage hivernal, suivi en voyage, couverture Europe et 150 pays sans surcoût. Garantie 3 ans.",
    intro:
      "Un camping-car passe l'essentiel de l'année immobilisé sur une aire de remisage ou un terrain, souvent loin du domicile de son propriétaire. C'est exactement le profil de bien que ciblent les réseaux organisés : forte valeur, longue période sans surveillance, revente à l'étranger. Le traceur GPS couvre le remisage comme le voyage.",
    painPoints: [
      {
        title: "Le remisage hivernal",
        body: "Six à huit mois sur une aire ou un terrain, sans passage régulier du propriétaire. Un vol peut ne se découvrir que des semaines plus tard.",
      },
      {
        title: "L'export rapide",
        body: "Les camping-cars volés quittent le territoire en quelques heures. Sans suivi, la fenêtre d'action est fermée avant même le dépôt de plainte.",
      },
      {
        title: "Le voyage à l'étranger",
        body: "Stationnements successifs dans des pays différents, souvent sur des aires non gardées, avec le véhicule chargé de tout l'équipement du voyage.",
      },
    ],
    benefits: [
      {
        title: "Surveillance pendant le remisage",
        body: "Alerte de mouvement active en permanence sur un véhicule censé ne pas bouger. Vous êtes prévenu dans la minute, pas au printemps.",
      },
      {
        title: "Couverture 150 pays incluse",
        body: "La carte SIM multi-opérateurs fonctionne en Europe et au-delà sans frais de roaming supplémentaires sur nos abonnements standard.",
      },
      {
        title: "Historique complet du voyage",
        body: "Au-delà de la sécurité, l'application conserve l'intégralité de vos itinéraires et étapes — un carnet de route automatique.",
      },
    ],
    recommendedProducts: ["tracker-coupe-moteur", "tracker-obd", "tracker-aimante"],
    keywords: [
      "traceur gps camping car",
      "antivol gps camping car",
      "balise gps van aménagé",
      "gps camping car volé",
      "tracker gps caravane",
    ],
    stat: { value: "150 pays", label: "couverts sans frais de roaming" },
    faq: [
      {
        question: "Le traceur fonctionne-t-il partout en Europe ?",
        answer:
          "Oui. La carte SIM multi-opérateurs bascule automatiquement sur le meilleur réseau disponible dans chaque pays. La couverture s'étend à plus de 150 pays, sans frais supplémentaire sur nos abonnements standard.",
      },
      {
        question: "Quel modèle pour un véhicule remisé plusieurs mois ?",
        answer:
          "Privilégiez un modèle alimenté par le véhicule — coupe-moteur ou OBD — pour ne pas dépendre d'une recharge. Sur un camping-car dont la batterie porteur est débranchée pendant l'hivernage, le tracker aimanté prend le relais, avec une recharge mensuelle.",
      },
      {
        question: "Un traceur fait-il baisser ma prime d'assurance ?",
        answer:
          "Plusieurs assureurs appliquent une réduction ou lèvent une exclusion de garantie vol sur un véhicule équipé d'un dispositif de géolocalisation. Communiquez la référence du boîtier à votre assureur : la démarche est rapide et souvent rentable.",
      },
    ],
  },
  {
    slug: "location-vehicules",
    label: "Location de véhicules",
    plural: "véhicules de location",
    possessive: "votre parc de location",
    h1: "Traceur GPS pour loueurs de véhicules — sécurisez chaque location",
    metaTitle: "Traceur GPS Location de Véhicules — Non-restitution",
    metaDescription:
      "GPS pour loueurs : localisation des véhicules loués, coupe-moteur en cas de non-restitution, contrôle du kilométrage et des zones. Conforme RGPD.",
    intro:
      "Louer un véhicule, c'est confier un actif de plusieurs dizaines de milliers d'euros à un inconnu, sur la foi d'une pièce d'identité et d'une empreinte bancaire. La non-restitution et l'usage hors conditions contractuelles sont les deux risques majeurs du métier. Le traceur GPS les couvre l'un et l'autre.",
    painPoints: [
      {
        title: "La non-restitution",
        body: "Véhicule loué qui ne revient pas à échéance, locataire injoignable. Sans localisation, la seule voie est la plainte et l'attente.",
      },
      {
        title: "L'usage hors contrat",
        body: "Sortie du territoire non autorisée, kilométrage largement dépassé, usage commercial d'un véhicule loué en tarif particulier.",
      },
      {
        title: "Le litige de restitution",
        body: "Contestation sur le kilométrage, l'heure de retour ou le lieu de restitution, sans élément objectif à opposer au client.",
      },
    ],
    benefits: [
      {
        title: "Immobilisation en cas de non-retour",
        body: "Le coupe-moteur à distance rend le véhicule inutilisable au prochain arrêt. Un levier décisif pour obtenir une restitution rapide, à utiliser dans le cadre prévu au contrat.",
      },
      {
        title: "Alerte de sortie de territoire",
        body: "Geofencing sur la zone autorisée au contrat : toute sortie déclenche une alerte immédiate, avant que le véhicule ne soit hors de portée.",
      },
      {
        title: "Kilométrage et horaires opposables",
        body: "Relevé automatique et horodaté à chaque location. Les litiges de restitution se règlent sur pièce, pas sur parole.",
      },
    ],
    recommendedProducts: ["tracker-coupe-moteur", "tracker-obd"],
    keywords: [
      "gps location de voiture",
      "traceur gps loueur véhicule",
      "coupe moteur véhicule loué",
      "geolocalisation flotte location",
      "gps non restitution véhicule",
    ],
    stat: { value: "Contrat", label: "l'information du locataire est obligatoire" },
    faq: [
      {
        question: "Ai-je le droit de géolocaliser un véhicule loué ?",
        answer:
          "Oui, à condition d'en informer clairement le locataire dans le contrat de location, avant la signature, en précisant la finalité (sécurité du véhicule, respect des conditions contractuelles) et la durée de conservation des données. Une géolocalisation dissimulée d'un client est illicite et vous expose à des sanctions. Nous fournissons une clause type.",
      },
      {
        question: "Puis-je couper le moteur d'un client qui n'a pas rendu le véhicule ?",
        answer:
          "L'immobilisation à distance doit être expressément prévue au contrat et rester proportionnée. Elle ne s'applique qu'au prochain arrêt du véhicule, jamais en roulant. En cas de non-restitution avérée, la démarche s'accompagne d'un dépôt de plainte. Consultez votre conseil juridique pour la rédaction de la clause.",
      },
      {
        question: "Le boîtier peut-il être retiré par le locataire ?",
        answer:
          "Le modèle câblé est installé hors de portée et son retrait demande du temps et des outils. Une alerte de débranchement immédiate vous prévient dans tous les cas, avec la dernière position connue.",
      },
    ],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
