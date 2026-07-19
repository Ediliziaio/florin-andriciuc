import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Florin Andriciuc — Costruisco gli strumenti che mancano all'impresa edile";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0d1f3c 0%, #122a4f 55%, #0d1f3c 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* top: monogramma + nome */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "linear-gradient(135deg, #2560ad 0%, #f97316 70%, #d9b04a 100%)",
              color: "#fff",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            FA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#fff", fontSize: 30, fontWeight: 800 }}>Florin Andriciuc</div>
            <div style={{ color: "#e4c470", fontSize: 18, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              Founder · AEDIX
            </div>
          </div>
        </div>

        {/* centro: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ color: "#fff", fontSize: 62, fontWeight: 800, lineHeight: 1.05, maxWidth: 950 }}>
            Costruisco gli strumenti che mancano all&apos;impresa edile.
          </div>
          <div style={{ color: "#93b8ec", fontSize: 27, maxWidth: 860, lineHeight: 1.3 }}>
            Gestionale, marketing, vendita e controllo di gestione. Per chi vive il cantiere.
          </div>
        </div>

        {/* footer: brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", height: 6, width: 56, borderRadius: 6, background: "linear-gradient(90deg,#f97316,#d9b04a)" }} />
          <div style={{ color: "#8fa6c4", fontSize: 22, fontWeight: 600 }}>
            EdiliziaInCloud · Marketing Edile · Vendita Edile · Numeri in Edilizia
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
