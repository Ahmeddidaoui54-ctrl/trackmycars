import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E111B",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: 999,
            background: "#38B6FF",
            display: "flex",
          }}
        />
      </div>
    ),
    size
  );
}
