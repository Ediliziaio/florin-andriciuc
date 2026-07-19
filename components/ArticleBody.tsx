import Link from "next/link";
import type { Block } from "@/lib/article-types";
import { IconQuote, IconArrow } from "./Icons";
import { ArticleIllustration, kindFromProject } from "./ArticleIllustration";

// Parser minimale per link markdown-style: [etichetta](href)
// href che inizia con "/" → <Link> interno; altrimenti <a> esterno (dofollow).
function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    if (href.startsWith("/")) {
      out.push(
        <Link key={i++} href={href} className="font-medium text-brand-600 link-u">
          {label}
        </Link>,
      );
    } else {
      out.push(
        <a key={i++} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 link-u">
          {label}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function ArticleBody({ blocks, projectSlug }: { blocks: Block[]; projectSlug?: string }) {
  // Punto di inserimento del grafico: prima del secondo titolo H2 (a metà articolo).
  const h2Indices = blocks.map((b, i) => (b.type === "h2" ? i : -1)).filter((i) => i >= 0);
  const figureAt = h2Indices.length >= 2 ? h2Indices[1] : -1;
  const kind = kindFromProject(projectSlug);

  return (
    <div className="prose-fa">
      {blocks.map((b, i) => {
        const figure =
          i === figureAt ? (
            <figure key={`fig-${i}`} className="not-prose my-10">
              <div className="overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-brand-50 to-accent-100 p-6 sm:p-8">
                <ArticleIllustration kind={kind} className="mx-auto block h-auto w-full max-w-md" />
              </div>
            </figure>
          ) : null;

        if (b.type === "h2") return [figure, <h2 key={i}>{b.text}</h2>];
        if (b.type === "h3")
          return (
            <h3 key={i} className="mt-8 text-xl font-bold text-navy-900">
              {b.text}
            </h3>
          );
        if (b.type === "p") return <p key={i}>{renderInline(b.text)}</p>;
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{renderInline(it)}</li>
              ))}
            </ul>
          );
        if (b.type === "quote")
          return (
            <blockquote key={i} className="my-8 rounded-2xl border-l-4 border-accent-500 bg-bg-soft p-6 sm:p-7">
              <IconQuote className="h-7 w-7 text-gold-500" />
              <p className="mt-2 font-serif text-xl italic leading-snug text-navy-900">{renderInline(b.text)}</p>
            </blockquote>
          );
        if (b.type === "links")
          return (
            <div key={i} className="not-prose my-8 rounded-2xl border border-line bg-bg-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">{b.title}</p>
              <ul className="mt-4 grid gap-2.5">
                {b.items.map((it, j) => {
                  const internal = it.href.startsWith("/");
                  const cls =
                    "group inline-flex items-center gap-2 font-display text-sm font-bold text-navy-900 hover:text-brand-700";
                  return (
                    <li key={j}>
                      {internal ? (
                        <Link href={it.href} className={cls}>
                          <IconArrow className="h-4 w-4 text-accent-600 transition group-hover:translate-x-1" />
                          {it.label}
                        </Link>
                      ) : (
                        <a href={it.href} target="_blank" rel="noopener noreferrer" className={cls}>
                          <IconArrow className="h-4 w-4 text-accent-600 transition group-hover:translate-x-1" />
                          {it.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        return null;
      })}
    </div>
  );
}
