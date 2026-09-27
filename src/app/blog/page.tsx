import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/data/articles";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs } from "@/components/ui/Section";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog — vol, géolocalisation et droit",
  description:
    "Nos articles sur le vol de véhicules, la détection de traceurs, le cadre légal de la géolocalisation et la protection des flottes professionnelles.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { name: "Accueil", href: "/" },
  { name: "Blog", href: "/blog" },
];

const dateFR = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <ItemListJsonLd
        name="Articles Track My Cars"
        items={articles.map((a) => ({ name: a.title, url: `/blog/${a.slug}` }))}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <Section className="pt-6!">
        <SectionHead
          eyebrow="Blog"
          title="Ce qu'on sait, et qu'on préfère écrire"
          lead="Des articles utiles même à qui ne nous achètera rien : les démarches après un vol, la détection de traceurs, le cadre légal de la géolocalisation."
          as="h1"
        />

        <div className="mt-14 space-y-px bg-border border border-border rounded-lg overflow-hidden">
          {articles.map((a) => (
            <article key={a.slug} className="bg-white p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    <time dateTime={a.published}>{dateFR(a.published)}</time>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {a.readingMinutes} min de lecture
                  </p>
                </div>
                <div className="lg:w-3/4">
                  <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                    <Link href={`/blog/${a.slug}`} className="hover:text-cta transition-colors">
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {a.standfirst}
                  </p>
                  <p className="mt-4">
                    <Link
                      href={`/blog/${a.slug}`}
                      className="text-sm font-semibold text-cta hover:underline"
                    >
                      Lire l&apos;article →
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <CTA href={`mailto:${site.email}`}>Proposer un sujet</CTA>
        </div>
      </Section>
    </>
  );
}
