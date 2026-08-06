import { ImageResponse } from "next/og";
import { getArticle } from "@/lib/articles";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Articolo dal blog di Florin Andriciuc";

// OG image dedicata per ogni articolo: titolo + categoria al posto della
// card generica del sito. Migliora CTR su social e condivisioni WhatsApp.
export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  const title = a?.title ?? "Blog";
  const category = a?.category ?? "Articolo";
  const readingTime = a?.readingTime ?? "";

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

        {/* centro: titolo articolo */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#93b8ec",
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "6px 18px",
                borderRadius: 999,
                background: "rgba(249,115,22,0.18)",
                color: "#fdba74",
              }}
            >
              {category}
            </div>
            {readingTime && <div style={{ display: "flex" }}>{readingTime} di lettura</div>}
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: title.length > 70 ? 48 : 56,
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#93b8ec", fontSize: 24, fontWeight: 600 }}>florinandriciuc.com/blog</div>
          <div style={{ color: "#e4c470", fontSize: 22, fontWeight: 700 }}>La lingua del cantiere, non dell&apos;ufficio</div>
        </div>
      </div>
    ),
    size,
  );
}
