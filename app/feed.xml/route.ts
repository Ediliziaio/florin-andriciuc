import { publishedArticles } from "@/lib/articles";
import { site } from "@/lib/site";

// RSS del blog: solo articoli usciti, si aggiorna via ISR come il resto del
// sito — gli articoli programmati entrano nel feed alla loro data.
export const revalidate = 3600;

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const items = publishedArticles()
    .map((a) => {
      const url = `${site.domain}/blog/${a.slug}`;
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <category>${escapeXml(a.category)}</category>
      <pubDate>${new Date(`${a.date}T09:00:00+02:00`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog di ${escapeXml(site.name)}</title>
    <link>${site.domain}/blog</link>
    <atom:link href="${site.domain}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Idee pratiche per l'impresa edile: gestione, marketing, vendita e controllo di gestione, scritte in prima persona da Florin Andriciuc.</description>
    <language>it-IT</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
