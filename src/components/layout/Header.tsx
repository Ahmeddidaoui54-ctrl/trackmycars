"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data/site";
import { sectors } from "@/lib/data/sectors";
import { products } from "@/lib/data/products";

/** Bandeau de réassurance — repris du site actuel */
const badges = [
  { label: "Support Français", icon: "/images/icon-support.svg" },
  { label: "Paiement Sécurisé", icon: "/images/icon-paiement.svg" },
  { label: "Retours", icon: "/images/icon-retours.svg" },
  { label: "Livraison Gratuite", icon: "/images/icon-livraison.svg" },
];

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/zones", label: "Zones" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/comparatif", label: "Comparatif" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"produits" | "secteurs" | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Petit délai à la fermeture : le curseur peut traverser le vide
   *  entre le lien et le panneau sans que le menu disparaisse. */
  function openMenu(key: "produits" | "secteurs") {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 180);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {badges.map((b) => (
            <span key={b.label} className="flex items-center gap-2">
              <Image src={b.icon} alt="" width={18} height={18} className="opacity-90" />
              <span className="text-[11px] font-semibold uppercase tracking-wide">
                {b.label}
              </span>
            </span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-background border-b border-border/60 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link href="/" className="shrink-0" aria-label="Track My Cars — accueil">
              <Image
                src="/images/logo.png"
                alt="Track My Cars"
                width={150}
                height={48}
                priority
                className="h-11 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center" aria-label="Navigation principale">
              {nav.map((item) => {
                const isProduits = item.href === "/produits";
                const isSecteurs = item.href === "/secteurs";
                const key = isProduits ? "produits" : isSecteurs ? "secteurs" : null;
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => key && openMenu(key)}
                    onMouseLeave={() => key && scheduleClose()}
                    onFocus={() => key && openMenu(key)}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-6 text-sm font-semibold uppercase tracking-wide text-primary hover:text-cta transition-colors"
                    >
                      {item.label}
                    </Link>

                    {key === "produits" && menu === "produits" && (
                      <div className="absolute left-0 top-full w-72 bg-background border border-border/60 rounded-md shadow-lg p-2 origin-top animate-[dropdown_.16s_ease-out]">
                        {products.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/produits/${p.slug}`}
                            className="block px-3 py-2 rounded-sm hover:bg-muted transition-colors"
                          >
                            <span className="block text-sm font-semibold text-primary">
                              {p.shortName}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {p.price} € · {p.tagline}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {key === "secteurs" && menu === "secteurs" && (
                      <div className="absolute left-0 top-full w-[30rem] bg-background border border-border/60 rounded-md shadow-lg p-2 grid grid-cols-2 gap-0.5 origin-top animate-[dropdown_.16s_ease-out]">
                        {sectors.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/secteurs/${s.slug}`}
                            className="block px-3 py-2 text-sm rounded-sm hover:bg-muted transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${site.phone}`}
                className="hidden sm:block text-sm font-bold text-primary hover:text-cta"
              >
                {site.phoneDisplay}
              </a>
              <Link href="/devis" className="hidden sm:inline-flex btn btn-primary btn-sm">
                Demande de devis
              </Link>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 -mr-2 text-primary"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-border/60 bg-background" aria-label="Navigation mobile">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold uppercase tracking-wide text-primary border-b border-border/40 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/devis"
                onClick={() => setOpen(false)}
                className="mt-4 btn btn-primary"
              >
                Demande de devis
              </Link>
              <a href={`tel:${site.phone}`} className="mt-2 btn btn-outline text-primary">
                {site.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
