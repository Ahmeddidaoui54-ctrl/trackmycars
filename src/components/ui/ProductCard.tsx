import Link from "next/link";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col border border-border rounded-lg bg-background overflow-hidden hover:border-accent transition-colors">
      <div className="aspect-4/3 bg-muted flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-tight">
          <Link href={`/produits/${product.slug}`} className="hover:text-accent">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{product.tagline}</p>
        <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">▪</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-3">
          <span className="stat-value text-xl">{product.price} €</span>
          <Link
            href={`/produits/${product.slug}`}
            className="text-sm font-semibold text-accent hover:underline"
          >
            Voir le produit →
          </Link>
        </div>
      </div>
    </article>
  );
}
