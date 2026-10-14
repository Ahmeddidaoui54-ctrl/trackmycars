import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${site.name} : éditeur du site, hébergement, propriété intellectuelle, traitement des données et médiation de la consommation.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Mentions légales", href: "/mentions-legales" },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl">Mentions légales</h1>
          <div className="rule mt-5" />

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-bold text-foreground">Éditeur du site</h2>
              <p className="mt-3">
                {site.legalName}
                <br />
                Téléphone : {site.phoneDisplay}
                <br />
                Email : {site.email}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">
                Directeur de la publication
              </h2>
              <p className="mt-3">
                {/* À compléter : nom du représentant légal */}
                Le représentant légal de {site.legalName}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">Hébergement</h2>
              <p className="mt-3">
                Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">
                Propriété intellectuelle
              </h2>
              <p className="mt-3">
                L&apos;ensemble des contenus présents sur ce site — textes, visuels,
                logos, structure — est protégé par le droit de la propriété
                intellectuelle. Toute reproduction, représentation ou adaptation,
                totale ou partielle, sans autorisation écrite préalable, est
                interdite.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">Responsabilité</h2>
              <p className="mt-3">
                Les informations publiées sur ce site sont fournies à titre indicatif
                et peuvent évoluer. {site.legalName} met tout en œuvre pour en assurer
                l&apos;exactitude mais ne saurait être tenue responsable des erreurs ou
                omissions, ni de l&apos;usage qui en serait fait.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground">
                Médiation de la consommation
              </h2>
              <p className="mt-3">
                {/* À compléter : nom et coordonnées du médiateur de la consommation */}
                Conformément à l&apos;article L.612-1 du Code de la consommation, tout
                consommateur peut recourir gratuitement à un médiateur de la
                consommation en vue de la résolution amiable d&apos;un litige.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
