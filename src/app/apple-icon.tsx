import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          gap: 14,
          background: "#0E111B",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 999,
            background: "#38B6FF",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 22,
            color: "#FFFFFF",
            fontWeight: 700,
            letterSpacing: 1,
            fontFamily: "sans-serif",
          }}
        >
          TMC
        </div>
      </div>
    ),
    size
  );
}
