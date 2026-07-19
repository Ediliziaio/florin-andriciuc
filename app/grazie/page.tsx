import type { Metadata } from "next";
import Link from "next/link";
import { IconCheck, IconArrow, IconMail } from "@/components/Icons";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grazie",
  description: "Richiesta inviata. Ti ricontatto io di persona al più presto.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/grazie" },
};

const steps = [
  { n: "01", title: "La leggo io", text: "Niente call center: la tua richiesta arriva direttamente a me e la leggo di persona." },
  { n: "02", title: "Ti rispondo", text: "Ti scrivo o ti chiamo, di solito entro 24 ore lavorative. Sul serio, non tra due settimane." },
  { n: "03", title: "Troviamo la leva", text: "Capiamo insieme da dove conviene partire per la tua impresa — con onestà, senza venderti fumo." },
];

export default function GraziePage() {
  const latest = articles.slice(0, 3);
  return (
    <>
      {/* Conferma */}
      <section className="relative overflow-hidden border-b border-line bg-bg-soft">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-300/25 blur-3xl" />
        <div className="container-fa relative py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-[0_18px_50px_-20px_rgba(249,115,22,0.6)]">
              <span aria-hidden className="pulse-glow absolute -inset-1 rounded-2xl bg-accent-500/30 blur-xl" />
              <IconCheck className="relative h-11 w-11" />
            </span>
            <h1 className="mt-8 text-[2.3rem] sm:text-[3rem] font-extrabold leading-tight">Richiesta ricevuta 👊</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted leading-relaxed">
              Grazie di avermi scritto. La tua richiesta è arrivata a me, non a un ufficio. Ti rispondo di
              persona al più presto — di solito entro <span className="hl">24 ore lavorative</span>.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/ecosistema" className="btn btn-primary">Scopri l&apos;ecosistema<IconArrow className="arrow h-4 w-4" /></Link>
              <Link href="/" className="btn btn-ghost">Torna alla home</Link>
            </div>

            <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 link-u">
              <IconMail className="h-4 w-4" />
              Ti serve prima? Scrivimi a {site.email}
            </a>
          </div>
        </div>
      </section>

      {/* Cosa succede adesso */}
      <section className="container-fa py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Cosa succede adesso</span>
          <h2 className="mt-3 text-[1.9rem] sm:text-[2.3rem] font-bold leading-tight">Nessun copione. Solo i prossimi passi.</h2>
        </div>
        <div className="relative mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 font-display text-lg font-bold text-white shadow-soft">{s.n}</div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nel frattempo */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-fa">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Nel frattempo</span>
              <h2 className="mt-3 text-[1.9rem] sm:text-[2.3rem] font-bold leading-tight">Qualcosa di utile mentre aspetti</h2>
            </div>
            <Link href="/blog" className="btn btn-ghost">Tutti gli articoli<IconArrow className="arrow h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {latest.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:border-brand-400">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">{a.category}</p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-brand-700">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{a.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-accent-600">Leggi<IconArrow className="arrow h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
