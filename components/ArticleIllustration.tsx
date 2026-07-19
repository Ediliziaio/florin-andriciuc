// Illustrazioni SVG brandizzate per gli articoli (nessuna immagine esterna).
// kind deriva dal brand collegato all'articolo.

export type IllKind = "gestione" | "marketing" | "vendita" | "numeri";

export function kindFromProject(slug?: string): IllKind {
  switch (slug) {
    case "marketing-edile":
      return "marketing";
    case "vendita-edile":
      return "vendita";
    case "numeri-in-edilizia":
      return "numeri";
    default:
      return "gestione";
  }
}

export function ArticleIllustration({ kind, className = "" }: { kind: IllKind; className?: string }) {
  const stroke = "#183763"; // navy-700
  const accent = "#f97316"; // accent-500
  const gold = "#d9b04a";
  const common = { fill: "none", stroke, strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  return (
    <svg viewBox="0 0 220 150" className={className} role="img" aria-hidden>
      {kind === "gestione" && (
        <>
          {/* finestra gestionale */}
          <rect x="24" y="24" width="172" height="102" rx="10" {...common} />
          <path d="M24 46h172" {...common} />
          <circle cx="38" cy="35" r="2.6" fill={accent} stroke="none" />
          <circle cx="48" cy="35" r="2.6" fill={gold} stroke="none" />
          <circle cx="58" cy="35" r="2.6" fill={stroke} stroke="none" />
          {/* righe / voci */}
          <path d="M40 64h60M40 78h44M40 92h64M40 106h36" {...common} />
          {/* mini bar chart */}
          <path d="M150 106V86M166 106V74M182 106V94" stroke={accent} strokeWidth="6" strokeLinecap="round" />
          <path d="M142 112h52" {...common} />
        </>
      )}

      {kind === "marketing" && (
        <>
          {/* megafono */}
          <path d="M40 84V66a6 6 0 0 1 6-6h18l40-22v72l-40-22H46a6 6 0 0 1-6-6z" {...common} />
          <path d="M64 84v14a8 8 0 0 0 8 8h6a8 8 0 0 0 8-8v-6" {...common} />
          {/* onde segnale */}
          <path d="M150 52a26 26 0 0 1 0 46" stroke={accent} strokeWidth="2.8" fill="none" strokeLinecap="round" />
          <path d="M162 40a44 44 0 0 1 0 70" stroke={gold} strokeWidth="2.8" fill="none" strokeLinecap="round" />
          {/* barre in crescita */}
          <path d="M150 128v-10M166 128v-18M182 128v-26" stroke={accent} strokeWidth="6" strokeLinecap="round" />
        </>
      )}

      {kind === "vendita" && (
        <>
          {/* documento / contratto */}
          <path d="M56 22h60l28 28v78a6 6 0 0 1-6 6H56a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z" {...common} />
          <path d="M116 22v28h28" {...common} />
          <path d="M66 66h62M66 80h62M66 94h40" {...common} />
          {/* firma */}
          <path d="M66 110c8-8 12 6 20 0s10-8 18-2" stroke={accent} strokeWidth="2.8" fill="none" strokeLinecap="round" />
          {/* check */}
          <circle cx="150" cy="112" r="18" fill={accent} stroke="none" />
          <path d="M142 112l6 6 12-13" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {kind === "numeri" && (
        <>
          {/* assi */}
          <path d="M46 26v100h130" {...common} />
          {/* barre */}
          <path d="M70 126V96M96 126V82M122 126V102M148 126V70" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
          {/* trend line */}
          <path d="M60 104l28-16 26 8 30-30" stroke={accent} strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="144" cy="66" r="4" fill={accent} stroke="none" />
          {/* moneta euro */}
          <circle cx="176" cy="44" r="16" fill={gold} stroke="none" />
          <path d="M182 38a8 8 0 1 0 0 12M170 42h9M170 47h9" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
