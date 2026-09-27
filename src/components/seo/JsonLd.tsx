import { site } from "@/lib/data/site";
import { cities } from "@/lib/data/cities";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        description: site.description,
        telephone: site.phone,
        email: site.email,
        areaServed: [
          { "@type": "AdministrativeArea", name: site.region },
          ...cities.map((c) => ({ "@type": "City", name: c.label })),
        ],
        sameAs: [site.social.instagram, site.social.tiktok, site.social.snapchat],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phone,
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: ["French"],
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "fr-FR",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${site.url}/produits?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function LocalBusinessJsonLd({
  city,
  lat,
  lng,
  department,
}: {
  city?: string;
  lat?: number;
  lng?: number;
  department?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "AutoPartsStore",
        "@id": city ? `${site.url}/#business-${city}` : `${site.url}/#business`,
        name: city ? `${site.name} — ${city}` : site.name,
        image: `${site.url}/opengraph-image`,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        priceRange: "€€",
        description: city
          ? `Installation et livraison de trackers GPS à ${city}${department ? ` (${department})` : ""}.`
          : site.description,
        address: {
          "@type": "PostalAddress",
          addressRegion: site.region,
          addressCountry: "FR",
          ...(city && { addressLocality: city }),
        },
        ...(lat &&
          lng && {
            geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
          }),
        // Toutes les villes couvertes, pas seulement la région : c'est ce
        // qui fait remonter la fiche sur les requêtes locales.
        areaServed: city
          ? { "@type": "City", name: city }
          : [
              { "@type": "AdministrativeArea", name: site.region },
              ...cities.map((c) => ({
                "@type": "City",
                name: c.label,
                containedInPlace: {
                  "@type": "AdministrativeArea",
                  name: c.department,
                },
              })),
            ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "19:00",
        },
        parentOrganization: { "@id": `${site.url}/#organization` },
      }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  image,
  price,
  slug,
  features,
}: {
  name: string;
  description: string;
  image: string;
  price: number;
  slug: string;
  features?: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${site.url}/produits/${slug}/#product`,
        name,
        description,
        image: `${site.url}${image}`,
        sku: slug.toUpperCase(),
        brand: { "@type": "Brand", name: site.name },
        category: "Traceur GPS véhicule",
        ...(features && {
          additionalProperty: features.map((f) => ({
            "@type": "PropertyValue",
            name: f,
          })),
        }),
        offers: {
          "@type": "Offer",
          url: `${site.url}/produits/${slug}`,
          priceCurrency: "EUR",
          price: price.toFixed(2),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "EUR",
            },
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: "FR",
            },
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "FR",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 14,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
          seller: { "@id": `${site.url}/#organization` },
        },
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  serviceType,
  areaServed,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}/#service`,
        name,
        description,
        serviceType,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: areaServed
          ? { "@type": "City", name: areaServed }
          : { "@type": "AdministrativeArea", name: site.region },
        url,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "7.50",
            priceCurrency: "EUR",
            unitText: "MON",
            name: "Abonnement connectivité, formule 12 mois",
          },
        },
      }}
    />
  );
}

export function FAQJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url.startsWith("http") ? item.url : `${site.url}${item.url}`,
        })),
      }}
    />
  );
}

export function ItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        numberOfItems: items.length,
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          url: item.url.startsWith("http") ? item.url : `${site.url}${item.url}`,
        })),
      }}
    />
  );
}

export function HowToJsonLd({
  name,
  steps,
}: {
  name: string;
  steps: { name: string; text: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }}
    />
  );
}

/**
 * Speakable — indique aux assistants vocaux quels passages lire à voix haute.
 * À poser sur les pages qui répondent à une question directe.
 */
export function SpeakableJsonLd({
  url,
  selectors = ["h1", ".speakable"],
}: {
  url: string;
  selectors?: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: selectors,
        },
      }}
    />
  );
}
