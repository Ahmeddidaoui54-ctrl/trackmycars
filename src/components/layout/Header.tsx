"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/data/site";
import { sectors } from "@/lib/data/sectors";
import { products } from "@/lib/data/products";

const nav = [
  { href: "/produits", label: "Produits" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/zones", label: "Zones desservies" },
  { href: "/abonnements", label: "Abonnements" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"produits" | "secteurs" | null>(null);

  return (
    <>
      {/* Bandeau garanties */}
      <div className="bg-primary text-primary-foreground text-[11px]">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {site.guarantees.map((g) => (
            <span key={g.label} className="flex items-center gap-1.5">
              <span className="inline-block h-1 w-1 rounded-full bg-accent" />
              <span className="font-medium tracking-wide uppercase">{g.label}</span>
            </span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="relative flex h-2.5 w-2.5 text-accent pulse-dot">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-bold text-lg tracking-tight text-primary">
                Track My Cars
              </span>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              <div
                className="relative"
                onMouseEnter={() => setMenu("produits")}
                onMouseLeave={() => setMenu(null)}
              >
                <Link
                  href="/produits"
                  className="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
                >
                  Produits
                </Link>
                {menu === "produits" && (
                  <div className="absolute left-0 top-full w-72 bg-background border border-border rounded-md shadow-lg p-2">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/produits/${p.slug}`}
                        className="block px-3 py-2 rounded-sm hover:bg-muted"
                      >
                        <span className="block text-sm font-medium">{p.shortName}</span>
                        <span className="block text-xs text-muted-foreground">
                          {p.price} € · {p.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setMenu("secteurs")}
                onMouseLeave={() => setMenu(null)}
              >
                <Link
                  href="/secteurs"
                  className="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
                >
                  Secteurs
                </Link>
                {menu === "secteurs" && (
                  <div className="absolute left-0 top-full w-[32rem] bg-background border border-border rounded-md shadow-lg p-2 grid grid-cols-2 gap-0.5">
                    {sectors.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/secteurs/${s.slug}`}
                        className="block px-3 py-2 text-sm rounded-sm hover:bg-muted"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {nav.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${site.phone}`}
                className="hidden sm:block text-sm font-semibold text-primary hover:text-accent"
              >
                {site.phoneDisplay}
              </a>
              <Link
                href="/devis"
                className="hidden sm:inline-flex bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Demander un devis
              </Link>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 -mr-2"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {open ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Nav mobile */}
        {open && (
          <nav className="lg:hidden border-t border-border bg-background" aria-label="Navigation mobile">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium border-b border-border last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/devis"
                onClick={() => setOpen(false)}
                className="mt-3 bg-accent text-accent-foreground px-4 py-2.5 rounded-md text-sm font-semibold text-center"
              >
                Demander un devis
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="mt-2 border border-border px-4 py-2.5 rounded-md text-sm font-semibold text-center"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
