import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { cities, getSectorCityPairs } from "@/lib/data/cities";
import { articles } from "@/lib/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = ([
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/produits`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/secteurs`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/zones`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/tarifs`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/comparatif`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/guide-legal`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/devis`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/cgv`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/politique-confidentialite`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/plan-du-site`, changeFrequency: "monthly", priority: 0.3 },
  ] as const).map((p) => ({ ...p, lastModified: now }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/produits/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const sectorPages: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${site.url}/secteurs/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${site.url}/zones/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const sectorCityPages: MetadataRoute.Sitemap = getSectorCityPairs().map((p) => ({
    url: `${site.url}/secteurs/${p.sectorSlug}/${p.citySlug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(a.updated),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...articlePages,
    ...productPages,
    ...sectorPages,
    ...cityPages,
    ...sectorCityPages,
  ];
}
