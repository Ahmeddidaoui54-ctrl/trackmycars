export interface Section {
  h2: string;
  paras: string[];
  /** Liste optionnelle après les paragraphes */
  list?: { title?: string; body: string }[];
  /** Encadré d'avertissement ou de mise en garde */
  callout?: { tone: "warn" | "info"; title: string; body: string };
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Résumé affiché en tête d'article et sur la liste */
  standfirst: string;
  published: string;
  updated: string;
  readingMinutes: number;
  keywords: string[];
  sections: Section[];
  faq: { question: string; answer: string }[];
  /** Pages du site à mettre en avant en fin d'article */
  related: { label: string; href: string }[];
}

export const articles: Article[] = [
  {
    slug: "vehicule-vole-que-faire",
    title: "Véhicule volé : ce qu'il faut faire dans les six premières heures",
    metaTitle: "Véhicule volé, que faire ? Les 6 premières heures",
    metaDescription:
      "Votre véhicule a disparu. Voici l'ordre exact des démarches, ce qui se joue dans les premières heures, et ce qu'il ne faut surtout pas faire.",
    standfirst:
      "Quarante pour cent des voitures volées sont retrouvées, et un tiers le sont en moins d'une semaine. Ce que vous faites dans les six premières heures pèse lourd dans cette statistique.",
    published: "2026-08-30",
    updated: "2026-08-30",
    readingMinutes: 7,
    keywords: [
      "voiture volee que faire",
      "vehicule vole demarches",
      "retrouver voiture volee",
      "declaration vol vehicule",
      "plainte vol voiture",
      "assurance vol voiture delai",
    ],
    sections: [
      {
        h2: "Avant tout : vérifier que c'est bien un vol",
        paras: [
          "Cela paraît absurde quand on tourne autour d'une place vide, mais une part des disparitions n'en sont pas. Trois causes reviennent constamment : la mise en fourrière, le déplacement par un proche disposant d'un double des clés, et l'erreur de niveau dans un parking à étages.",
          "Un appel au service des objets trouvés ou au commissariat local permet de savoir en quelques minutes si le véhicule a été enlevé. La fourrière laisse rarement un avis sur place, et les frais courent dès l'enlèvement : mieux vaut le savoir tout de suite.",
        ],
      },
      {
        h2: "Heure zéro : appeler le 17 avant d'aller au commissariat",
        paras: [
          "L'ordre compte. Le signalement téléphonique au 17 permet une inscription immédiate du véhicule au fichier des véhicules volés, avant même le dépôt de plainte formel. C'est cette inscription qui permet à une patrouille de réagir sur une plaque lue au bord de la route, ou à un péage.",
          "Préparez, avant d'appeler : la plaque d'immatriculation, la marque, le modèle, la couleur, le numéro de série si vous l'avez, le lieu et le créneau horaire de la disparition, et tout signe distinctif — autocollant, jante abîmée, galerie de toit.",
        ],
        callout: {
          tone: "info",
          title: "Si votre véhicule est équipé d'un traceur",
          body: "Communiquez la position en direct aux forces de l'ordre pendant l'appel. C'est le seul moment où l'information a une valeur opérationnelle : passé quelques heures, le véhicule est souvent immobilisé dans un local ou déjà en transit.",
        },
      },
      {
        h2: "Ce qu'il ne faut surtout pas faire",
        paras: [
          "Se rendre soi-même à l'endroit indiqué par le traceur est la faute la plus fréquente, et la plus dangereuse. Les réseaux organisés autour du vol de véhicules ne sont pas des amateurs, et les lieux de stockage sont surveillés.",
        ],
        list: [
          {
            title: "Ne pas y aller seul",
            body: "Vous n'avez aucun pouvoir d'intervention, et vous compromettez l'enquête en cours. Transmettez la position, laissez les services compétents décider.",
          },
          {
            title: "Ne pas prévenir publiquement",
            body: "Un appel à témoins sur les réseaux sociaux alerte aussi les voleurs, qui abandonnent alors le véhicule ou le démontent plus vite.",
          },
          {
            title: "Ne pas attendre le lendemain pour la plainte",
            body: "Certains contrats d'assurance imposent un délai de déclaration de 48 heures. Un retard non justifié peut être opposé.",
          },
        ],
      },
      {
        h2: "Dans les deux heures : déposer plainte",
        paras: [
          "La plainte se dépose dans n'importe quel commissariat ou brigade de gendarmerie, pas nécessairement celui du lieu du vol. Le récépissé est le document que votre assureur exigera : sans lui, aucune indemnisation.",
          "Apportez la carte grise, votre pièce d'identité, l'attestation d'assurance, et les clés restantes. Ce dernier point compte plus qu'il n'y paraît : un assureur qui constate que toutes les clés ne sont pas présentées soupçonne une négligence, voire une fraude.",
        ],
      },
      {
        h2: "Dans les 24 heures : déclarer à l'assureur",
        paras: [
          "La plupart des contrats imposent une déclaration sous deux jours ouvrés. Faites-la par écrit, en joignant le récépissé de plainte, et conservez une trace de l'envoi.",
          "L'indemnisation intervient généralement au terme d'un délai de carence de trente jours, pendant lequel le véhicule peut encore être retrouvé. La valeur retenue est celle du marché au jour du vol, pas le prix d'achat — un point qui surprend souvent.",
        ],
      },
      {
        h2: "Les démarches que l'on oublie",
        paras: [
          "Deux formalités administratives passent régulièrement à la trappe et se rappellent au mauvais moment.",
        ],
        list: [
          {
            title: "Déclarer le vol sur le site de l'ANTS",
            body: "La déclaration en ligne bloque la carte grise et empêche toute revente frauduleuse du véhicule.",
          },
          {
            title: "Prévenir le loueur ou l'organisme de financement",
            body: "Sur un véhicule en leasing, en LOA ou en crédit, les mensualités continuent de courir tant que le dossier n'est pas ouvert auprès de l'organisme.",
          },
          {
            title: "Faire opposition sur le badge de télépéage",
            body: "Un badge resté dans le véhicule continue de facturer les passages.",
          },
        ],
      },
      {
        h2: "Pourquoi les six premières heures décident de tout",
        paras: [
          "Un véhicule volé suit presque toujours le même parcours : il est d'abord déplacé et laissé quelques heures dans un endroit banal — un parking, une rue résidentielle — pour vérifier qu'il n'est pas suivi. C'est le « refroidissement ». S'il ne se passe rien, il rejoint un local pour être démonté, ou un conteneur pour être exporté.",
          "Cette fenêtre de refroidissement est la seule où le véhicule est immobile, accessible et encore intact. Passé ce délai, les chances de récupération s'effondrent — ce que traduit la statistique : sur les 40 % de véhicules retrouvés, un tiers le sont en moins d'une semaine, mais l'essentiel se joue le premier jour.",
          "C'est aussi la raison pour laquelle un traceur GPS change l'équation : il ne dissuade pas le vol, mais il transforme cette fenêtre en information exploitable au lieu d'un constat.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps pour déclarer un vol de voiture à l'assurance ?",
        answer:
          "Deux jours ouvrés dans la plupart des contrats, à compter de la découverte du vol. Le délai exact figure aux conditions générales de votre police. La déclaration doit être accompagnée du récépissé de dépôt de plainte : c'est la pièce que l'assureur exige systématiquement.",
      },
      {
        question: "Que faire si je retrouve moi-même mon véhicule volé ?",
        answer:
          "Ne le récupérez pas vous-même et ne vous approchez pas. Appelez le 17, communiquez l'adresse exacte et attendez les instructions. Un véhicule retrouvé est une scène qui peut porter des traces exploitables, et le lieu peut être surveillé.",
      },
      {
        question: "Mon assurance rembourse-t-elle si je n'ai pas d'antivol ?",
        answer:
          "Cela dépend de votre contrat. Beaucoup de polices comportent une clause de garde ou exigent un dispositif antivol pour les véhicules au-delà d'une certaine valeur. Vérifiez vos conditions particulières : c'est souvent au moment du sinistre que l'on découvre l'exclusion.",
      },
      {
        question: "Combien de véhicules volés sont retrouvés en France ?",
        answer:
          "Environ 40 %. Un tiers d'entre eux sont retrouvés en moins d'une semaine, deux tiers en moins d'un mois. En 2025, 125 200 véhicules ont été volés en France selon le ministère de l'Intérieur, soit un toutes les quatre minutes.",
      },
    ],
    related: [
      { label: "Traceur GPS pour voiture", href: "/secteurs/voiture" },
      { label: "Le tracker coupe-moteur", href: "/produits/tracker-coupe-moteur" },
      { label: "Comparatif des traceurs GPS", href: "/comparatif" },
    ],
  },
  {
    slug: "detecter-un-traceur-gps",
    title: "Comment détecter un traceur GPS sur sa voiture",
    metaTitle: "Comment détecter un traceur GPS sur une voiture",
    metaDescription:
      "Où chercher un traceur GPS caché sur un véhicule, comment le reconnaître, ce que valent les détecteurs, et ce que dit la loi si vous en trouvez un.",
    standfirst:
      "Nous vendons des traceurs GPS. C'est précisément pour cela que nous pouvons vous expliquer où ils se cachent — et ce que la loi vous permet de faire si vous en découvrez un que vous n'avez pas installé.",
    published: "2026-08-30",
    updated: "2026-08-30",
    readingMinutes: 8,
    keywords: [
      "comment detecter un traceur gps",
      "detecter traceur gps voiture",
      "trouver un mouchard sur sa voiture",
      "detecteur de traceur gps",
      "traceur gps cache voiture",
      "comment savoir si ma voiture est tracee",
    ],
    sections: [
      {
        h2: "Pourquoi un vendeur de traceurs écrit cet article",
        paras: [
          "La question revient souvent, et elle est légitime. Un traceur GPS est un outil de protection quand on l'installe sur son propre véhicule ; c'est un délit quand on le pose sur celui d'un autre à son insu. L'article 226-1 du Code pénal punit d'un an d'emprisonnement et de 45 000 € d'amende l'atteinte à l'intimité de la vie privée.",
          "Nous vendons ces dispositifs à des propriétaires de véhicules, des artisans et des gestionnaires de flotte, avec la documentation légale qui va avec. Nous n'avons aucun intérêt à ce qu'ils servent à autre chose — et expliquer où ils se cachent ne facilite pas le travail de ceux qui en abusent : ils le savent déjà.",
        ],
      },
      {
        h2: "Les trois familles de traceurs, et ce qu'elles impliquent",
        paras: [
          "La façon de chercher dépend entièrement du type de boîtier. Il y en a trois, et ils n'ont ni la même taille, ni les mêmes emplacements possibles, ni la même durée de vie.",
        ],
        list: [
          {
            title: "Le boîtier aimanté autonome",
            body: "De la taille d'un paquet de cigarettes, il se fixe sur toute surface métallique et fonctionne sur batterie de quelques semaines à quelques mois. C'est le plus courant en pose illicite, parce qu'il ne demande aucun accès à l'habitacle : il se pose en dix secondes sous un véhicule.",
          },
          {
            title: "Le boîtier OBD",
            body: "Il se branche sur la prise diagnostic, présente sur tous les véhicules depuis 2001. Facile à repérer une fois qu'on sait où regarder, mais invisible pour qui ne pense pas à vérifier cette prise.",
          },
          {
            title: "Le boîtier câblé",
            body: "Raccordé au circuit électrique, dissimulé derrière une garniture. Il demande du temps et un accès à l'intérieur du véhicule, donc il est rare en pose illicite — sauf sur un véhicule d'occasion acheté à un particulier, ou un véhicule de location.",
          },
        ],
      },
      {
        h2: "Où chercher, dans l'ordre",
        paras: [
          "Une inspection méthodique prend une vingtaine de minutes. Munissez-vous d'une lampe et, si possible, d'un miroir d'inspection à manche.",
        ],
        list: [
          {
            title: "Sous le véhicule",
            body: "Passages de roue, longerons, sous les pare-chocs, châssis. C'est le premier endroit à examiner : un boîtier aimanté y est posé en quelques secondes. Cherchez un objet qui n'a pas la couleur ni la saleté du reste — un boîtier récent est propre là où tout est encrassé.",
          },
          {
            title: "La prise OBD",
            body: "Sous le volant, à gauche du tableau de bord, dans le compartiment à fusibles, sur la console centrale, dans la boîte à gants ou près du frein à main. Un boîtier branché là est visible dès qu'on regarde.",
          },
          {
            title: "L'habitacle",
            body: "Sous les sièges, dans les vide-poches de portière, sous la moquette du coffre, derrière la garniture de coffre, dans la roue de secours et sous la plage arrière.",
          },
          {
            title: "Le compartiment moteur",
            body: "Moins fréquent — la chaleur abîme les batteries — mais possible sur un boîtier câblé, souvent près de la batterie ou du boîtier à fusibles.",
          },
          {
            title: "Les pare-chocs",
            body: "L'espace derrière les pare-chocs plastique est le plus utilisé pour une pose durable, parce qu'il est invisible sans démontage tout en laissant passer le signal.",
          },
        ],
      },
      {
        h2: "À quoi cela ressemble",
        paras: [
          "Un traceur n'a pas d'écran ni de bouton visible. C'est un boîtier plastique noir ou gris, de la taille d'une boîte d'allumettes à celle d'un téléphone, souvent sans aucune inscription. Certains portent une petite diode qui ne clignote qu'à la mise sous tension.",
          "Deux indices matériels sont plus parlants que l'aspect du boîtier lui-même : un fil qui ne correspond à rien dans le faisceau d'origine, et une bande adhésive ou un collier de serrage récent sur un véhicule qui n'a pas été en atelier.",
        ],
      },
      {
        h2: "Ce que valent les détecteurs vendus en ligne",
        paras: [
          "Les détecteurs de radiofréquence à quelques dizaines d'euros ont une utilité réelle mais limitée, et il faut comprendre pourquoi avant d'en acheter un.",
          "Un traceur moderne n'émet pas en continu : il transmet sa position par salves, parfois espacées de plusieurs minutes ou de plusieurs heures en veille. Un détecteur ne le repère que pendant ces quelques secondes d'émission. Balayer un véhicule pendant deux minutes ne prouve donc rien.",
          "Pour qu'un balayage ait un sens, il faut le faire longuement, véhicule à l'arrêt, moteur coupé, loin de toute autre source — téléphones éteints, box wifi hors de portée. Même dans ces conditions, l'absence de détection n'est pas une preuve d'absence de traceur.",
        ],
        callout: {
          tone: "warn",
          title: "Les brouilleurs GPS sont illégaux",
          body: "Leur détention et leur usage sont interdits en France. Ils perturbent bien plus que le boîtier visé — services d'urgence, aviation, réseaux — et leur utilisation est pénalement sanctionnée. Ce n'est pas une solution.",
        },
      },
      {
        h2: "Vous en avez trouvé un. Et maintenant ?",
        paras: [
          "La réaction spontanée est de l'arracher. C'est la pire des options si vous envisagez une suite judiciaire.",
        ],
        list: [
          {
            title: "Ne le détruisez pas",
            body: "Le boîtier porte un numéro de série et une carte SIM qui permettent de remonter à l'acheteur. C'est votre seul élément de preuve.",
          },
          {
            title: "Photographiez-le en place",
            body: "Avant tout démontage, prenez des photos montrant clairement l'emplacement, sous plusieurs angles, avec le véhicule identifiable.",
          },
          {
            title: "Déposez plainte",
            body: "La pose d'un dispositif de géolocalisation à l'insu du propriétaire ou du conducteur est un délit. Remettez le boîtier aux forces de l'ordre avec les photos.",
          },
          {
            title: "Vérifiez d'abord l'évidence",
            body: "Sur un véhicule de société, de location ou en leasing, un traceur peut être parfaitement légitime — et vous avez dû en être informé. Relisez votre contrat de travail ou de location avant d'engager quoi que ce soit.",
          },
        ],
      },
      {
        h2: "Le cas particulier du véhicule d'occasion",
        paras: [
          "Un traceur oublié par un précédent propriétaire est plus fréquent qu'on ne l'imagine, en particulier sur les véhicules ayant appartenu à une société ou à un loueur. Il n'y a alors aucune intention malveillante : le boîtier a simplement été laissé en place lors de la revente.",
          "Si vous achetez un véhicule d'occasion, l'inspection décrite plus haut vaut la peine d'être faite une fois. Un traceur actif signifie qu'un tiers connaît vos déplacements, même sans le vouloir — et qu'il continue peut-être de payer un abonnement pour cela.",
        ],
      },
    ],
    faq: [
      {
        question: "Comment savoir si ma voiture a un traceur GPS ?",
        answer:
          "Par une inspection visuelle méthodique : sous le véhicule et dans les passages de roue, sur la prise OBD sous le tableau de bord, sous les sièges, dans le coffre et derrière les pare-chocs. Cherchez un boîtier plastique sans inscription, un fil qui ne correspond à rien dans le faisceau d'origine, ou un adhésif récent. Un détecteur de radiofréquence peut aider, mais un traceur en veille n'émet que par salves : l'absence de détection ne prouve rien.",
      },
      {
        question: "Un traceur GPS peut-il fonctionner voiture éteinte ?",
        answer:
          "Oui, s'il dispose de sa propre batterie. Un boîtier aimanté autonome fonctionne plusieurs semaines à plusieurs mois sans aucune alimentation du véhicule. Seuls les modèles branchés sur la prise OBD ou câblés dépendent du circuit électrique — et encore, certains embarquent une batterie de secours.",
      },
      {
        question: "Est-il légal de poser un traceur sur la voiture de quelqu'un ?",
        answer:
          "Non. Poser un dispositif de géolocalisation sur le véhicule d'une autre personne à son insu constitue une atteinte à l'intimité de la vie privée, punie par l'article 226-1 du Code pénal d'un an d'emprisonnement et de 45 000 € d'amende. Aucune circonstance — soupçon, conflit familial, séparation — ne rend la démarche licite.",
      },
      {
        question: "Mon employeur peut-il mettre un GPS sur mon véhicule de fonction ?",
        answer:
          "Oui, mais sous conditions strictes : vous devez avoir été informé individuellement avant la mise en service, le CSE doit avoir été consulté, la finalité doit figurer parmi celles admises par la CNIL, et vous devez pouvoir désactiver le suivi en dehors de votre temps de travail. Les trajets domicile-travail ne peuvent jamais être tracés. Si ces conditions ne sont pas réunies, le dispositif est irrégulier et vous pouvez saisir la CNIL.",
      },
      {
        question: "Les détecteurs de traceurs GPS sont-ils efficaces ?",
        answer:
          "Partiellement. Ils repèrent les émissions radio, mais un traceur en veille ne transmet que par salves de quelques secondes, parfois espacées de plusieurs heures. Un balayage rapide ne détecte rien. Pour être utile, il faut balayer longuement, moteur coupé, en écartant toute autre source d'émission — et même ainsi, l'absence de détection ne garantit pas l'absence de boîtier. L'inspection visuelle reste plus fiable.",
      },
    ],
    related: [
      { label: "Guide légal de la géolocalisation", href: "/guide-legal" },
      { label: "Nos traceurs GPS", href: "/produits" },
      { label: "Géolocalisation de flotte", href: "/secteurs/flotte-entreprise" },
    ],
  },
  {
    slug: "comment-fonctionne-un-traceur-gps",
    title: "Comment fonctionne un traceur GPS, vraiment",
    metaTitle: "Comment fonctionne un traceur GPS ?",
    metaDescription:
      "Satellites, carte SIM, fréquence de remontée, précision, autonomie : ce qui se passe réellement entre le boîtier et votre téléphone, expliqué sans jargon.",
    standfirst:
      "Un traceur GPS ne fait pas ce que la plupart des gens imaginent. Il ne « transmet » pas sa position aux satellites : il les écoute, puis utilise un tout autre réseau pour vous parler. Cette distinction explique presque tout le reste.",
    published: "2026-09-27",
    updated: "2026-09-27",
    readingMinutes: 9,
    keywords: [
      "comment fonctionne un traceur gps",
      "comment fonctionne un tracker gps",
      "comment fonctionne une balise gps",
      "principe traceur gps",
      "precision traceur gps",
      "traceur gps sans reseau",
    ],
    sections: [
      {
        h2: "Deux réseaux, pas un seul",
        paras: [
          "Un traceur GPS combine deux technologies qui n'ont rien à voir, et c'est la source de presque tous les malentendus.",
          "Le premier étage est la réception satellite. Une trentaine de satellites en orbite émettent en permanence un signal horodaté. Le boîtier écoute ceux qu'il capte, compare les infimes écarts d'arrivée entre les signaux et en déduit sa position. Cette écoute est passive et gratuite : le boîtier n'émet rien vers les satellites, il ne fait que recevoir.",
          "Le second étage est la transmission. Une fois sa position calculée, le boîtier doit vous la communiquer — et là, il utilise le réseau cellulaire, exactement comme un téléphone, avec une carte SIM. C'est cet étage qui coûte de l'argent tous les mois.",
        ],
        callout: {
          tone: "info",
          title: "Pourquoi le « sans abonnement » n'existe pas",
          body: "Le calcul de position est gratuit, la transmission ne l'est pas. Un traceur vendu « sans abonnement » a soit une carte SIM à votre charge, soit plusieurs années de connectivité intégrées au prix d'achat, soit aucune transmission du tout (Bluetooth, portée de quelques mètres).",
        },
      },
      {
        h2: "Ce qui se passe entre deux positions",
        paras: [
          "Un traceur ne transmet pas en continu. S'il le faisait, sa batterie tiendrait quelques heures et sa carte SIM consommerait des gigaoctets. Il alterne donc entre trois états.",
        ],
        list: [
          {
            title: "En mouvement",
            body: "L'accéléromètre détecte le déplacement et le boîtier passe en transmission rapprochée : une position toutes les dix à trente secondes selon les modèles. C'est ce qui permet de suivre un trajet en direct.",
          },
          {
            title: "À l'arrêt",
            body: "Après quelques minutes d'immobilité, le boîtier espace ses transmissions — une position par heure, parfois moins. Il économise sa batterie tout en restant joignable.",
          },
          {
            title: "En veille profonde",
            body: "Sur un matériel immobile depuis longtemps, certains modèles descendent à une transmission par jour. L'accéléromètre reste actif : au moindre mouvement, le boîtier se réveille et repasse en mode rapproché.",
          },
        ],
      },
      {
        h2: "La précision, et pourquoi elle varie",
        paras: [
          "En extérieur dégagé, un traceur se situe à trois à cinq mètres près. Cette précision se dégrade dès que le ciel est masqué : rue étroite entre immeubles, parking souterrain, tunnel, hangar métallique.",
          "Dans ces situations, le boîtier bascule sur la triangulation cellulaire : il mesure sa distance aux antennes de téléphonie environnantes. La précision tombe alors à quelques centaines de mètres en ville, davantage en zone rurale où les antennes sont espacées. C'est insuffisant pour désigner une place de parking, mais suffisant pour identifier un quartier ou un bâtiment — ce qui reste exploitable après un vol.",
          "Un point important pour les attentes : aucun traceur grand public ne vous donnera la position à l'intérieur d'un bâtiment avec précision. Si votre véhicule est dans un box fermé, vous saurez lequel des immeubles, pas lequel des boxes.",
        ],
      },
      {
        h2: "Que se passe-t-il quand le réseau manque",
        paras: [
          "C'est la question qui inquiète le plus, et la réponse est rassurante : rien n'est perdu.",
          "Lorsque le boîtier n'a plus de couverture cellulaire — tunnel, parking, zone blanche, pleine mer — il continue de calculer sa position par satellite et l'enregistre dans sa mémoire interne. Dès qu'il retrouve du réseau, il transmet l'intégralité du trajet manquant d'un coup.",
          "Vous perdez donc le temps réel pendant la coupure, mais pas l'historique. Sur un véhicule volé qui traverse un tunnel, la trace se reconstitue à la sortie.",
        ],
      },
      {
        h2: "Alimentation : trois familles, trois usages",
        paras: [
          "C'est le critère qui détermine réellement le choix d'un modèle, bien avant les fonctions annexes.",
        ],
        list: [
          {
            title: "Autonome sur batterie",
            body: "Le boîtier a sa propre réserve d'énergie : de sept jours sur un modèle compact à trente jours sur un modèle aimanté, davantage en veille. C'est la seule option pour un matériel sans circuit électrique — remorque, engin de chantier, bateau, conteneur.",
          },
          {
            title: "Branché sur la prise OBD",
            body: "Il puise sur le circuit du véhicule via la prise diagnostic, présente sur tous les véhicules depuis 2001. Aucune autonomie à gérer, mais le boîtier est visible pour qui sait où regarder.",
          },
          {
            title: "Câblé",
            body: "Raccordé au faisceau électrique et dissimulé derrière une garniture. C'est la pose la plus discrète et la seule qui permette le coupe-moteur, au prix d'une intervention d'environ quarante-cinq minutes.",
          },
        ],
      },
      {
        h2: "Le geofencing, expliqué simplement",
        paras: [
          "Derrière ce mot se cache un mécanisme élémentaire : vous dessinez une zone sur une carte, et le boîtier vous alerte quand il en sort.",
          "Le calcul se fait à bord, pas sur un serveur. Le boîtier connaît les limites de la zone et compare sa position à chaque relevé. C'est pour cette raison que l'alerte part dans la seconde, sans dépendre d'un traitement distant.",
          "L'usage le plus efficace n'est pas la zone géographique seule, mais sa combinaison avec une plage horaire. Un fourgon d'artisan qui quitte son emplacement à 3 h du matin déclenche une alerte ; le même mouvement à 7 h n'en déclenche aucune.",
        ],
      },
      {
        h2: "Ce qu'un traceur ne fait pas",
        paras: [
          "Trois attentes reviennent régulièrement et méritent d'être corrigées.",
        ],
        list: [
          {
            title: "Il n'empêche pas le vol",
            body: "Un traceur est passif. Il ne verrouille rien, ne fait pas de bruit et ne dissuade personne — sauf le modèle coupe-moteur, qui empêche le redémarrage mais seulement après coup.",
          },
          {
            title: "Il ne remplace pas une plainte",
            body: "Les forces de l'ordre interviennent sur la base d'un dépôt de plainte, pas sur une capture d'écran. La position est un appui à l'enquête, pas un substitut à la procédure.",
          },
          {
            title: "Il ne fonctionne pas partout en mer",
            body: "Le positionnement fonctionne, mais la transmission dépend de la couverture cellulaire côtière. Au large, les positions sont mémorisées et transmises au retour. Un traceur GPS n'est en aucun cas une balise de détresse.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Comment fonctionne un traceur GPS ?",
        answer:
          "Il fonctionne en deux temps. D'abord il reçoit les signaux des satellites GPS et calcule sa position à partir des écarts d'arrivée entre ces signaux — cette écoute est passive et gratuite. Ensuite il transmet cette position via le réseau cellulaire, grâce à une carte SIM intégrée, jusqu'à une plateforme que vous consultez depuis une application ou un navigateur. La fréquence de transmission s'adapte : rapprochée en mouvement, espacée à l'arrêt pour préserver la batterie.",
      },
      {
        question: "Quelle est la précision d'un traceur GPS ?",
        answer:
          "Trois à cinq mètres en extérieur dégagé. La précision se dégrade dans les rues étroites, les parkings souterrains et les hangars métalliques, où le signal satellite est masqué. Le boîtier bascule alors sur la triangulation par antennes cellulaires : quelques centaines de mètres en ville, davantage en zone rurale. Suffisant pour identifier un bâtiment, pas une place de parking.",
      },
      {
        question: "Un traceur GPS fonctionne-t-il sans réseau ?",
        answer:
          "Il continue de calculer sa position, mais ne peut pas la transmettre. Les positions sont alors enregistrées en mémoire interne et envoyées d'un seul bloc dès le retour de la couverture cellulaire. Vous perdez le temps réel pendant la coupure, jamais l'historique.",
      },
      {
        question: "Combien de temps dure la batterie d'un traceur GPS ?",
        answer:
          "De sept jours sur un modèle compact à trente jours sur un modèle aimanté en usage courant, et davantage en veille prolongée sur un matériel immobile. Les modèles branchés sur la prise OBD ou câblés au circuit du véhicule n'ont pas de contrainte d'autonomie.",
      },
      {
        question: "Le GPS consomme-t-il beaucoup de données ?",
        answer:
          "Non. Une position pèse quelques dizaines d'octets. Un traceur consomme environ 100 Mo par mois en usage intensif, soit une fraction d'un forfait mobile classique. C'est ce volume que couvre l'abonnement.",
      },
    ],
    related: [
      { label: "Nos traceurs GPS", href: "/produits" },
      { label: "Le coût réel sur 3 ans", href: "/tarifs" },
      { label: "Comparatif du marché", href: "/comparatif" },
    ],
  },
  {
    slug: "ou-se-trouve-la-prise-obd",
    title: "Où se trouve la prise OBD de votre véhicule",
    metaTitle: "Où se trouve la prise OBD dans un véhicule ?",
    metaDescription:
      "Les six emplacements possibles de la prise OBD-II, comment la reconnaître, et que faire si votre véhicule n'en a pas. Avec les cas particuliers par marque.",
    standfirst:
      "Tous les véhicules essence commercialisés en Europe depuis 2001 et diesel depuis 2004 ont une prise OBD-II. Elle est normalisée, toujours à moins d'un mètre du volant — mais les constructeurs rivalisent d'imagination pour la dissimuler.",
    published: "2026-09-27",
    updated: "2026-09-27",
    readingMinutes: 6,
    keywords: [
      "ou se trouve la prise obd",
      "prise obd voiture emplacement",
      "prise diagnostic voiture ou",
      "obd2 emplacement",
      "trouver prise obd",
      "prise obd2 voiture",
    ],
    sections: [
      {
        h2: "Ce que dit la norme",
        paras: [
          "La prise OBD-II est réglementée : elle doit se situer dans l'habitacle, du côté conducteur, à moins d'un mètre du volant, et être accessible sans outil. Le connecteur est toujours le même — un trapèze à seize broches, large de deux centimètres environ.",
          "Ce que la norme ne dit pas, c'est qu'elle peut être derrière un cache, sous un tapis ou au fond de la boîte à gants. D'où la difficulté à la trouver quand on ne sait pas quoi chercher.",
        ],
      },
      {
        h2: "Les six emplacements, du plus au moins fréquent",
        paras: [
          "Cherchez dans cet ordre, une lampe à la main. Dans plus de huit cas sur dix, elle est dans les deux premiers.",
        ],
        list: [
          {
            title: "Sous le volant, à gauche de la colonne de direction",
            body: "L'emplacement le plus courant. Asseyez-vous côté conducteur, penchez-vous et regardez vers le haut : la prise pend souvent librement sous le tableau de bord.",
          },
          {
            title: "Derrière un cache amovible du tableau de bord",
            body: "Un petit volet plastique, parfois marqué d'un pictogramme moteur, qui se retire à la main. Fréquent sur les véhicules allemands.",
          },
          {
            title: "Dans le compartiment à fusibles",
            body: "Sous le tableau de bord côté conducteur, derrière la trappe qui donne accès aux fusibles.",
          },
          {
            title: "Sur la console centrale",
            body: "Près du levier de vitesses, sous un couvercle ou dans un vide-poche, parfois du côté passager.",
          },
          {
            title: "Dans la boîte à gants",
            body: "Au fond, sur le côté. Il faut souvent vider la boîte pour la voir.",
          },
          {
            title: "Près du frein à main ou sous l'accoudoir",
            body: "L'emplacement le plus rare, qu'on trouve sur certains modèles récents à frein de stationnement électrique.",
          },
        ],
      },
      {
        h2: "Comment la reconnaître",
        paras: [
          "Le connecteur OBD-II est un trapèze — plus large en haut qu'en bas — d'environ deux centimètres de large, avec seize petites broches métalliques disposées sur deux rangées. Il est presque toujours noir, parfois blanc ou jaune sur certains constructeurs.",
          "Ne la confondez pas avec la prise allume-cigare, ronde, ni avec les connecteurs de faisceau du constructeur, qui sont rectangulaires et souvent colorés. La forme trapézoïdale est caractéristique : aucun autre connecteur du véhicule n'a cette silhouette.",
        ],
      },
      {
        h2: "Si vous ne la trouvez pas",
        paras: [
          "Trois pistes, dans l'ordre.",
        ],
        list: [
          {
            title: "Le manuel du véhicule",
            body: "Cherchez « prise diagnostic » ou « OBD » à l'index. L'emplacement y figure presque toujours, souvent avec un schéma.",
          },
          {
            title: "Une recherche par modèle",
            body: "Tapez la marque, le modèle et l'année suivis de « prise OBD ». Des bases collaboratives recensent les emplacements pour la quasi-totalité du parc.",
          },
          {
            title: "Votre garagiste",
            body: "Il la branche à chaque révision. La question prend trente secondes au comptoir.",
          },
        ],
      },
      {
        h2: "Les véhicules sans prise OBD exploitable",
        paras: [
          "Certains cas sortent du cadre, et un boîtier OBD n'y conviendra pas.",
          "Les véhicules antérieurs à 2001 en essence et 2004 en diesel n'ont pas de prise normalisée. Certains disposent d'un connecteur propriétaire au constructeur, incompatible avec un boîtier standard.",
          "Les remorques, engins de chantier, bateaux et matériels tractés n'ont évidemment aucune prise de ce type. Sur ces matériels, seul un boîtier autonome sur batterie ou un montage câblé fonctionne.",
          "Enfin, certains véhicules électriques récents ont une prise OBD dont les données moteur ne remontent pas de la même manière. La localisation fonctionne, mais les informations liées au moteur thermique n'ont plus de sens.",
        ],
        callout: {
          tone: "info",
          title: "Pas de prise OBD utilisable ?",
          body: "Le tracker aimanté fonctionne sur sa propre batterie, sans aucun raccordement, jusqu'à trente jours. C'est la solution standard pour les matériels sans circuit exploitable.",
        },
      },
      {
        h2: "Un boîtier OBD décharge-t-il la batterie ?",
        paras: [
          "C'est la crainte la plus répandue, et elle mérite une réponse chiffrée. Un boîtier OBD de qualité consomme moins de dix milliampères en veille — l'équivalent d'une horloge de tableau de bord.",
          "Sur un véhicule dont la batterie est en bon état, cela permet plusieurs semaines d'immobilisation sans incidence. Sur une batterie déjà fatiguée ou un véhicule qui roule rarement, le boîtier peut en revanche accélérer une décharge qui se serait produite de toute façon.",
        ],
      },
    ],
    faq: [
      {
        question: "Où se trouve la prise OBD dans une voiture ?",
        answer:
          "Dans l'habitacle, du côté conducteur, à moins d'un mètre du volant — c'est imposé par la norme. Les six emplacements les plus fréquents sont : sous le volant à gauche de la colonne de direction, derrière un cache amovible du tableau de bord, dans le compartiment à fusibles, sur la console centrale, au fond de la boîte à gants, et près du frein à main. Dans plus de huit cas sur dix, elle est dans les deux premiers.",
      },
      {
        question: "Tous les véhicules ont-ils une prise OBD ?",
        answer:
          "Tous les véhicules essence commercialisés en Europe depuis 2001 et diesel depuis 2004. Les modèles antérieurs n'ont pas de prise normalisée. Les remorques, engins de chantier et bateaux n'en ont évidemment pas : un boîtier autonome sur batterie est alors la seule option.",
      },
      {
        question: "À quoi ressemble une prise OBD ?",
        answer:
          "C'est un connecteur trapézoïdal — plus large en haut qu'en bas — d'environ deux centimètres, avec seize broches métalliques sur deux rangées, le plus souvent noir. Sa forme est caractéristique : aucun autre connecteur du véhicule n'a cette silhouette.",
      },
      {
        question: "Un traceur branché sur la prise OBD vide-t-il la batterie ?",
        answer:
          "Non sur une batterie en bon état. La consommation en veille est inférieure à dix milliampères, soit l'équivalent d'une horloge de tableau de bord, ce qui permet plusieurs semaines d'immobilisation. Sur une batterie déjà fatiguée, le boîtier peut accélérer une décharge qui se serait produite de toute façon.",
      },
    ],
    related: [
      { label: "Le tracker OBD", href: "/produits/tracker-obd" },
      { label: "Comment fonctionne un traceur GPS", href: "/blog/comment-fonctionne-un-traceur-gps" },
      { label: "Nos traceurs GPS", href: "/produits" },
    ],
  },
  {
    slug: "ou-cacher-un-traceur-gps-sur-une-moto",
    title: "Où cacher un traceur GPS sur une moto",
    metaTitle: "Où cacher un traceur GPS sur une moto ou un scooter",
    metaDescription:
      "Les emplacements qui tiennent et ceux qu'un voleur fouille en premier, les contraintes d'étanchéité et de signal, et quoi faire dans les minutes qui suivent un vol.",
    standfirst:
      "Un deux-roues se charge dans un utilitaire en quinze secondes, antivol compris. Le traceur est le seul dispositif qui serve encore après ce moment-là — à condition qu'il ne soit pas au premier endroit que le voleur regarde.",
    published: "2026-09-27",
    updated: "2026-09-27",
    readingMinutes: 7,
    keywords: [
      "ou cacher un traceur gps moto",
      "cacher tracker gps moto",
      "traceur gps moto discret",
      "emplacement traceur gps scooter",
      "antivol gps moto",
      "traceur gps moto invisible",
    ],
    sections: [
      {
        h2: "Le principe : survivre au premier tri",
        paras: [
          "Un deux-roues volé n'est pas démonté sur place. Il est chargé, puis déposé dans un local où il attend quelques jours — le temps de vérifier qu'il n'est pas suivi. C'est pendant cette attente que la position a une valeur.",
          "Mais avant de le stocker, les voleurs font un tri rapide : ils retirent ce qui est visible et ce qui se démonte en quelques secondes. Un traceur placé dans un top-case ou une sacoche ne passe pas cette étape. Tout l'enjeu de l'emplacement est là.",
        ],
      },
      {
        h2: "Les emplacements qui tiennent",
        paras: [
          "Classés par efficacité réelle, en tenant compte de trois contraintes simultanées : la discrétion, la réception du signal, et la résistance aux vibrations.",
        ],
        list: [
          {
            title: "Sous la selle, dans la mousse",
            body: "Le meilleur compromis sur la plupart des machines. Le boîtier se glisse dans une découpe de la mousse ou se fixe sous la coque. Le plastique laisse passer le signal, l'endroit est sec, et il faut démonter la selle pour y accéder.",
          },
          {
            title: "Dans le carénage latéral",
            body: "Excellent sur les machines carénées. Choisissez un creux à l'écart des points chauds — pas contre l'échappement ni le radiateur — et fixez fermement : les vibrations d'un deux-roues sont plus violentes que celles d'une voiture.",
          },
          {
            title: "Sous le garde-boue arrière",
            body: "Discret et rarement fouillé, mais très exposé aux projections. À réserver aux boîtiers certifiés IP67, avec une fixation qui ne bouge pas.",
          },
          {
            title: "Dans le tube de cadre ou la colonne de direction",
            body: "L'emplacement le plus sûr quand la géométrie de la machine le permet, car il demande un vrai démontage. Attention toutefois : un cadre métallique atténue fortement le signal. À tester avant de refermer.",
          },
          {
            title: "Sous le réservoir",
            body: "Bon sur les motos où l'espace existe. Vérifiez qu'aucun câble ni durite n'est contraint, et que le boîtier ne peut pas glisser vers une pièce mobile.",
          },
        ],
      },
      {
        h2: "Les emplacements à éviter",
        paras: [
          "Ce sont les trois premiers endroits fouillés, dans cet ordre.",
        ],
        list: [
          {
            title: "Le top-case et les sacoches",
            body: "Ouverts en premier, souvent avant même le chargement. Un traceur qui s'y trouve ne quittera pas le parking.",
          },
          {
            title: "Sous un simple adhésif, à l'extérieur",
            body: "Visible, et arraché en deux secondes. Le double-face ne résiste ni aux vibrations ni à un coup d'œil attentif.",
          },
          {
            title: "Le compartiment sous la selle d'un scooter, à découvert",
            body: "C'est un coffre, donc un endroit qu'on ouvre. Le boîtier doit être fixé sous la coque ou dans la mousse, pas posé au fond.",
          },
        ],
      },
      {
        h2: "Les trois contraintes physiques",
        paras: [
          "Un emplacement discret mais inadapté ne sert à rien. Trois vérifications avant de refermer.",
        ],
        list: [
          {
            title: "Le signal",
            body: "Le plastique et la fibre laissent passer le signal, le métal l'atténue fortement. Si vous encastrez le boîtier dans du métal, testez la remontée de position avant de tout remonter.",
          },
          {
            title: "L'eau",
            body: "Un deux-roues roule sous la pluie et se lave au jet. Hors d'un compartiment étanche, le boîtier doit être certifié IP67 au minimum.",
          },
          {
            title: "Les vibrations",
            body: "Elles sont sans commune mesure avec celles d'une voiture. Un collier de serrage ou une fixation mécanique vaut mieux qu'un adhésif, quel qu'il soit.",
          },
        ],
        callout: {
          tone: "warn",
          title: "La chaleur tue les batteries",
          body: "Ne placez jamais un boîtier autonome contre l'échappement, le radiateur ou le bloc moteur. La chaleur réduit l'autonomie de façon spectaculaire et peut endommager la cellule de façon permanente.",
        },
      },
      {
        h2: "Autonome ou câblé",
        paras: [
          "Les deux approches se défendent, et le bon choix dépend de l'usage réel de la machine.",
          "Un boîtier autonome se place où vous voulez, sans intervention sur l'électricité. Il demande une recharge périodique — toutes les semaines sur un modèle compact, tous les mois sur un modèle longue autonomie. C'est le choix adapté à une machine utilisée régulièrement, où la recharge s'intègre à l'entretien courant.",
          "Un boîtier câblé sur la batterie ne se recharge jamais, mais il implique un branchement, et il cesse de fonctionner si la batterie de la moto est déposée — ce qui arrive en hivernage. Certains modèles embarquent une batterie de secours pour couvrir ce cas.",
          "Pour une machine remisée six mois par an, le modèle autonome longue durée reste le plus sûr, à condition de le recharger avant le remisage.",
        ],
      },
      {
        h2: "Le vol est constaté. Les premières minutes",
        paras: [
          "L'ordre compte, et la première erreur est presque toujours la même.",
        ],
        list: [
          {
            title: "Appelez le 17 immédiatement",
            body: "Le signalement téléphonique permet une inscription au fichier des véhicules volés avant même le dépôt de plainte formel.",
          },
          {
            title: "Transmettez la position, ne vous y rendez pas",
            body: "C'est l'erreur la plus fréquente et la plus dangereuse. Les réseaux organisés autour du vol de deux-roues ne sont pas des amateurs, et les lieux de stockage sont surveillés.",
          },
          {
            title: "Déposez plainte dans la foulée",
            body: "Le récépissé conditionne l'indemnisation. Apportez la carte grise, l'attestation d'assurance et toutes les clés.",
          },
          {
            title: "Ne publiez rien sur les réseaux",
            body: "Un appel à témoins alerte aussi les voleurs, qui abandonnent alors la machine ou la démontent plus vite.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Où cacher un traceur GPS sur une moto ?",
        answer:
          "Les meilleurs emplacements sont sous la selle dans la mousse, dans le carénage latéral à l'écart des points chauds, sous le garde-boue arrière si le boîtier est certifié IP67, et dans le tube de cadre lorsque la géométrie le permet. Évitez absolument le top-case et les sacoches : ce sont les premiers endroits fouillés, souvent avant même le chargement de la machine.",
      },
      {
        question: "Un traceur GPS résiste-t-il aux vibrations d'une moto ?",
        answer:
          "Oui, les boîtiers professionnels sont testés en vibration. Ce qui lâche en pratique n'est pas le boîtier mais sa fixation : un adhésif double-face ne tient pas dans la durée sur un deux-roues. Utilisez un collier de serrage ou une fixation mécanique, et vérifiez-la une fois par an.",
      },
      {
        question: "Quel traceur GPS choisir pour une moto ?",
        answer:
          "Le critère décisif est la discrétion, car c'est la première chose qu'un voleur cherche. Un format compact se dissimule sous la selle ou dans le carénage sans intervention. Si vous voulez une autonomie qui couvre un hivernage complet, orientez-vous vers un modèle aimanté longue durée. Un boîtier câblé sur la batterie ne se recharge jamais mais cesse de fonctionner si la batterie est déposée.",
      },
      {
        question: "Le métal du cadre bloque-t-il le signal GPS ?",
        answer:
          "Il l'atténue fortement. Le plastique et la fibre laissent passer le signal sans difficulté ; un boîtier encastré dans du métal peut perdre la réception satellite. Si vous choisissez un emplacement entouré de métal, vérifiez que la position remonte correctement avant de tout remonter.",
      },
      {
        question: "Que faire dès que je constate le vol de ma moto ?",
        answer:
          "Appelez le 17 immédiatement pour faire inscrire la machine au fichier des véhicules volés, transmettez la position du traceur aux forces de l'ordre, puis déposez plainte avec la carte grise, l'attestation d'assurance et toutes les clés. Ne vous rendez jamais seul à l'endroit indiqué par le traceur, et ne publiez pas d'appel à témoins sur les réseaux sociaux.",
      },
    ],
    related: [
      { label: "Traceur GPS moto et scooter", href: "/secteurs/moto" },
      { label: "Le tracker mini", href: "/produits/tracker-mini" },
      { label: "Véhicule volé : les 6 premières heures", href: "/blog/vehicule-vole-que-faire" },
    ],
  },
  {
    slug: "vol-engins-chantier-btp",
    title: "Vol sur les chantiers : ce que coûte vraiment un parc non équipé",
    metaTitle: "Vol d'engins de chantier : chiffres et parades 2026",
    metaDescription:
      "+14 % de vols d'engins en 2025, 31 000 € de perte moyenne par entreprise. Pourquoi le matériel BTP est si exposé, et ce qui fonctionne réellement.",
    standfirst:
      "Alors que les vols de véhicules reculent de 9 % sur un an, ceux d'engins de chantier progressent de 14 %. Un secteur à contre-courant, pour une raison technique que peu d'entreprises identifient.",
    published: "2026-09-27",
    updated: "2026-09-27",
    readingMinutes: 8,
    keywords: [
      "vol engin de chantier",
      "vol materiel btp",
      "traceur gps engin de chantier",
      "antivol engin chantier",
      "geolocalisation materiel btp",
      "statistiques vol chantier",
    ],
    sections: [
      {
        h2: "Les chiffres du secteur",
        paras: [
          "Les données 2025 ne laissent pas de place à l'interprétation. 68 % des professionnels du bâtiment et des travaux publics déclarent avoir été confrontés au vol dans l'année, contre 50 % en 2022. La perte moyenne atteint 31 000 € par entreprise, et le préjudice global dépasse 400 millions d'euros pour le secteur.",
          "Le plus révélateur est la divergence de tendance : les vols de véhicules en général reculent de 9 % sur un an, tandis que ceux d'engins progressent de 14 %. Autrement dit, la délinquance se déplace vers une cible qui se défend moins bien.",
        ],
      },
      {
        h2: "Pourquoi le matériel de chantier se défend mal",
        paras: [
          "Quatre caractéristiques se cumulent, et c'est leur combinaison qui rend le secteur vulnérable.",
        ],
        list: [
          {
            title: "Pas de circuit électrique exploitable",
            body: "C'est le point technique décisif. Une remorque, un compacteur ou un groupe électrogène n'ont ni batterie permanente ni prise diagnostic. Aucun antivol électronique classique ne peut y être installé — ce qui explique pourquoi ces matériels restent massivement non équipés.",
          },
          {
            title: "Aucune identification robuste",
            body: "Un engin repeint et privé de ses plaques constructeur devient très difficile à identifier. Contrairement à une voiture, il n'existe pas de fichier national systématiquement consulté à la revente.",
          },
          {
            title: "Le rythme des chantiers",
            body: "Un site fermé le vendredi soir n'est souvent inspecté que le lundi matin. Quarante-huit heures d'avance, c'est largement assez pour démonter ou faire passer une frontière.",
          },
          {
            title: "Des sites ouverts par nature",
            body: "Un chantier n'est pas un dépôt. Les clôtures sont temporaires, les accès multiples, et la rotation des intervenants rend toute surveillance humaine illusoire.",
          },
        ],
      },
      {
        h2: "Ce qui ne marche pas, et pourquoi",
        paras: [
          "Trois dispositifs sont couramment employés et donnent une fausse impression de protection.",
          "Le marquage du matériel dissuade la revente légale, mais pas l'export ni le démontage pour pièces — qui représentent l'essentiel des débouchés.",
          "Les clôtures et barrières ralentissent un opportuniste, pas une équipe équipée. Un porte-engin ne s'arrête pas devant un grillage temporaire.",
          "La vidéosurveillance de chantier produit des images exploitables après coup, mais ne déclenche rien en temps réel si personne ne regarde. Elle documente le vol, elle ne le raccourcit pas.",
        ],
      },
      {
        h2: "Ce qui change réellement l'issue",
        paras: [
          "La seule approche qui réduise la fenêtre de disparition est la localisation autonome, précisément parce qu'elle contourne le problème d'alimentation.",
        ],
        list: [
          {
            title: "Un boîtier qui n'a besoin de rien",
            body: "Un traceur aimanté fonctionne sur sa propre batterie, jusqu'à trente jours en usage courant et davantage sur un matériel immobile. Il se pose en trente secondes sur toute surface métallique, sans outil, sans raccordement, sur un engin comme sur une remorque ou une benne.",
          },
          {
            title: "Une zone et des horaires",
            body: "Définissez le périmètre du chantier et les plages d'activité. Tout mouvement en dehors déclenche une alerte immédiate — c'est précisément le scénario du vendredi soir.",
          },
          {
            title: "Une résistance adaptée",
            body: "Boîtier certifié IP67 : poussière, projections, vibrations et écarts de température. Un matériel de chantier passe sa vie dehors.",
          },
          {
            title: "Un seul compte pour tout le parc",
            body: "Chantiers, agences, matériel loué à des sous-traitants : l'ensemble apparaît sur une carte unique, ce qui règle aussi le problème quotidien du matériel qu'on ne retrouve plus.",
          },
        ],
      },
      {
        h2: "Le bénéfice qui n'a rien à voir avec le vol",
        paras: [
          "C'est l'argument qui convainc généralement les gestionnaires de parc, et il n'apparaît dans aucune statistique de sinistralité.",
          "Un parc tracé cesse d'être une estimation. Vous savez où est chaque matériel, depuis combien de temps il y est, et combien d'heures il a réellement tourné. Trois conséquences directes : la facturation à l'heure d'utilisation devient exacte, les entretiens se planifient sur des heures machine réelles plutôt qu'au jugé, et les matériels sous-utilisés deviennent visibles — ce qui évite d'en louer un de plus.",
          "Sur un parc d'une dizaine d'engins, ce seul effet couvre généralement le coût de l'équipement en quelques mois, indépendamment de tout vol.",
        ],
      },
      {
        h2: "Le cadre légal, à ne pas négliger",
        paras: [
          "Tant que le dispositif ne suit qu'un matériel, aucune formalité n'est requise. Dès qu'il permet de savoir où se trouve un salarié — ce qui est le cas d'un engin conduit par une seule personne —, le traitement relève du RGPD et du Code du travail.",
          "Les obligations sont alors les mêmes que pour une flotte : information individuelle de chaque salarié concerné, consultation du CSE lorsqu'il existe, inscription au registre des traitements, finalité admise, et impossibilité de tracer en dehors du temps de travail.",
          "Ce point est fréquemment négligé sur les chantiers, où l'on raisonne en matériel plutôt qu'en personnes. Le risque n'est pas théorique : des données issues d'un dispositif irrégulier sont écartées devant un conseil de prud'hommes.",
        ],
        callout: {
          tone: "info",
          title: "Documentation fournie",
          body: "Nous remettons avec chaque déploiement professionnel la note d'information aux salariés, la mention pour le registre des traitements et la trame de consultation du CSE.",
        },
      },
    ],
    faq: [
      {
        question: "Combien de vols d'engins de chantier en France ?",
        answer:
          "Les vols d'engins ont progressé de 14 % en 2025, à contre-courant de la baisse générale des vols de véhicules (−9 %). 68 % des professionnels du BTP déclarent avoir été confrontés au vol dans l'année, contre 50 % en 2022, pour une perte moyenne de 31 000 € par entreprise et plus de 400 millions d'euros à l'échelle du secteur.",
      },
      {
        question: "Comment protéger un engin de chantier contre le vol ?",
        answer:
          "La difficulté est qu'un engin ou une remorque n'a pas de circuit électrique exploitable pour un antivol classique. La solution adaptée est un traceur autonome sur batterie, aimanté, qui se pose en trente secondes sans raccordement et fonctionne jusqu'à trente jours. Associez-le à une zone géographique autour du chantier et à des plages horaires : tout mouvement hors activité déclenche une alerte immédiate.",
      },
      {
        question: "Un traceur GPS résiste-t-il aux conditions de chantier ?",
        answer:
          "Les boîtiers certifiés IP67 résistent à la poussière, aux projections, aux vibrations et aux écarts de température. Posez-les sur une surface plane du châssis, à l'abri des chocs directs et des points de graissage, plutôt que sur un élément mobile.",
      },
      {
        question: "Faut-il informer les salariés qui conduisent les engins tracés ?",
        answer:
          "Oui, dès lors que le dispositif permet de savoir où se trouve une personne identifiable — ce qui est le cas d'un engin conduit par un seul opérateur. Il faut informer individuellement chaque salarié, consulter le CSE lorsqu'il existe, inscrire le traitement au registre et ne pas collecter en dehors du temps de travail. Ce point est souvent négligé sur les chantiers, où l'on raisonne en matériel plutôt qu'en personnes.",
      },
      {
        question: "Le marquage du matériel suffit-il à protéger un parc ?",
        answer:
          "Non. Le marquage dissuade la revente légale mais pas l'export ni le démontage pour pièces, qui constituent l'essentiel des débouchés du matériel volé. Il reste utile en complément, jamais comme unique protection.",
      },
    ],
    related: [
      { label: "Traceur GPS engin de chantier", href: "/secteurs/engin-chantier" },
      { label: "Le tracker aimanté", href: "/produits/tracker-aimante" },
      { label: "Guide légal de la géolocalisation", href: "/guide-legal" },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
