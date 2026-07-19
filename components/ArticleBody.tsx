import type { Block } from "@/lib/articles";
import { IconQuote } from "./Icons";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-fa">
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        if (b.type === "quote")
          return (
            <blockquote
              key={i}
              className="my-8 rounded-2xl border-l-4 border-accent-500 bg-bg-soft p-6 sm:p-7"
            >
              <IconQuote className="h-7 w-7 text-gold-500" />
              <p className="mt-2 font-serif text-xl italic leading-snug text-navy-900">{b.text}</p>
            </blockquote>
          );
        return null;
      })}
    </div>
  );
}
