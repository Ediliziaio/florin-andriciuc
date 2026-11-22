"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { FLUSSI, grafoDa } from "@/lib/flussi";

// La lavagna pesa e vive solo nel browser: si scarica quando la sezione sta per entrare nello schermo.
const WorkflowBlueprint = dynamic(() => import("@/components/ui/interactive-workflow-blueprint"), {
  ssr: false,
  loading: () => <div className="h-[600px] rounded-3xl border border-line bg-bg-soft" />,
});

const COLORI = {
  "--color-background": "#f5f8fd",
  "--color-foreground": "#0d1f3c",
  "--color-card": "#ffffff",
  "--color-muted-foreground": "#566581",
  "--color-border": "#d6e0ee",
  "--color-primary": "#f97316",
  "--color-primary-foreground": "#ffffff",
  "--color-chart-2": "#2560ad",
  "--color-chart-3": "#10b981",
  "--wb-radius": "1.5rem",
} as CSSProperties;

/** La vetrina del flusso, col titolo sopra. `nome` sceglie il flusso in `lib/flussi.ts`. */
export function FlussoVetrina({ nome, sfondo = "bg-white" }: { nome: string; sfondo?: string }) {
  const f = FLUSSI[nome];
  const grafo = useMemo(() => (f ? grafoDa(f.passi) : null), [f]);
  const box = useRef<HTMLDivElement>(null);
  const [vicino, setVicino] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVicino(true);
        io.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  if (!f || !grafo) return null;

  return (
    <section className={`${sfondo} py-20 sm:py-28`}>
      <div className="container-fa">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">{f.titolo}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{f.testo}</p>
        </div>
        <div ref={box} className="mt-12 min-h-[600px]">
          {vicino && <WorkflowBlueprint vetrina title={f.lavagna} subtitle="Esempio · al lavoro" initialGraph={grafo} apps={[]} style={COLORI} oraInizio={f.oraInizio} />}
        </div>
      </div>
    </section>
  );
}
