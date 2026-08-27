import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/data/site";
import "./globals.css";

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Track My Cars — Traceur GPS véhicules, flottes et poids lourds en PACA",
    template: "%s · Track My Cars",
  },
  description: site.description,
  keywords: [
    "traceur GPS véhicule",
    "tracker GPS voiture",
    "géolocalisation flotte entreprise",
    "GPS poids lourd",
    "antivol GPS",
    "traceur GPS Marseille",
    "GPS flotte Nice",
    "tracker GPS Toulon",
    "boîtier GPS professionnel PACA",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    ...(GOOGLE_VERIFICATION && { google: GOOGLE_VERIFICATION }),
    ...(BING_VERIFICATION && { other: { "msvalidate.01": BING_VERIFICATION } }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0d2233" />
        {/* Local SEO — région PACA */}
        <meta name="geo.region" content="FR-PAC" />
        <meta name="geo.placename" content="Provence-Alpes-Côte d'Azur, France" />
        <meta name="geo.position" content="43.5297;5.4474" />
        <meta name="ICBM" content="43.5297, 5.4474" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Aller au contenu principal
        </a>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
