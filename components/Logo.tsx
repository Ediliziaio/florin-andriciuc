export function Logo({
  variant = "dark",
  className = "h-8 w-auto sm:h-9",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";
  const src = light ? "/logo-light.png" : "/logo.png";
  // dimensioni intrinseche dei file (per evitare layout shift)
  const w = light ? 339 : 315;
  const h = 96;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Florin Andriciuc" width={w} height={h} className={className} />
  );
}
