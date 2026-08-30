import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/data/articles";
import { site } from "@/lib/data/site";
import { Section, SectionHead, CTA, Breadcrumbs, FaqList } from "@/components/ui/Section";
import { BreadcrumbJsonLd, FAQJsonLd, JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.metaTitle,
      description: a.metaDescription,
      url: `${site.url}/blog/${a.slug}`,
      publishedTime: a.published,
      modifiedTime: a.updated,
    },
  };
}

const dateFR = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const others = articles.filter((x) => x.slug !== a.slug);

  const crumbs = [
    { name: "Accueil", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: a.title, href: `/blog/${a.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.name, url: c.href }))} />
      <FAQJsonLd questions={a.faq} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${site.url}/blog/${a.slug}/#article`,
          headline: a.title,
          description: a.metaDescription,
          datePublished: a.published,
          dateModified: a.updated,
          inLanguage: "fr-FR",
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${site.url}/blog/${a.slug}`,
          },
          articleSection: "Sécurité des véhicules",
          keywords: a.keywords.join(", "),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* En-tête */}
      <header className="mx-auto max-w-3xl px-4 pt-10 pb-2">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          <time dateTime={a.published}>{dateFR(a.published)}</time>
          <span aria-hidden="true"> · </span>
          {a.readingMinutes} min de lecture
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12]">
          {a.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {a.standfirst}
        </p>
        <div className="mt-8 h-0.5 w-12 bg-cta" />
      </header>

      {/* Corps */}
      <div className="mx-auto max-w-3xl px-4 pb-4">
        {a.sections.map((s) => (
          <section key={s.h2} className="mt-12">
            <h2 className="text-2xl font-bold leading-snug">{s.h2}</h2>
            {s.paras.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed">
                {p}
              </p>
            ))}

            {s.list && (
              <ul className="mt-6 space-y-4">
                {s.list.map((item) => (
                  <li key={item.body.slice(0, 40)} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cta" aria-hidden="true" />
                    <span>
                      {item.title && (
                        <span className="block font-bold">{item.title}</span>
                      )}
                      <span className="block text-base leading-relaxed text-muted-foreground">
                        {item.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {s.callout && (
              <aside
                className={`mt-7 rounded-lg border-l-4 p-5 ${
                  s.callout.tone === "warn"
                    ? "border-destructive bg-destructive/5"
                    : "border-cta bg-muted"
                }`}
              >
                <p className="text-sm font-bold">{s.callout.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.callout.body}
                </p>
              </aside>
            )}
          </section>
        ))}
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-3xl px-4 pt-14">
        <h2 className="text-2xl font-bold">Questions fréquentes</h2>
        <div className="mt-6">
          <FaqList items={a.faq} />
        </div>
      </div>

      {/* Liens utiles */}
      <div className="mx-auto max-w-3xl px-4 pt-14">
        <p className="eyebrow">Sur le même sujet</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {a.related.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="inline-block border border-border/60 rounded-md px-4 py-2 text-sm font-medium hover:border-cta hover:text-cta transition-colors"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Autres articles */}
      {others.length > 0 && (
        <Section className="bg-muted mt-16">
          <SectionHead eyebrow="À lire aussi" title="Nos autres articles" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <article
                key={o.slug}
                className="rounded-xl border border-border/50 bg-white p-6"
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  <time dateTime={o.published}>{dateFR(o.published)}</time>
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug">
                  <Link href={`/blog/${o.slug}`} className="hover:text-cta transition-colors">
                    {o.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {o.standfirst}
                </p>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl">Protéger un véhicule ou une flotte</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Dites-nous ce que vous devez protéger et comment vous l&apos;utilisez.
            Nous répondons avec une configuration chiffrée, sans surdimensionner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href="/devis">Demander un devis</CTA>
            <a
              href={`tel:${site.phone}`}
              className="btn btn-outline text-primary"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
