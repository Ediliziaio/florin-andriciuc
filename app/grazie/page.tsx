import type { Metadata } from "next";
import Link from "next/link";
import { IconCheck, IconArrow } from "@/components/Icons";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Grazie",
  description: "Richiesta inviata. Ti ricontatto al più presto.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/grazie" },
};

export default function GraziePage() {
  return (
    <section className="container-fa py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-accent-100 text-accent-600">
          <IconCheck className="h-10 w-10" />
        </span>
        <h1 className="mt-7 text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-tight">Richiesta ricevuta 👊</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          Grazie. La leggo io di persona e ti rispondo al più presto, di solito entro 24 ore lavorative.
          Nel frattempo, se vuoi, dai un&apos;occhiata a qualcosa di utile.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/blog" className="btn btn-primary">Leggi il blog<IconArrow className="arrow h-4 w-4" /></Link>
          <Link href="/ecosistema" className="btn btn-ghost">Scopri l&apos;ecosistema</Link>
        </div>

        <div className="mt-12 grid gap-3 text-left">
          {articles.slice(0, 2).map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="card-lift rounded-2xl border border-line bg-white p-5 hover:border-brand-400">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">{a.category}</p>
              <p className="mt-1 font-display font-bold text-navy-900">{a.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
