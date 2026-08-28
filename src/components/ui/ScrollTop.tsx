"use client";

import { useEffect, useState } from "react";

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setShow(window.scrollY > 900);
        frame = 0;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Remonter en haut de la page"
      className={`fixed bottom-6 right-6 z-30 grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-cta ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
