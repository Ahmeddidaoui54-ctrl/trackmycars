import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`${dark ? "bg-primary text-white " : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  centered = false,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  centered?: boolean;
  /**
   * Niveau du titre. Une page doit avoir exactement un H1 : sur les pages
   * d'index, le premier SectionHead le porte.
   */
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="mt-3 text-3xl sm:text-4xl">{title}</Heading>
      <div className={`rule mt-5 ${centered ? "mx-auto" : ""}`} />
      {lead && <p className="mt-5 text-base leading-relaxed opacity-80">{lead}</p>}
    </div>
  );
}

export function CTA({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
}) {
  const styles = {
    primary: "bg-cta text-cta-foreground hover:opacity-90",
    outline: "border border-current hover:bg-cta hover:text-cta-foreground hover:border-cta",
    light: "bg-background text-primary hover:bg-cta hover:text-cta-foreground",
  };
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold transition-all ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className="text-foreground font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-cta">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
            <h3 className="text-base font-semibold leading-snug">{item.question}</h3>
            <span className="mt-1 shrink-0 text-cta transition-transform group-open:rotate-45" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-3xl">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
