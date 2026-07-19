import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleIllustration, kindFromProject } from "@/components/ArticleIllustration";
import { ShareButtons } from "@/components/ShareButtons";
import { ReadingProgress } from "@/components/ReadingProgress";
import { TrackView } from "@/components/TrackView";
import { Reveal } from "@/components/Reveal";
import { FaqSection, Pill } from "@/components/ui";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { IconArrow, IconExternal } from "@/components/Icons";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Articolo non trovato" };
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      url: `${site.domain}/blog/${a.slug}`,
      publishedTime: a.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = a.relatedProject ? projects.find((p) => p.slug === a.relatedProject) : undefined;
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const url = `${site.domain}/blog/${a.slug}`;

  return (
    <>
      <ReadingProgress />
      <TrackView event="ViewContent" name={a.title} category={a.category} />
      <JsonLd
        data={[
          articleSchema({ headline: a.title, description: a.excerpt, url, datePublished: a.date }),
          breadcrumbSchema([
            { name: "Home", url: site.domain },
            { name: "Blog", url: `${site.domain}/blog` },
            { name: a.title, url },
          ]),
          // FAQPage lo emette già <FaqSection> in fondo alla pagina (evita duplicati).
        ]}
      />

      {/* Hero articolo */}
      <section className="relative overflow-hidden border-b border-line bg-bg-soft">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="container-fa relative py-14 sm:py-20">
          <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-brand-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-navy-900">{a.category}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="flex items-center gap-3 text-sm">
                <Pill>{a.category}</Pill>
                <span className="text-muted">{formatDate(a.date)} · {a.readingTime} di lettura</span>
              </div>
              <h1 className="mt-5 text-[2.2rem] sm:text-[3rem] font-extrabold leading-[1.06]">{a.title}</h1>
              <p className="mt-5 text-lg text-muted leading-relaxed">{a.excerpt}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-display text-sm font-extrabold text-white">FA</span>
                <div className="leading-tight">
                  <p className="font-display text-sm font-bold text-navy-900">Florin Andriciuc</p>
                  <p className="text-xs text-muted">{site.role}</p>
                </div>
              </div>
              <div className="mt-6 border-t border-line pt-5">
                <ShareButtons url={url} title={a.title} />
              </div>
            </div>

            {/* Cover illustrata */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-6 shadow-card">
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
                <div className="relative">
                  <ArticleIllustration kind={kindFromProject(a.relatedProject)} className="block h-auto w-full" />
                  <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-accent-600">{a.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corpo */}
      <article className="container-fa py-16 sm:py-20">
        <ArticleBody blocks={a.body} projectSlug={a.relatedProject} />

        {/* CTA brand collegato */}
        {related && (
          <Reveal>
            <div className="prose-fa mt-12">
              <div className="not-prose relative overflow-hidden rounded-2xl border border-line bg-navy-900 p-7 sm:p-8">
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/25 blur-2xl" />
                <p className="relative text-xs font-semibold uppercase tracking-wider text-gold-400">Dall&apos;ecosistema</p>
                <h3 className="relative mt-2 font-display text-xl font-bold text-white">{related.name} — {related.tagline}</h3>
                <p className="relative mt-2 text-brand-100/85 leading-relaxed">{related.description}</p>
                <a href={related.url} target="_blank" rel="noopener noreferrer" className="relative btn btn-primary mt-5">
                  Scopri {related.name}
                  <IconExternal className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        )}

        {/* Condivisione a fine articolo */}
        <div className="prose-fa mt-12 border-t border-line pt-8">
          <p className="mb-4 font-display text-lg font-bold text-navy-900">Ti è stato utile? Passa parola.</p>
          <ShareButtons url={url} title={a.title} />
        </div>
      </article>

      {a.faq && a.faq.length > 0 && <FaqSection title="Domande frequenti" intro="" items={a.faq} />}

      {/* Altri articoli */}
      <section className="bg-bg-soft py-20">
        <div className="container-fa">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-navy-900">Continua a leggere</h2>
            <Link href="/blog" className="btn btn-ghost">Tutti gli articoli<IconArrow className="arrow h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {more.map((m) => (
              <Link key={m.slug} href={`/blog/${m.slug}`} className="card-lift group rounded-2xl border border-line bg-white p-6 hover:border-brand-400">
                <div className="flex items-center gap-2 text-xs"><Pill>{m.category}</Pill><span className="text-muted">{m.readingTime}</span></div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-brand-700">{m.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{m.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
