import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact — Track My Cars",
  description:
    "Contactez Track My Cars : téléphone, email et WhatsApp. Équipe basée en France, réponse sous 24 h ouvrées. Intervention sur toute la région PACA.",
  alternates: { canonical: "/contact" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Contact", href: "/contact" },
];

const channels = [
  {
    label: "Téléphone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    detail: "Du lundi au samedi, de 8 h à 19 h. Le plus rapide pour un conseil technique.",
  },
  {
    label: "WhatsApp",
    value: "Ouvrir une conversation",
    href: site.whatsapp,
    detail: "Pratique pour envoyer une photo du véhicule ou du matériel à équiper.",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    detail: "Pour une demande détaillée, un devis de flotte ou une question administrative.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <LocalBusinessJsonLd />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Contact"
          title="Une équipe en France, joignable directement"
          lead="Pas de centre d'appel, pas de formulaire sans réponse. Vous parlez à quelqu'un qui connaît le matériel et peut vous dire, le cas échéant, qu'un traceur n'est pas la bonne réponse à votre besoin."
        />

        <div className="mt-14 grid gap-px bg-border border border-border rounded-lg overflow-hidden sm:grid-cols-3">
          {channels.map((c) => (
            <div key={c.label} className="bg-background p-7">
              <p className="eyebrow">{c.label}</p>
              <p className="mt-3">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-lg font-bold hover:text-accent"
                >
                  {c.value}
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-bold">Zone d&apos;intervention</h2>
          <div className="rule mt-3" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Nos techniciens se déplacent sur toute la région {site.region} pour les
            installations câblées : Bouches-du-Rhône, Var, Alpes-Maritimes, Vaucluse et
            Hautes-Alpes. Les modèles autonomes et OBD sont livrés gratuitement partout
            en France, sous 48 à 72 heures ouvrées.
          </p>
        </div>

        <div className="mt-10">
          <CTA href="/devis">Demander un devis</CTA>
        </div>
      </Section>
    </>
  );
}
