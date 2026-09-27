import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";

export const runtime = "edge";
export const alt = "Track My Cars — traceur GPS véhicules et flottes en PACA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Image de partage. Référencée par le JSON-LD (logo de l'Organization) et par
 * les métadonnées OpenGraph : elle doit exister, sinon les données
 * structurées pointent dans le vide.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E111B",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Repère de télémétrie */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#38B6FF",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              color: "#38B6FF",
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            TRACK MY CARS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            Suivi GPS pour véhicules,
          </div>
          <div
            style={{
              fontSize: 76,
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            flottes et matériels
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.72)",
              marginTop: 28,
            }}
          >
            Boîtiers de 79 à 199 € · Abonnement dès 7,50 €/mois · Région PACA
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 28, color: "#FFFFFF", fontWeight: 600 }}>
            trackmycars.fr
          </div>
          <div style={{ fontSize: 28, color: "#38B6FF", fontWeight: 700 }}>
            {site.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size
  );
}
