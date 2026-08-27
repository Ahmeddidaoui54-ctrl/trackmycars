"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-primary text-primary-foreground min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <span className="eyebrow block mb-4 !text-accent">Erreur</span>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Un imprévu sur la route
        </h1>
        <div className="ornament mt-6" aria-hidden="true" />
        <p className="mt-6 text-lg text-primary-foreground/80 font-light leading-relaxed">
          Quelque chose s&apos;est mal passé. Vous pouvez réessayer ou nous
          contacter directement.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-sm bg-accent text-accent-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-accent/90 transition-colors"
          >
            Réessayer
          </button>
          <a
            href="tel:+33604433420"
            className="inline-flex items-center justify-center rounded-sm border border-accent text-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            +33 6 04 43 34 20
          </a>
        </div>
      </div>
    </section>
  );
}
