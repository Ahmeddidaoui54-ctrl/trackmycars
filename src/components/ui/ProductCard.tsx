import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col border border-border/50 rounded-xl bg-white overflow-hidden hover:border-cta hover:shadow-md transition-[border-color,box-shadow] duration-200">
      <Link
        href={`/produits/${product.slug}`}
        className="block aspect-4/3 bg-muted overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.image}
          alt=""
          width={480}
          height={360}
          priority={priority}
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          className="h-full w-full object-contain p-6 transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-tight">
          <Link href={`/produits/${product.slug}`} className="hover:text-cta transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{product.tagline}</p>
        <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-cta" aria-hidden="true">▪</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-primary tabular-nums">
            {product.price} €
          </span>
          <Link
            href={`/produits/${product.slug}`}
            className="text-sm font-semibold text-cta hover:underline"
          >
            Voir le produit →
          </Link>
        </div>
      </div>
    </article>
  );
}
