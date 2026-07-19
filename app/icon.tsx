import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: monogramma FA su gradiente brand.
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
          borderRadius: 16,
          background: "linear-gradient(135deg, #2560ad 0%, #f97316 70%, #d9b04a 100%)",
          color: "#fff",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -1,
          fontFamily: "sans-serif",
        }}
      >
        FA
      </div>
    ),
    { ...size },
  );
}
