"use client";

import { useState } from "react";

/**
 * Slot foto di Florin, swap-ready.
 * Finché il file non esiste in /public mostra un placeholder curato.
 * Per attivarla: metti la foto in `public/` con lo stesso nome del prop `src`
 * (default: /florin.jpg) — appare automaticamente, senza toccare il codice.
 */
export function Portrait({
  src = "/florin.jpg",
  alt = "Florin Andriciuc",
  className = "",
  rounded = "rounded-[1.75rem]",
}: {
  src?: string;
  alt?: string;
  className?: string;
  rounded?: string;
}) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`relative aspect-[4/5] overflow-hidden border border-line ${rounded} ${className}`}>
      {/* Placeholder sotto: visibile finché la foto non c'è */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-100 via-white to-accent-100">
        <div className="text-center">
          <span className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-navy-900 font-display text-2xl font-extrabold text-white shadow-soft">
            FA
          </span>
          <p className="mt-4 px-6 text-sm font-semibold text-navy-800">Florin Andriciuc</p>
        </div>
      </div>
      {/* Foto sopra: se carica copre il placeholder, se 404 resta il placeholder */}
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
