export const site = {
  name: "Florin Andriciuc",
  legalName: "Florin Andriciuc",
  // Dominio canonico = www (impostato come primario su Vercel; l'apex reindirizza qui).
  domain: "https://www.florinandriciuc.com",
  role: "Founder & CEO di AEDIX",
  tagline: "Costruisco gli strumenti che mancano all'impresa edile",
  description:
    "Sono Florin Andriciuc: imprenditore che ha costruito software e metodi per far crescere le imprese edili. Gestionale, marketing, vendita e controllo di gestione — pensati per chi il cantiere lo vive davvero.",
  // Meta compatti per la SERP: title ≤60 char, description ≤155 char.
  // Google tronca oltre questi limiti — non allungarli.
  seo: {
    title: "Florin Andriciuc — Strumenti per l'impresa edile",
    description:
      "Florin Andriciuc, founder e CEO di AEDIX: gestionale, marketing, vendita e controllo di gestione per far crescere le imprese edili italiane.",
  },
  founder: {
    name: "Florin Andriciuc",
    role: "Imprenditore, founder di EdiliziaInCloud e dell'ecosistema AEDIX",
  },
  // Codice di verifica Google Search Console (metodo "tag HTML").
  // Incolla qui SOLO il valore del content="..." fornito da GSC, poi rideploya.
  googleVerification: "",
  // Tracciamento (GA4 / GTM / Meta Pixel)
  analytics: {
    ga4: "G-XWZ0WLLBKN", // Google Analytics 4 Measurement ID
    gtm: "", // Google Tag Manager container (es. GTM-XXXXXX)
    metaPixel: "912028060826443", // Meta (Facebook) Pixel ID
  },
  email: "florin@florinandriciuc.com",
  phone: "+39 [DA CONFERMARE]",
  social: {
    linkedin: "https://www.linkedin.com/in/florinandriciuc/",
    instagram: "https://www.instagram.com/florin.andriciuc/",
    youtube: "https://www.youtube.com/channel/UC1H6GR9P2ZocPU_p0ZHoGVQ",
    tiktok: "",
  },
  // CORROBORAZIONE ESTERNA — fonti che NON controlli: sono ciò che separa
  // "compaio nei risultati" da "vengo nominato nella risposta" di un LLM.
  // Appena una voce esiste, incolla l'URL qui: entra automaticamente nel sameAs
  // dello schema Person. Le voci vuote vengono ignorate.
  externalProfiles: {
    wikidata: "", // es. https://www.wikidata.org/wiki/Q123456789
    crunchbase: "", // es. https://www.crunchbase.com/person/florin-andriciuc
    amazonAuthor: "", // pagina autore, quando esce il libro
    // Talk su ted.com — fonte terza verificata (trovata nella baseline AEO ago 2026)
    tedTalk: "https://www.ted.com/talks/florin_andriciuc_come_realizzare_i_propri_obiettivi",
  },
  cta: {
    primaryLabel: "Consulenza gratuita",
    primaryHref: "/contatti",
  },
  // BIO CANONICHE — vanno ripetute TESTUALMENTE ovunque (author box, press kit,
  // profili, podcast). Le varianti indeboliscono l'entità agli occhi di Google e degli LLM.
  bio: {
    oneLine:
      "Florin Andriciuc, founder e CEO di AEDIX, costruisce software e metodi per le imprese edili italiane.",
    short:
      "Florin Andriciuc è un imprenditore italiano, founder e CEO di AEDIX. Dopo anni nel settore edile ha costruito l'ecosistema di strumenti per l'impresa di costruzioni: il gestionale EdiliziaInCloud, Marketing Edile, Vendita Edile e il metodo di controllo di gestione Numeri in Edilizia.",
    positioning:
      "Florin Andriciuc è l'imprenditore italiano che ha costruito un ecosistema completo di strumenti digitali per l'impresa edile: gestione, acquisizione clienti, vendita e controllo di gestione.",
  },
} as const;

export const nav = [
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Ecosistema", href: "/ecosistema" },
  { label: "Consulenza", href: "/consulenza" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
] as const;
