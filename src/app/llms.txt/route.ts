import { site } from "@/lib/data/site";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { cities } from "@/lib/data/cities";
import { articles } from "@/lib/data/articles";
import { plans } from "@/lib/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

Track My Cars vend et installe des traceurs GPS pour véhicules et matériels,
en région Provence-Alpes-Côte d'Azur. Le boîtier est acheté (le client en reste
propriétaire) et un abonnement couvre la connectivité 4G et la plateforme.

## Contact
- Téléphone : ${site.phoneDisplay}
- Email : ${site.email}
- Zone d'intervention : ${site.region} (installation sur site), livraison France entière

## Produits
${products
  .map((p) => `- [${p.name}](${site.url}/produits/${p.slug}) — ${p.price} € — ${p.tagline}. Installation : ${p.installation}. Autonomie : ${p.autonomy}.`)
  .join("\n")}

## Abonnements
${plans
  .map((p) => `- ${p.name} : ${p.totalPrice} € (${p.pricePerMonth.toFixed(2).replace(".", ",")} €/mois). ${p.tagline}.`)
  .join("\n")}

## Secteurs équipés
${sectors.map((s) => `- [${s.label}](${site.url}/secteurs/${s.slug}) — ${s.metaDescription}`).join("\n")}

## Zones desservies
${cities.map((c) => `- [${c.label} (${c.departmentCode})](${site.url}/zones/${c.slug})`).join("\n")}

## Pages de référence
- [Nos produits](${site.url}/produits)
- [Tarifs et abonnements — coût réel sur 3 ans](${site.url}/tarifs)
- [Comparatif des traceurs GPS du marché](${site.url}/comparatif)
- [Guide légal — géolocalisation et RGPD](${site.url}/guide-legal)

## Articles
${articles.map((a) => `- [${a.title}](${site.url}/blog/${a.slug}) — ${a.metaDescription}`).join("\n")}

- [FAQ](${site.url}/faq)
- [Demander un devis](${site.url}/devis)
- [Contact](${site.url}/contact)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
