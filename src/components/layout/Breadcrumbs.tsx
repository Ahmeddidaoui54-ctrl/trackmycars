import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
}

export function Breadcrumbs({
  items,
  className = "",
  variant = "dark",
}: BreadcrumbsProps) {
  const colors =
    variant === "dark"
      ? "text-primary-foreground/70 hover:text-accent"
      : "text-muted-foreground hover:text-accent";
  const activeColor =
    variant === "dark" ? "text-accent" : "text-primary";

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={`text-xs uppercase tracking-[0.15em] ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`${colors} transition-colors`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={activeColor}>{item.label}</span>
              )}
              {!isLast && <span className={colors}>·</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
