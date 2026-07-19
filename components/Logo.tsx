export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl shadow-soft" aria-hidden>
        <span
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brand-600), var(--color-accent-500) 70%, var(--color-gold-500))",
          }}
        />
        <span className="relative font-display text-[0.95rem] font-extrabold tracking-tight text-white">
          FA
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          Florin Andriciuc
        </span>
        <span
          className={`mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-brand-300" : "text-accent-600"
          }`}
        >
          Founder · AEDIX
        </span>
      </span>
    </span>
  );
}
