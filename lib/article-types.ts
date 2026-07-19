export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "links"; title: string; items: { label: string; href: string }[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  // Brand dell'ecosistema a cui l'articolo rimanda (slug in lib/projects.ts)
  relatedProject?: string;
  body: Block[];
  faq?: { q: string; a: string }[];
};

// Nel testo di p/quote/li si possono usare link markdown-style:
//   [etichetta](/pagina-interna)  oppure  [etichetta](https://sito-esterno)
// Il renderer (ArticleBody) li trasforma in <Link> interni o <a> esterni.
