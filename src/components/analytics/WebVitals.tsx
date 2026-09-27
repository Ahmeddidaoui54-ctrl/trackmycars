"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Remonte les Core Web Vitals réels des visiteurs.
 *
 * Les seuils de Google : LCP < 2,5 s, CLS < 0,1, INP < 200 ms. Ce sont des
 * facteurs de classement, et les mesures de laboratoire ne les prédisent pas
 * fidèlement — seul le terrain compte.
 *
 * Tant qu'aucun point de collecte n'est configuré, les mesures dégradées sont
 * simplement affichées en console : cela permet de repérer un problème en
 * développement sans envoyer quoi que ce soit ni poser de cookie.
 */
const SEUILS: Record<string, number> = {
  LCP: 2500,
  INP: 200,
  CLS: 0.1,
  FCP: 1800,
  TTFB: 800,
};

export function WebVitals() {
  useReportWebVitals((metric) => {
    const seuil = SEUILS[metric.name];
    const depasse = seuil !== undefined && metric.value > seuil;

    if (process.env.NODE_ENV === "development" && depasse) {
      console.warn(
        `[web-vitals] ${metric.name} = ${Math.round(metric.value)} ` +
          `(seuil ${seuil}) — ${metric.rating}`
      );
    }

    const endpoint = process.env.NEXT_PUBLIC_VITALS_ENDPOINT;
    if (!endpoint) return;

    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      path: window.location.pathname,
    });

    // sendBeacon survit à la fermeture de l'onglet, contrairement à fetch
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, body);
    } else {
      fetch(endpoint, { body, method: "POST", keepalive: true });
    }
  });

  return null;
}
