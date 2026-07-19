import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Pill, CtaBand } from "@/components/ui";
import { IconArrow } from "@/components/Icons";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Idee pratiche per l'impresa edile: gestione, marketing, vendita e controllo di gestione. Zero fuffa, scritte da un imprenditore per gli imprenditori.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero
        eyebrow="Il blog"
        crumb="Blog"
        path="/blog"
        cta={false}
        title={<>Idee dritte per far crescere l&apos;<span className="text-gradient">impresa edile</span></>}
        intro="Le cose che, da imprenditore, avrei voluto sapere prima. Gestione, marketing, vendita e numeri — spiegati come al bar, non come in aula."
      />

      <section className="container-fa py-20 sm:py-28">
        {/* Articolo in evidenza */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="card-lift group grid overflow-hidden rounded-[1.75rem] border border-line bg-white md:grid-cols-2 hover:border-brand-400"
          >
            <div className="relative min-h-[220px] bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 p-8">
              <div aria-hidden className="absolute inset-0 bg-dots opacity-40" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">In evidenza</span>
                <span className="font-serif text-2xl italic text-white/95">{featured.category}</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-xs text-muted">
                <span>{formatDate(featured.date)}</span><span>·</span><span>{featured.readingTime}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-navy-900 group-hover:text-brand-700">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold text-accent-600">
                Leggi l&apos;articolo <IconArrow className="arrow h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Griglia */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={i * 90}>
              <Link href={`/blog/${a.slug}`} className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-white p-6 hover:border-brand-400">
                <div className="flex items-center gap-2 text-xs">
                  <Pill>{a.category}</Pill>
                  <span className="text-muted">{a.readingTime}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-brand-700">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs text-muted">{formatDate(a.date)}</span>
                  <span className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-accent-600">
                    Leggi <IconArrow className="arrow h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand secondary={{ label: "Scopri l'ecosistema", href: "/ecosistema" }} />
      <div className="h-4" />
    </>
  );
}
