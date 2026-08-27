// Helper réutilisable pour OG images statiques par section
// Style cohérent : palette luxe-voyage bleu nuit + or champagne

import { ImageResponse } from "next/og";

interface PageOgParams {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
}

export const OG_SIZE = { width: 1200, height: 630 };

export function pageOgImage(p: PageOgParams) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f2a44 0%, #1a3a5c 100%)",
          color: "#fbf9f4",
          fontFamily: "Georgia, serif",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#c9a25a",
            fontSize: 16,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          {p.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {p.title}
          </div>
          {p.italic && (
            <div
              style={{
                display: "flex",
                fontSize: 48,
                fontStyle: "italic",
                color: "#c9a25a",
                marginTop: 16,
              }}
            >
              {p.italic}
            </div>
          )}
        </div>
        {p.subtitle && (
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(251, 249, 244, 0.7)",
              marginTop: 40,
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            {p.subtitle}
          </div>
        )}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "rgba(251, 249, 244, 0.6)",
            letterSpacing: 2,
          }}
        >
          varvtc.fr · +33 6 04 43 34 20
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
