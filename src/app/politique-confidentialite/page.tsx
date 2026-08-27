import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Traitement des données personnelles et de géolocalisation par Track My Cars : finalités, durées de conservation, hébergement en Union européenne et droits RGPD.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export default function ConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl">Politique de confidentialité</h1>
          <div className="rule mt-5" />

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-bold text-foreground">
                Données collectées
              </h2>
              <p className="mt-3">
                Deux catégories de données sont traitées. D&apos;une part, les données
                de contact que vous nous transmettez volontairement via le formulaire
                de devis : nom, société, téléphone, email, ville et description du
                besoin. D&apos;autre part, les données de géolocalisation transmises
                par les boîtiers dont vous êtes titulaire : positions horodatées,
                vitesse, état du moteur et événements d&apos;alerte.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">Finalités</h2>
              <p className="mt-3">
                Les données de contact servent exclusivement à traiter votre demande et
                à assurer le suivi commercial. Les données de géolocalisation sont
                traitées pour vous restituer le service de suivi que vous avez
                souscrit. Elles ne sont ni revendues, ni transmises à des tiers à des
                fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">
                Durées de conservation
              </h2>
              <p className="mt-3">
                Les historiques de position sont conservés au maximum douze mois et
                paramétrables à la baisse depuis votre compte. Dans un contexte
                professionnel, la CNIL retient une durée de deux mois en principe pour
                les données de géolocalisation des salariés : il vous appartient de
                régler la conservation en conséquence. Les données de contact issues
                d&apos;une demande de devis sont conservées trois ans à compter du
                dernier échange.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">Hébergement</h2>
              <p className="mt-3">
                Les données de géolocalisation sont hébergées sur des serveurs situés
                en Union européenne. Aucun transfert vers un pays tiers n&apos;est
                effectué sans les garanties prévues par le RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">
                Géolocalisation de tiers
              </h2>
              <p className="mt-3">
                Lorsque vous équipez un véhicule conduit par un salarié, un locataire
                ou toute autre personne, vous devenez responsable de traitement au sens
                du RGPD. Il vous appartient d&apos;informer individuellement les
                personnes concernées (article L.1222-4 du Code du travail), de consulter
                le CSE lorsqu&apos;il existe (article L.2312-38) et d&apos;inscrire le
                traitement à votre registre. Aucune déclaration préalable à la CNIL
                n&apos;est requise, mais une analyse d&apos;impact peut l&apos;être. La
                géolocalisation permanente est interdite et les trajets domicile-travail
                ne peuvent jamais être tracés. Nous mettons à votre disposition une note
                d&apos;information type.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">Vos droits</h2>
              <p className="mt-3">
                Vous disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement, de limitation, d&apos;opposition et de portabilité
                sur vos données. Pour l&apos;exercer, écrivez à {site.email}. Vous
                pouvez également introduire une réclamation auprès de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">Cookies</h2>
              <p className="mt-3">
                Ce site n&apos;utilise pas de cookie publicitaire ni de traceur
                tiers à des fins de profilage. Seuls des cookies strictement
                nécessaires au fonctionnement du site peuvent être déposés, sans
                consentement préalable requis.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
