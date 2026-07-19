import { IconMegaphone, IconHandshake, IconBuilding, IconChart, IconArrow, IconGrid } from "./Icons";

type Node = {
  n: number;
  name: string;
  label: string;
  icon: React.ElementType;
  pos: string; // classi di posizionamento sul cerchio (desktop)
  chip: string; // colore accento
  dot: string;
};

const nodes: Node[] = [
  { n: 1, name: "Marketing Edile", label: "Ti porta il cliente", icon: IconMegaphone, pos: "left-1/2 top-[11%] -translate-x-1/2 -translate-y-1/2", chip: "bg-accent-500/15 text-accent-400 border-accent-400/30", dot: "bg-accent-400" },
  { n: 2, name: "Vendita Edile", label: "Chiudi il preventivo", icon: IconHandshake, pos: "left-[89%] top-1/2 -translate-x-1/2 -translate-y-1/2", chip: "bg-gold-500/15 text-gold-400 border-gold-400/30", dot: "bg-gold-400" },
  { n: 3, name: "EdiliziaInCloud", label: "Gestisci la commessa", icon: IconBuilding, pos: "left-1/2 top-[89%] -translate-x-1/2 -translate-y-1/2", chip: "bg-brand-500/20 text-brand-300 border-brand-300/30", dot: "bg-brand-400" },
  { n: 4, name: "Numeri in Edilizia", label: "Controlli il margine", icon: IconChart, pos: "left-[11%] top-1/2 -translate-x-1/2 -translate-y-1/2", chip: "bg-brand-500/20 text-brand-300 border-brand-300/30", dot: "bg-brand-300" },
];

export function Flywheel() {
  return (
    <div>
      {/* ---------- DESKTOP: schema circolare animato ---------- */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
        {/* glow di sfondo */}
        <div aria-hidden className="aurora pointer-events-none absolute inset-[12%] rounded-full bg-gradient-to-br from-accent-500/20 via-brand-500/10 to-gold-500/20 blur-3xl" />

        {/* anello tratteggiato che ruota */}
        <div aria-hidden className="ring-pulse absolute inset-[6%] rounded-full border border-dashed border-white/15" />
        <div aria-hidden className="spin-slow absolute inset-[6%] rounded-full border-t-2 border-white/10" />

        {/* SVG: cerchio con dash che scorre */}
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
          <defs>
            <linearGradient id="fwgrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#5f97dd" />
              <stop offset="100%" stopColor="#d9b04a" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="39" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <circle
            cx="50" cy="50" r="39" fill="none"
            stroke="url(#fwgrad)" strokeWidth="0.8"
            strokeLinecap="round" strokeDasharray="2.5 4"
            className="dash-flow"
          />
        </svg>

        {/* pallini che orbitano */}
        <div aria-hidden className="orbit-med absolute inset-0">
          <span className="absolute left-1/2 top-[11%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 shadow-[0_0_16px_4px_rgba(249,115,22,0.7)]" />
        </div>
        <div aria-hidden className="orbit-slow absolute inset-0">
          <span className="absolute left-[89%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400 shadow-[0_0_14px_3px_rgba(217,176,74,0.7)]" />
        </div>

        {/* nodi */}
        {nodes.map((nd) => (
          <div key={nd.n} className={`absolute ${nd.pos} w-[168px]`}>
            <div className="rounded-2xl border border-white/12 bg-navy-800/70 p-4 text-center shadow-card backdrop-blur-sm transition hover:border-white/25">
              <div className="mx-auto flex items-center justify-center gap-2">
                <span className={`grid h-9 w-9 place-items-center rounded-lg border ${nd.chip}`}>
                  <nd.icon className="h-5 w-5" />
                </span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 font-display text-xs font-bold text-white">{nd.n}</span>
              </div>
              <p className="mt-2.5 font-display text-sm font-bold text-white">{nd.name}</p>
              <p className="mt-0.5 text-xs text-brand-100/70">{nd.label}</p>
            </div>
          </div>
        ))}

        {/* centro: AEDIX */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative grid h-32 w-32 place-items-center rounded-full border border-gold-400/30 bg-navy-900 text-center shadow-card">
            <div aria-hidden className="pulse-glow absolute -inset-1 rounded-full bg-gold-500/20 blur-xl" />
            <div className="relative">
              <span className="grid h-11 w-11 mx-auto place-items-center rounded-xl bg-gradient-to-br from-brand-600 via-accent-500 to-gold-500 font-display text-sm font-extrabold text-white">FA</span>
              <p className="mt-2 font-display text-sm font-bold text-white">AEDIX</p>
              <p className="text-[0.65rem] uppercase tracking-wide text-gold-400">la casa madre</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE: flusso verticale ---------- */}
      <div className="mx-auto max-w-sm md:hidden">
        <div className="relative pl-8">
          <div aria-hidden className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-400 via-brand-400 to-gold-400" />
          {nodes.map((nd) => (
            <div key={nd.n} className="relative mb-4 last:mb-0">
              <span className="absolute -left-8 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-navy-800 font-display text-xs font-bold text-white">{nd.n}</span>
              <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-navy-800/70 p-4">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${nd.chip}`}>
                  <nd.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">{nd.name}</p>
                  <p className="text-xs text-brand-100/70">{nd.label}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="relative mt-2">
            <span className="absolute -left-8 top-2 grid h-8 w-8 place-items-center rounded-full bg-gold-500 text-white"><IconGrid className="h-4 w-4" /></span>
            <div className="flex items-center gap-2 rounded-2xl border border-gold-400/30 bg-navy-900 p-4">
              <p className="text-sm font-bold text-white">Tutto sotto AEDIX</p>
              <IconArrow className="ml-auto h-4 w-4 text-gold-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
