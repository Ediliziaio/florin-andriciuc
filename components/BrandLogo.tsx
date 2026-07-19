// Loghi ufficiali dei brand su "piastrella" bianca (leggibili su ogni sfondo).
// AEDIX non ha ancora il file → hasBrandLogo() = false, si usa il fallback icona.

const WITH_LOGO = new Set([
  "edilizia-in-cloud",
  "marketing-edile",
  "vendita-edile",
  "numeri-in-edilizia",
  "imprenditore-edile",
  "edilizia-io",
  // "aedix" — in attesa del file logo
]);

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
  return (
    <span className={`inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-soft ring-1 ring-black/5 ${plateClass}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/brands/${slug}.png`} alt={`${name} — logo`} className={`${imgClass} w-auto`} loading="lazy" />
    </span>
  );
}
