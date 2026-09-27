import Link from "next/link";
import { products, getProduct } from "@/lib/data/products";
import { plans } from "@/lib/data/site";

/**
 * Bandeau tarifaire affiché sur toute page commerciale.
 *
 * Règle héritée du projet VTC : une page commerciale sans prix chiffré ne
 * ranke pas, et n'est pas citée par les moteurs de réponse — une IA ne
 * reprend que ce qui est écrit noir sur blanc. Les montants sont donc en
 * clair dans le texte, pas seulement dans les données structurées.
 */
export function PriceStrip({
  /** Restreint l'affichage à certains produits (slugs) */
  only,
  /** Contexte affiché en tête, ex. "pour une flotte" ou "à Marseille" */
  context,
  className = "",
}: {
  only?: string[];
  context?: string;
  className?: string;
}) {
  const list = only
    ? only.map((s) => getProduct(s)).filter((p): p is NonNullable<typeof p> => Boolean(p))
    : products;

  const cheapest = Math.min(...list.map((p) => p.price));
  const best = plans.reduce((a, b) => (a.pricePerMonth <= b.pricePerMonth ? a : b));
  const monthly = best.pricePerMonth.toFixed(2).replace(".", ",");

  return (
    <div
      className={`rounded-xl border border-border/50 bg-white p-6 sm:p-7 ${className}`}
    >
      <p className="eyebrow">Tarifs {context ?? ""}</p>
      <p className="mt-3 text-lg font-bold leading-snug">
        À partir de{" "}
        <span className="text-cta">{cheapest} €</span> le boîtier, plus{" "}
        <span className="text-cta">{monthly} €</span> par mois de connectivité.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Le boîtier est un achat unique dont vous restez propriétaire.
        L&apos;abonnement couvre la carte SIM 4G et la plateforme : {plans
          .map(
            (p) =>
              `${p.totalPrice} € pour ${p.months} mois${
                p.months > 1
                  ? ` (${p.pricePerMonth.toFixed(2).replace(".", ",")} €/mois)`
                  : " sans engagement"
              }`
          )
          .join(", ")}
        . Livraison gratuite, garantie 2 ans.
      </p>

      <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {list.map((p) => (
          <li key={p.slug} className="flex items-baseline justify-between gap-3 text-sm">
            <Link
              href={`/produits/${p.slug}`}
              className="font-medium hover:text-cta transition-colors"
            >
              {p.shortName}
            </Link>
            <span className="shrink-0 font-bold tabular-nums text-primary">
              {p.price} €
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <Link href="/tarifs" className="font-semibold text-cta hover:underline">
          Le coût réel sur 3 ans →
        </Link>
        <Link href="/comparatif" className="font-semibold text-cta hover:underline">
          Comparatif du marché →
        </Link>
      </p>
    </div>
  );
}
