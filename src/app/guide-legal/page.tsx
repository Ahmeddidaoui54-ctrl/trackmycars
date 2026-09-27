import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { BreadcrumbJsonLd, FAQJsonLd, HowToJsonLd ,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Géolocaliser un véhicule : ce que dit la loi",
  description:
    "Géolocalisation de véhicule et de salarié : obligations CNIL, articles L.1222-4 et L.2312-38, durée de conservation, sanctions. Guide complet et modèles à télécharger.",
  keywords: [
    "geolocalisation salarie",
    "geolocalisation salarie cnil",
    "rgpd geolocalisation vehicule",
    "traceur vehicule entreprise loi",
    "droit geolocaliser vehicule societe",
    "peut on mettre un gps sur une voiture de fonction",
    "geolocalisation vehicule de fonction legal",
    "cnil geolocalisation flotte",
    "information salarie geolocalisation modele",
    "traceur gps legal",
  ],
  alternates: { canonical: "/guide-legal" },
  openGraph: {
    title: "Géolocaliser un véhicule : ce que dit la loi",
    description:
      "Les obligations réelles, article par article, et ce qui expose à des sanctions. Avec des modèles de documents à télécharger.",
    url: `${site.url}/guide-legal`,
  },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Guide légal", href: "/guide-legal" },
];

const etapes = [
  {
    name: "Vérifier que la finalité est admise",
    text: "La CNIL n'admet que quatre finalités : la facturation d'une prestation, la sécurité des biens et des personnes, l'optimisation des tournées, et le suivi du temps de travail — cette dernière à titre subsidiaire seulement, lorsqu'aucun autre moyen ne permet ce suivi. Surveiller un salarié n'est pas une finalité admise.",
  },
  {
    name: "Informer chaque salarié individuellement",
    text: "L'article L.1222-4 du Code du travail impose d'informer chaque personne concernée avant la mise en service. L'information doit préciser le dispositif, sa finalité, les données collectées, leur durée de conservation et les droits dont dispose le salarié.",
  },
  {
    name: "Consulter le CSE",
    text: "L'article L.2312-38 du Code du travail impose la consultation du comité social et économique avant toute mise en place d'un moyen de contrôle de l'activité. La consultation précède le déploiement : la faire après ne régularise rien.",
  },
  {
    name: "Inscrire le traitement au registre",
    text: "Aucune déclaration préalable à la CNIL n'est requise depuis le RGPD. En revanche, le traitement doit figurer au registre des traitements de l'entreprise, avec sa finalité, ses destinataires et sa durée de conservation. Une analyse d'impact peut être nécessaire selon l'ampleur du dispositif.",
  },
  {
    name: "Permettre la désactivation hors temps de travail",
    text: "La géolocalisation permanente est interdite. Le salarié doit pouvoir désactiver le suivi pendant ses pauses, ses trajets personnels et en dehors de ses horaires. Les trajets domicile-travail ne peuvent jamais être tracés.",
  },
  {
    name: "Limiter la conservation à deux mois",
    text: "La CNIL retient une durée de conservation de deux mois en principe pour les données de géolocalisation des salariés. Des durées plus longues doivent être justifiées par une finalité précise, par exemple la preuve d'une prestation facturée.",
  },
];

const faq = [
  {
    question: "Ai-je le droit de géolocaliser un véhicule ?",
    answer:
      "Sur un véhicule dont vous êtes propriétaire et que vous utilisez seul, oui, sans aucune formalité. Dès qu'une autre personne le conduit — salarié, locataire, proche — vous devez l'informer de l'existence du dispositif, de sa finalité et de la durée de conservation des données. Poser un traceur à l'insu d'une personne pour suivre ses déplacements constitue un délit pénal.",
  },
  {
    question: "Peut-on mettre un GPS sur une voiture de fonction ?",
    answer:
      "Oui, sous cinq conditions cumulatives : la finalité doit figurer parmi celles admises par la CNIL, chaque salarié concerné doit être informé individuellement (article L.1222-4), le CSE doit être consulté lorsqu'il existe (article L.2312-38), le traitement doit être inscrit au registre, et le salarié doit pouvoir désactiver le suivi en dehors de son temps de travail. La géolocalisation permanente est interdite.",
  },
  {
    question: "Un salarié peut-il refuser d'être géolocalisé ?",
    answer:
      "Il ne peut pas s'opposer à un dispositif légalement mis en place et proportionné à une finalité admise. En revanche, il dispose d'un droit d'accès aux données qui le concernent, peut demander à consulter ses relevés de trajets, et peut saisir la CNIL s'il estime que le dispositif dépasse sa finalité déclarée ou que la désactivation hors temps de travail n'est pas possible.",
  },
  {
    question: "Combien de temps peut-on conserver les données de géolocalisation ?",
    answer:
      "Deux mois en principe, selon la doctrine de la CNIL. Une conservation plus longue doit être justifiée par une finalité précise et documentée : la preuve d'une prestation facturée peut justifier un an, l'optimisation des tournées beaucoup moins. Conserver « au cas où » n'est pas une justification recevable.",
  },
  {
    question: "Que risque un employeur qui ne respecte pas ces règles ?",
    answer:
      "Deux risques distincts. Sur le terrain du RGPD, la CNIL peut prononcer une mise en demeure puis une sanction financière pouvant atteindre 4 % du chiffre d'affaires mondial. Sur le terrain prud'homal, les données recueillies par un dispositif illicite sont écartées des débats : un licenciement fondé sur elles est fragilisé. Enfin, un dispositif dissimulé relève du pénal.",
  },
  {
    question: "Le micro embarqué dans un traceur est-il légal ?",
    answer:
      "L'article 226-1 du Code pénal punit d'un an d'emprisonnement et de 45 000 € d'amende le fait de capter, sans le consentement de leur auteur, des paroles prononcées à titre privé. Écouter l'habitacle d'un véhicule conduit par un salarié ou un tiers relève directement de ce texte. La fonction micro doit être réservée à un usage de sécurité — écouter l'environnement d'un véhicule volé, après dépôt de plainte — et jamais utilisée comme moyen de surveillance.",
  },
  {
    question: "Puis-je géolocaliser un véhicule que je loue à un client ?",
    answer:
      "Oui, à condition que le contrat de location mentionne clairement le dispositif avant signature, avec sa finalité et la durée de conservation. Une géolocalisation dissimulée d'un client est illicite. Si vous prévoyez une clause d'immobilisation à distance, elle doit également figurer au contrat et rester proportionnée à la situation qui la déclenche.",
  },
  {
    question: "Faut-il déclarer le dispositif à la CNIL ?",
    answer:
      "Non. Le régime de déclaration préalable a disparu avec l'entrée en application du RGPD en 2018. L'entreprise doit en revanche documenter sa conformité : inscription au registre des traitements, information des personnes, et analyse d'impact lorsque le traitement présente un risque élevé — ce qui peut être le cas d'un suivi permanent d'un grand nombre de salariés.",
  },
];

const modeles = [
  {
    titre: "Note d'information aux salariés",
    ref: "Article L.1222-4 du Code du travail",
    desc: "Le document à remettre individuellement à chaque salarié avant la mise en service, précisant le dispositif, sa finalité, les données collectées et les droits.",
  },
  {
    titre: "Mention pour le registre des traitements",
    ref: "Article 30 du RGPD",
    desc: "Le paragraphe à intégrer à votre registre : finalité, catégories de données, destinataires, durée de conservation, mesures de sécurité.",
  },
  {
    titre: "Clause de géolocalisation pour contrat de location",
    ref: "Information précontractuelle",
    desc: "La clause à insérer dans vos contrats si vous louez des véhicules équipés, y compris pour une éventuelle immobilisation à distance.",
  },
  {
    titre: "Point d'information pour la consultation du CSE",
    ref: "Article L.2312-38 du Code du travail",
    desc: "La trame de présentation au comité social et économique, à joindre à l'ordre du jour.",
  },
];

export default function GuideLegalPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={faq} />
      <SpeakableJsonLd url={`${site.url}/guide-legal`} />
      <HowToJsonLd
        name="Mettre en place une géolocalisation de véhicules conforme"
        steps={etapes}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary text-white mt-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
              Guide légal
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-white">
              Géolocaliser un véhicule : ce que la loi autorise vraiment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Les obligations réelles, article par article, et ce qui expose à
              des sanctions. Écrit pour être utilisable, pas pour rassurer.
            </p>
          </div>
        </div>
      </section>

      {/* Le point de départ */}
      <Section>
        <div className="max-w-3xl">
          <p className="eyebrow">Le point de départ</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">
            Tout dépend de qui conduit le véhicule
          </h2>
          <div className="rule mt-5" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            La question « ai-je le droit de poser un traceur » n&apos;a pas une
            réponse mais deux, et la frontière est nette.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-success/40 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-success">
                Aucune formalité
              </p>
              <h3 className="mt-2 text-lg font-bold">
                Votre véhicule, que vous conduisez seul
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Vous êtes propriétaire, vous êtes le seul utilisateur. Vous
                pouvez équiper le véhicule librement : aucune déclaration,
                aucune information à donner, aucune limite de conservation.
              </p>
            </div>
            <div className="rounded-xl border-2 border-destructive/40 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-destructive">
                Obligations strictes
              </p>
              <h3 className="mt-2 text-lg font-bold">
                Un véhicule conduit par quelqu&apos;un d&apos;autre
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Salarié, locataire, proche : dès qu&apos;une autre personne
                conduit, vous traitez des données personnelles la concernant.
                Six obligations s&apos;appliquent, détaillées ci-dessous.
              </p>
            </div>
          </div>
          <p className="mt-8 rounded-lg border-l-4 border-destructive bg-muted p-5 text-sm leading-relaxed">
            <strong>Le point qui ne se négocie pas.</strong> Poser un traceur à
            l&apos;insu d&apos;une personne pour suivre ses déplacements est un
            délit. Aucune justification — soupçon, conflit, séparation — ne rend
            la démarche licite. Si votre besoin relève d&apos;une situation
            personnelle, adressez-vous à un avocat ou aux forces de
            l&apos;ordre, pas à un vendeur de traceurs.
          </p>
        </div>
      </Section>

      {/* Les 6 étapes */}
      <Section className="bg-muted">
        <SectionHead
          eyebrow="La procédure"
          title="Six obligations, dans cet ordre"
          lead="Elles sont cumulatives : en omettre une suffit à rendre le dispositif contestable, et les données inexploitables devant un conseil de prud'hommes."
        />
        <ol className="mt-12 space-y-px bg-border border border-border rounded-lg overflow-hidden">
          {etapes.map((e, i) => (
            <li key={e.name} className="bg-white p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="sm:w-1/3 flex items-start gap-4">
                  <span className="text-3xl font-bold text-cta leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{e.name}</h3>
                </div>
                <p className="sm:w-2/3 text-sm leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Ce qui est interdit */}
      <Section>
        <SectionHead
          eyebrow="Les interdits"
          title="Ce qu'aucune finalité ne justifie"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "La géolocalisation permanente",
              d: "Un suivi qui ne s'interrompt jamais est disproportionné, quelle que soit la finalité invoquée. Le salarié doit pouvoir désactiver le dispositif.",
            },
            {
              t: "Les trajets domicile-travail",
              d: "Ils relèvent de la vie privée et ne peuvent jamais être tracés, même pendant une période d'astreinte.",
            },
            {
              t: "L'écoute à l'insu de la personne",
              d: "Article 226-1 du Code pénal : un an d'emprisonnement et 45 000 € d'amende pour la captation de paroles privées sans consentement.",
            },
          ].map((x) => (
            <div key={x.t} className="border-t-2 border-destructive pt-5">
              <h3 className="text-lg font-bold">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {x.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sanctions */}
      <Section className="bg-primary text-white">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cta">
            Ce que vous risquez
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl text-white">
            Trois risques distincts, dont un que peu d&apos;employeurs anticipent
          </h2>
          <div className="mt-5 h-0.5 w-12 bg-cta" />
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Sanction de la CNIL</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Mise en demeure, puis sanction financière pouvant atteindre 4 %
                du chiffre d&apos;affaires mondial. Les décisions sont publiées,
                ce qui ajoute un coût de réputation au coût financier.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Preuve écartée devant les prud&apos;hommes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                C&apos;est le risque le plus fréquent, et le moins anticipé. Les
                données issues d&apos;un dispositif irrégulier sont écartées des
                débats. Un licenciement fondé sur elles se retrouve sans
                fondement — l&apos;entreprise perd sur le terrain qu&apos;elle
                pensait avoir sécurisé.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Responsabilité pénale</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Un dispositif dissimulé, ou l&apos;usage d&apos;un micro à
                l&apos;insu de la personne, relève du Code pénal. La
                responsabilité est personnelle : elle pèse sur le dirigeant, pas
                seulement sur la société.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Modèles */}
      <Section>
        <SectionHead
          eyebrow="Documents"
          title="Les modèles que nous fournissons"
          lead="Remis gratuitement avec chaque déploiement professionnel, et disponibles sur simple demande même si vous ne nous achetez rien."
        />
        <div className="mt-10 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-2">
          {modeles.map((m) => (
            <div key={m.titre} className="bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-cta">
                {m.ref}
              </p>
              <h3 className="mt-2 text-lg font-bold">{m.titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTA href="/devis">Demander les modèles</CTA>
          <Link href="/secteurs/flotte-entreprise" className="btn btn-outline text-primary">
            Équiper une flotte
          </Link>
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Ces documents sont des modèles à adapter à votre situation. Ils ne
          constituent pas une consultation juridique et n&apos;engagent pas
          notre responsabilité. Pour un déploiement de grande ampleur ou une
          situation particulière, faites valider votre dispositif par un conseil.
        </p>
      </Section>

      <Section className="bg-muted">
        <SectionHead eyebrow="Questions fréquentes" title="Géolocalisation et droit" />
        <div className="mt-10 max-w-4xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl">
            Un dispositif conforme dès le premier jour
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Nous livrons la documentation avec le matériel, et nous paramétrons
            les durées de conservation et les plages horaires à votre place.
            C&apos;est plus rapide que de régulariser après coup.
          </p>
          <div className="mt-8">
            <CTA href="/devis">Demander un devis</CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
