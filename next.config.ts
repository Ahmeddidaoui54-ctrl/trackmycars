import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  img-src 'self' data: blob:;
  media-src 'self';
  connect-src 'self' ws: wss: https://www.google-analytics.com;
  worker-src 'self' blob:;
  form-action 'self';
  frame-ancestors 'none';
  base-uri 'self';
  ${isDev ? "" : "upgrade-insecure-requests;"}
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  async redirects() {
    return [
      // — Fusion interne : une seule page tarifs, pour ne pas diviser le signal
      { source: "/abonnements", destination: "/tarifs", permanent: true },

      // — Anciennes URL WordPress, toutes indexées au 28/09/2026.
      //   Sans ces 301, la refonte perd l'antériorité acquise depuis 2025.
      { source: "/nos-abonnements", destination: "/tarifs", permanent: true },
      { source: "/shop", destination: "/produits", permanent: true },
      { source: "/product-category/gps", destination: "/produits", permanent: true },
      { source: "/product-category/sabonner", destination: "/tarifs", permanent: true },

      // Fiches produit WooCommerce → nouvelles fiches
      { source: "/product/tracker-mini", destination: "/produits/tracker-mini", permanent: true },
      { source: "/product/tracker-obd", destination: "/produits/tracker-obd", permanent: true },
      { source: "/product/tracker-aimante", destination: "/produits/tracker-aimante", permanent: true },
      { source: "/product/tracker-coupe-moteur", destination: "/produits/tracker-coupe-moteur", permanent: true },
      { source: "/product/tracker-gps-batterie", destination: "/produits/tracker-batterie", permanent: true },

      // Les abonnements étaient vendus comme des produits WooCommerce
      { source: "/product/1-mois", destination: "/tarifs", permanent: true },
      { source: "/product/6-mois", destination: "/tarifs", permanent: true },
      { source: "/product/12-mois", destination: "/tarifs", permanent: true },

      // Tunnel WooCommerce : plus de panier, on passe par le devis
      { source: "/cart", destination: "/devis", permanent: true },
      { source: "/checkout", destination: "/devis", permanent: true },
      { source: "/my-account", destination: "/contact", permanent: true },

      // Contenus de démonstration WordPress restés en ligne
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/2025/01/01/hello-world", destination: "/blog", permanent: true },

      // Filet : toute autre ancienne fiche produit
      { source: "/product/:slug", destination: "/produits", permanent: true },
    ];
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
