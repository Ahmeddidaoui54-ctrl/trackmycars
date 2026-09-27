import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Demander un devis traceur GPS",
  description:
    "Décrivez votre parc et votre besoin : nous revenons vers vous avec une configuration chiffrée, le délai d'installation et le tarif total. Réponse sous 24 h ouvrées.",
  alternates: { canonical: "/devis" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Demander un devis", href: "/devis" },
];

export default function DevisPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow">Devis</p>
            <h1 className="mt-3 text-3xl sm:text-4xl">
              Dites-nous ce que vous devez protéger
            </h1>
            <div className="rule mt-5" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Un véhicule ou deux cents, une voiture personnelle ou une flotte de
              poids lourds : nous répondons avec une configuration chiffrée, pas avec
              un catalogue. Réponse sous 24 heures ouvrées.
            </p>

            <dl className="mt-10 space-y-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Téléphone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.phone}`}
                    className="text-lg font-bold hover:text-accent"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold hover:text-accent"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-accent"
                  >
                    Ouvrir une conversation
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Zone d&apos;intervention
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {site.region} — installation sur site. Livraison gratuite partout en
                  France pour les modèles sans installation.
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </div>
    </>
  );
}
