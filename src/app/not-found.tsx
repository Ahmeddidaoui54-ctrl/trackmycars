import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-primary text-primary-foreground min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <span className="eyebrow block mb-4 !text-accent">Erreur 404</span>
        <h1 className="text-5xl sm:text-7xl font-bold">Route introuvable</h1>
        <div className="ornament mt-6" aria-hidden="true" />
        <p className="mt-6 text-lg text-primary-foreground/80 font-light leading-relaxed">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Notre
          chauffeur, lui, ne se trompe jamais de route.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-accent text-accent-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-accent/90 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/reserver"
            className="inline-flex items-center justify-center rounded-sm border border-accent text-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Réserver un VTC
          </Link>
        </div>
      </div>
    </section>
  );
}
