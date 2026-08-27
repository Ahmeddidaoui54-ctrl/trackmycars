import type { NextConfig } from "next";

// Content Security Policy - protege contre XSS et injection
const isDev = process.env.NODE_ENV === "development";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://js.stripe.com https://maps.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com https://*.googleusercontent.com https://*.supabase.co https://api.qrserver.com https://images.unsplash.com https://upload.wikimedia.org https://picsum.photos https://fastly.picsum.photos https://loremflickr.com https://*.staticflickr.com https://image.pollinations.ai;
  connect-src 'self' ws: wss: https://api.stripe.com https://maps.googleapis.com https://*.supabase.co wss://*.supabase.co;
  frame-src 'self' https://js.stripe.com https://hooks.stripe.com;
  worker-src 'self' blob:;
  form-action 'self';
  frame-ancestors 'none';
  base-uri 'self';
  ${isDev ? "" : "upgrade-insecure-requests;"}
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  // HSTS — force HTTPS pour 2 ans (preload-ready)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  // Empeche le site d'etre integre en iframe (protection clickjacking)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Empeche MIME-sniffing (protection injection type)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Referrer policy — ne leak pas les URLs completes
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Protection contre XSS (deprecated mais garde pour les vieux navigateurs)
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Permissions Policy — desactive les API non utilisees
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(self), payment=(self), usb=(), interest-cohort=()",
  },
  // Empeche le DNS prefetch excessif
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false, // Masque le header X-Powered-By: Next.js
  reactStrictMode: true,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
      {
        protocol: "https",
        hostname: "*.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "image.pollinations.ai",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/simulateur-vtc",
        destination: "/pro/simulateur",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Headers de securite appliques a toutes les routes
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/:all*(svg|jpg|png|webp|avif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=43200",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

// Bundle Analyzer — actif via ANALYZE=true npm run build
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default bundleAnalyzer(nextConfig);
