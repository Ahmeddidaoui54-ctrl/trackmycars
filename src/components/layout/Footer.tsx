import Link from "next/link";
import { site } from "@/lib/data/site";
import { sectors } from "@/lib/data/sectors";
import { products } from "@/lib/data/products";
import { cities } from "@/lib/data/cities";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="font-bold text-lg">Track My Cars</span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              Suivi GPS professionnel pour véhicules, flottes et matériels.
              Installation et livraison sur toute la région {site.region}.
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
              <a href={`tel:${site.phone}`} className="block font-semibold hover:text-accent">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="block text-primary-foreground/70 hover:text-accent">
                {site.email}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-accent"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Produits</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/produits/${p.slug}`}
                    className="text-primary-foreground/70 hover:text-accent"
                  >
                    {p.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/abonnements" className="text-primary-foreground/70 hover:text-accent">
                  Abonnements
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Secteurs</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/secteurs/${s.slug}`}
                    className="text-primary-foreground/70 hover:text-accent"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Zones</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {cities.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/zones/${c.slug}`}
                    className="text-primary-foreground/70 hover:text-accent"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/zones" className="text-accent font-medium">
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/contact" className="hover:text-accent">Contact</Link>
            <Link href="/mentions-legales" className="hover:text-accent">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-accent">CGV</Link>
            <Link href="/politique-confidentialite" className="hover:text-accent">Confidentialité</Link>
            <Link href="/plan-du-site" className="hover:text-accent">Plan du site</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
