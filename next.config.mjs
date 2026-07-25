/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

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
