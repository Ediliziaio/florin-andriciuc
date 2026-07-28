/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Gli asset statici (font, chunk JS/CSS) non sono pagine: se Google li scopre finiscono
  // in "scansionata ma non indicizzata", che sporca i report e brucia crawl budget.
  // X-Robots-Tag: noindex li esclude dall'indice SENZA bloccarne il crawl, così il
  // rendering della pagina resta intatto (bloccarli da robots.txt sarebbe un errore).
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },

  // 301 dai vecchi slug del blog (guide how-to) verso i nuovi pezzi in prima persona.
  // Servono a non perdere l'indicizzazione già acquisita: quegli URL erano in sitemap
  // e già inviati a IndexNow.
  async redirects() {
    return [
      {
        source: "/blog/gestionale-impresa-edile-guida-completa",
        destination: "/blog/perche-ho-costruito-un-gestionale",
        permanent: true,
      },
      {
        source: "/blog/vendere-preventivi-edili-guida",
        destination: "/blog/tre-preventivi-persi",
        permanent: true,
      },
      {
        source: "/blog/trovare-clienti-impresa-edile-guida",
        destination: "/blog/come-trovavo-i-clienti",
        permanent: true,
      },
      // I due articoli su "trovare clienti" sono stati fusi in uno solo.
      {
        source: "/blog/impresa-edile-trovare-clienti-2026",
        destination: "/blog/come-trovavo-i-clienti",
        permanent: true,
      },
      {
        source: "/blog/controllo-di-gestione-impresa-edile-guida",
        destination: "/blog/anno-che-ho-rischiato-di-chiudere",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
