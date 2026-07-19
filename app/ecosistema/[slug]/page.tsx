import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productPages, productSlugs } from "@/lib/productPageData";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { TrackView } from "@/components/TrackView";
import { BrandLogo, hasBrandLogo } from "@/components/BrandLogo";
import { CtaBand } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import {
  IconArrow, IconExternal, IconCheck, IconQuote,
  IconBuilding, IconMegaphone, IconHandshake, IconChart,
} from "@/components/Icons";

const brandIcon: Record<string, React.ElementType> = {
  "edilizia-in-cloud": IconBuilding,
  "marketing-edile": IconMegaphone,
  "vendita-edile": IconHandshake,
  "numeri-in-edilizia": IconChart,
};

const accent: Record<string, { chip: string; bar: string; grad: string; ring: string; text: string }> = {
  brand: { chip: "bg-brand-100 text-brand-700", bar: "from-brand-500 to-brand-700", grad: "from-brand-600 via-brand-500 to-brand-700", ring: "hover:border-brand-400", text: "text-brand-700" },
  accent: { chip: "bg-accent-100 text-accent-700", bar: "from-accent-400 to-accent-600", grad: "from-accent-500 via-accent-500 to-accent-700", ring: "hover:border-accent-400", text: "text-accent-700" },
  gold: { chip: "bg-gold-100 text-gold-700", bar: "from-gold-400 to-gold-600", grad: "from-gold-500 via-gold-500 to-gold-700", ring: "hover:border-gold-400", text: "text-gold-700" },
};

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productPages[slug];
  if (!p) return { title: "Prodotto non trovato" };
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    keywords: p.keywords,
    alternates: { canonical: `/ecosistema/${slug}` },
    openGraph: { type: "website", title: p.seoTitle, description: p.seoDescription, url: `${site.domain}/ecosistema/${slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = productPages[slug];
  const brand = projects.find((b) => b.slug === slug);
  if (!page || !brand) notFound();

  const a = accent[brand.accent];
  const Icon = brandIcon[slug];
  const url = `${site.domain}/ecosistema/${slug}`;

  const related = page.relatedArticles
    .map((s) => articles.find((art) => art.slug === s))
    .filter(Boolean)
    .slice(0, 3) as NonNullable<ReturnType<typeof articles.find>>[];
  const relatedProds = page.relatedProducts
    .map((s) => projects.find((b) => b.slug === s))
    .filter(Boolean)
    .slice(0, 3) as NonNullable<ReturnType<typeof projects.find>>[];

  return (
    <>
      <TrackView event="ViewContent" name={brand.name} category={page.keywords[0]} />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.domain },
            { name: "Ecosistema", url: `${site.domain}/ecosistema` },
            { name: brand.name, url },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: brand.name,
            description: page.seoDescription,
            url,
            serviceType: page.keywords[0],
            areaServed: "IT",
            provider: { "@id": `${site.domain}/#florin` },
            audience: { "@type": "Audience", audienceType: "Imprenditori edili e imprese di costruzioni" },
            sameAs: [brand.url],
          },
          faqSchema(page.faq),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-bg-soft">
        <div aria-hidden className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br ${a.grad} opacity-20 blur-3xl`} />
        <div className="container-fa relative py-16 sm:py-24">
          <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/ecosistema" className="hover:text-brand-600">Ecosistema</Link>
            <span className="mx-2">/</span>
            <span className="text-navy-900">{brand.name}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              {hasBrandLogo(slug) ? (
                <div className="flex flex-col items-start gap-4">
                  <BrandLogo slug={slug} name={brand.name} imgClass="h-9 sm:h-11" plateClass="w-fit" />
                  <span className="eyebrow">{page.hero.eyebrow}</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${a.chip}`}><Icon className="h-6 w-6" /></span>
                  <span className="eyebrow">{page.hero.eyebrow}</span>
                </div>
              )}
              <h1 className="mt-5 text-[2.3rem] sm:text-[3.1rem] font-extrabold leading-[1.05]">{page.hero.h1}</h1>
              <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">{page.hero.intro}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={brand.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Vai a {brand.name}
                  <IconExternal className="h-4 w-4" />
                </a>
                <Link href="/contatti" className="btn btn-ghost">Parla con me</Link>
              </div>
              <p className="mt-4 text-sm text-muted">Sito ufficiale: <a href={brand.url} target="_blank" rel="noopener noreferrer" className={`font-semibold ${a.text} link-u`}>{brand.domain}</a></p>
            </div>

            <Reveal className="hidden lg:block">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-br ${a.grad} shadow-card`}>
                <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
                <Icon className="absolute -bottom-8 -right-6 h-56 w-56 text-white/10" />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">{brand.kicker}</span>
                  <p className="mt-4 font-display text-2xl font-bold text-white">{brand.tagline}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEMI → SOLUZIONI */}
      <section className="container-fa py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">{page.painsTitle}</span>
          <p className="mt-4 text-lg text-muted leading-relaxed">{page.painsIntro}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {page.pains.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`card-lift h-full rounded-2xl border border-line bg-white p-6 sm:p-7 ${a.ring}`}>
                <p className="font-display text-lg font-bold leading-snug text-navy-900">{p.problem}</p>
                <p className="mt-2.5 flex gap-2 text-muted leading-relaxed">
                  <IconArrow className="mt-1.5 h-4 w-4 shrink-0 text-accent-600" />
                  <span>{p.solution}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-fa">
          <div className="max-w-2xl">
            <span className="eyebrow">{page.featuresTitle}</span>
            <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">{page.featuresIntro}</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.features.map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="card-lift h-full rounded-2xl border border-line bg-white p-6">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${a.chip}`}><IconCheck className="h-6 w-6" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="container-fa py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Come funziona</span>
          <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">{page.howTitle}</h2>
        </div>
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />
          {page.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 font-display text-lg font-bold text-white shadow-soft">{s.n}</div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PERCHÉ L'HO CREATO (founder) */}
      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="container-fa">
          <div className="mx-auto max-w-3xl text-center">
            <IconQuote className="mx-auto h-10 w-10 text-gold-400" />
            <blockquote className="mt-4 font-serif text-[1.7rem] sm:text-[2.1rem] italic leading-[1.25] text-white">
              &ldquo;{page.founderQuote}&rdquo;
            </blockquote>
            <p className="mt-6 text-lg text-brand-100/85 leading-relaxed">{page.founderText}</p>
            <p className="mt-6 font-display font-bold text-white">Florin Andriciuc</p>
            <p className="text-sm text-gold-400">{brand.role} · {brand.name}</p>
          </div>
        </div>
      </section>

      {/* RISULTATI */}
      <section className="container-fa py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Cosa cambia</span>
            <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">Cosa ottieni con {brand.name}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.results.map((r, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
                  <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${a.chip}`}><IconCheck className="h-4 w-4" /></span>
                  <span className="font-medium text-navy-900">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SITELINK: articoli + altri prodotti */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-fa grid gap-12 lg:grid-cols-2">
          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Approfondisci sul blog</h2>
              <div className="mt-6 grid gap-4">
                {related.map((art) => (
                  <Link key={art.slug} href={`/blog/${art.slug}`} className="card-lift group rounded-2xl border border-line bg-white p-5 hover:border-brand-400">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">{art.category}</span>
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-brand-700">{art.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-accent-600">Leggi <IconArrow className="arrow h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Le altre leve dell&apos;ecosistema</h2>
            <div className="mt-6 grid gap-4">
              {relatedProds.map((b) => {
                const RIcon = brandIcon[b.slug] ?? IconBuilding;
                const ra = accent[b.accent];
                return (
                  <Link key={b.slug} href={`/ecosistema/${b.slug}`} className="card-lift group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 hover:border-brand-400">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${ra.chip}`}><RIcon className="h-6 w-6" /></span>
                    <span className="min-w-0">
                      <span className="block font-display font-bold text-navy-900 group-hover:text-brand-700">{b.name}</span>
                      <span className="block truncate text-sm text-muted">{b.tagline}</span>
                    </span>
                    <IconArrow className="arrow ml-auto h-4 w-4 shrink-0 text-muted/50" />
                  </Link>
                );
              })}
              <Link href="/ecosistema" className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-600">
                Vedi tutto l&apos;ecosistema <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-fa py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-[2rem] sm:text-[2.4rem] font-bold leading-tight">Domande frequenti su {brand.name}</h2>
          </div>
          <div className="divide-y divide-line border-t border-line">
            {page.faq.map((it) => (
              <details key={it.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-navy-900 text-lg list-none">
                  {it.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-600 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-muted leading-relaxed">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Vuoi capire se ${brand.name} fa per te?`}
        text="Scrivimi due righe sulla tua situazione. Ti dico con onestà se è la leva giusta per la tua impresa adesso — o da dove converrebbe partire."
        secondary={{ label: `Vai a ${brand.domain}`, href: brand.url }}
      />
      <div className="h-4" />
    </>
  );
}
