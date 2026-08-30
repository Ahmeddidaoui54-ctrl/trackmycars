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
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
