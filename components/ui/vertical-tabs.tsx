"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { IconArrow, IconExternal, IconBuilding, IconMegaphone, IconHandshake, IconChart } from "@/components/Icons";
import { BrandLogo, hasBrandLogo } from "@/components/BrandLogo";
import { products } from "@/lib/projects";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const AUTO_PLAY_DURATION = 5000;

const brandIcon: Record<string, React.ElementType> = {
  "edilizia-in-cloud": IconBuilding,
  "marketing-edile": IconMegaphone,
  "vendita-edile": IconHandshake,
  "numeri-in-edilizia": IconChart,
};

// Risultato concreto per il pannello (show, don't tell)
const result: Record<string, string> = {
  "edilizia-in-cloud": "Dal preventivo alla fattura, in un posto solo",
  "marketing-edile": "Richieste di lavoro ogni settimana, non a caso",
  "vendita-edile": "Più preventivi che diventano contratti firmati",
  "numeri-in-edilizia": "Sai quanto guadagni prima ancora di firmare",
};

const panelGrad: Record<string, string> = {
  brand: "from-brand-600 via-brand-500 to-brand-700",
  accent: "from-accent-500 via-accent-500 to-accent-700",
  gold: "from-gold-500 via-gold-500 to-gold-700",
};

export function VerticalTabs() {
  const items = products;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setActiveIndex((p) => (p + 1) % items.length), [items.length]);
  const prev = useCallback(() => setActiveIndex((p) => (p - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, AUTO_PLAY_DURATION);
    return () => clearInterval(t);
  }, [activeIndex, isPaused, next]);

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Colonna sinistra: tab */}
      <div className="order-2 flex flex-col lg:order-1 lg:col-span-5">
        <div className="mb-8">
          <span className="eyebrow">Le 4 leve</span>
          <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">Le 4 leve della crescita, una per una</h2>
        </div>

        <div className="flex flex-col">
          {items.map((s, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={s.slug}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={cn(
                  "group relative flex items-start gap-4 border-t border-line py-6 text-left transition-colors duration-500 first:border-0",
                  isActive ? "text-navy-900" : "text-muted hover:text-navy-900",
                )}
              >
                {/* barra di avanzamento */}
                <span aria-hidden className="absolute -left-4 top-0 bottom-0 w-[3px] overflow-hidden rounded bg-line">
                  {isActive && !isPaused && (
                    <span key={`${index}-${isPaused}`} className="fa-progress absolute left-0 top-0 block w-full rounded bg-gradient-to-b from-accent-500 to-gold-500" />
                  )}
                  {isActive && isPaused && <span className="absolute inset-0 bg-gradient-to-b from-accent-500 to-gold-500 opacity-70" />}
                </span>

                <span className="mt-2 text-[10px] font-semibold tabular-nums text-accent-600">/{String(index + 1).padStart(2, "0")}</span>

                <span className="flex-1">
                  <span className="block font-display text-2xl sm:text-3xl font-bold tracking-tight">{s.name}</span>
                  <span
                    className={cn(
                      "grid transition-all duration-500",
                      isActive ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="overflow-hidden">
                      <span className="block max-w-sm pb-1 text-sm leading-relaxed text-muted">{s.description}</span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Colonna destra: pannello brandizzato sincronizzato */}
      <div className="order-1 lg:order-2 lg:col-span-7">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-navy-900 md:aspect-[4/3] lg:aspect-[16/11] md:rounded-[2.5rem]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {items.map((s, index) => {
            const Icon = brandIcon[s.slug];
            const isActive = activeIndex === index;
            return (
              <div
                key={s.slug}
                aria-hidden={!isActive}
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  isActive ? "z-10 opacity-100" : "pointer-events-none opacity-0",
                )}
              >
                <div className={cn("relative h-full w-full bg-gradient-to-br p-7 sm:p-10", panelGrad[s.accent])}>
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
                  <Icon className="pointer-events-none absolute -bottom-8 -right-6 h-56 w-56 text-white/10" />

                  {isActive && (
                    <div className="tab-panel-in relative flex h-full flex-col">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                          {s.kicker}
                        </span>
                        {hasBrandLogo(s.slug) && <BrandLogo slug={s.slug} name={s.name} imgClass="h-6" />}
                      </div>

                      <div className="mt-auto">
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white">{s.name}</h3>
                        <p className="mt-2 text-lg text-white/90">{s.tagline}</p>

                        <div className="mt-5 inline-flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white text-sm">✓</span>
                          <span className="text-sm font-medium text-white">{result[s.slug]}</span>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <Link
                            href={`/ecosistema/${s.slug}`}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-navy-900 transition hover:gap-3"
                          >
                            Scheda completa
                            <IconArrow className="h-4 w-4" />
                          </Link>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 font-display text-sm font-bold text-white transition hover:bg-white/10"
                          >
                            Visita {s.domain}
                            <IconExternal className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* controlli */}
          <div className="absolute bottom-5 right-5 z-20 flex gap-2 md:bottom-7 md:right-7 md:gap-3">
            <button
              onClick={prev}
              aria-label="Precedente"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 active:scale-90 md:h-12 md:w-12"
            >
              <IconArrow className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={next}
              aria-label="Successivo"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 active:scale-90 md:h-12 md:w-12"
            >
              <IconArrow className="h-5 w-5" />
            </button>
          </div>

          {/* indicatori */}
          <div className="absolute bottom-5 left-5 z-20 flex gap-1.5 md:bottom-7 md:left-7">
            {items.map((s, i) => (
              <span key={s.slug} className={cn("h-1.5 rounded-full transition-all", i === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/40")} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalTabs;
