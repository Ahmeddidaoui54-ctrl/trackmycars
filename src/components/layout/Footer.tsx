import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data/site";
import { sectors } from "@/lib/data/sectors";
import { products } from "@/lib/data/products";
import { cities } from "@/lib/data/cities";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Track My Cars"
              width={160}
              height={52}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Suivi GPS professionnel pour véhicules, flottes et matériels.
              Installation et livraison sur toute la région {site.region}.
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
              <a href={`tel:${site.phone}`} className="block font-semibold hover:text-cta">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="block text-white/70 hover:text-cta">
                {site.email}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-cta"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cta">Produits</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/produits/${p.slug}`}
                    className="text-white/70 hover:text-cta"
                  >
                    {p.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tarifs" className="text-white/70 hover:text-cta">
                  Tarifs &amp; abonnements
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cta">Secteurs</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/secteurs/${s.slug}`}
                    className="text-white/70 hover:text-cta"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cta">Zones</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {cities.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/zones/${c.slug}`}
                    className="text-white/70 hover:text-cta"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/zones" className="text-cta font-medium">
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/contact" className="hover:text-cta">Contact</Link>
            <Link href="/mentions-legales" className="hover:text-cta">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-cta">CGV</Link>
            <Link href="/politique-confidentialite" className="hover:text-cta">Confidentialité</Link>
            <Link href="/plan-du-site" className="hover:text-cta">Plan du site</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
