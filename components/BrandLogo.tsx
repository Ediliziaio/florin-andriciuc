// Loghi ufficiali dei brand su "piastrella" (leggibili su ogni sfondo).
// La maggior parte dei loghi è scura su trasparente → piastrella bianca.
// AEDIX è bianco su trasparente → piastrella navy.

const WITH_LOGO = new Set([
  "edilizia-in-cloud",
  "marketing-edile",
  "vendita-edile",
  "numeri-in-edilizia",
  "imprenditore-edile",
  "edilizia-io",
  "aedix",
]);

// Brand con logo chiaro → serve piastrella scura.
const DARK_PLATE = new Set(["aedix"]);

export function hasBrandLogo(slug: string): boolean {
  return WITH_LOGO.has(slug);
}

export function BrandLogo({
  slug,
  name,
  imgClass = "h-7 sm:h-8",
  plateClass = "",
}: {
  slug: string;
  name: string;
  imgClass?: string;
  plateClass?: string;
}) {
  const dark = DARK_PLATE.has(slug);
  const plate = dark
    ? "bg-navy-900 ring-1 ring-white/10"
    : "bg-white ring-1 ring-black/5 shadow-soft";
  return (
    <span className={`inline-flex items-center rounded-xl px-3 py-2 ${plate} ${plateClass}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/brands/${slug}.png`} alt={`${name} — logo`} className={`${imgClass} w-auto`} loading="lazy" />
    </span>
  );
}
