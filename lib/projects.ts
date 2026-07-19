export type BrandGroup = "prodotto" | "community" | "gruppo" | "ai";

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string; // dominio leggibile (per sitelink/UX)
  kicker: string;
  role: string;
  tagline: string;
  description: string;
  bullets: string[];
  featured?: boolean;
  accent: "brand" | "accent" | "gold";
  group: BrandGroup;
  knowsAbout: string[]; // per schema/GEO
};

// L'ecosistema AEDIX: i brand su cui punta il personal brand.
// 4 prodotti (le leve), 1 community, 1 gruppo (la casa madre).
export const projects: Project[] = [
  {
    slug: "edilizia-in-cloud",
    name: "EdiliziaInCloud",
    url: "https://www.ediliziaincloud.com/",
    domain: "ediliziaincloud.com",
    kicker: "Il gestionale",
    role: "Founder & CEO",
    tagline: "Il gestionale cloud per l'impresa edile",
    description:
      "Il software che tiene insieme tutto: preventivi, commesse, cantieri, DDT, magazzino, fatturazione elettronica, CRM e AI. Un'unica piattaforma pensata per chi costruisce, non per i contabili.",
    bullets: [
      "Preventivi e commesse sotto controllo",
      "Fatturazione elettronica e DDT integrati",
      "CRM, marketing e automazioni con AI",
    ],
    featured: true,
    accent: "brand",
    group: "prodotto",
    knowsAbout: ["gestionale edilizia", "software impresa edile", "fatturazione elettronica edilizia", "gestione cantieri", "preventivi edili"],
  },
  {
    slug: "marketing-edile",
    name: "Marketing Edile",
    url: "https://www.marketingedile.com/",
    domain: "marketingedile.com",
    kicker: "L'acquisizione",
    role: "Founder",
    tagline: "Più richieste di lavoro, meno passaparola a caso",
    description:
      "Il metodo e i servizi di marketing pensati solo per le imprese edili: campagne, landing e funnel che portano contatti reali di clienti che vogliono ristrutturare o costruire.",
    bullets: [
      "Campagne Meta e Google per l'edilizia",
      "Landing e funnel che convertono",
      "Lead qualificati, non perditempo",
    ],
    accent: "accent",
    group: "prodotto",
    knowsAbout: ["marketing per imprese edili", "acquisizione clienti edilizia", "lead generation edile", "campagne Meta edilizia"],
  },
  {
    slug: "vendita-edile",
    name: "Vendita Edile",
    url: "https://www.venditaedile.it/",
    domain: "venditaedile.it",
    kicker: "La chiusura",
    role: "Founder",
    tagline: "Trasforma i preventivi in contratti firmati",
    description:
      "Il sistema di vendita per l'imprenditore edile: come gestire il primo contatto, presentare il preventivo e chiudere senza svendere il proprio lavoro.",
    bullets: [
      "Trattativa e chiusura senza sconti al buio",
      "Preventivi che vendono il valore",
      "Follow-up che non fa perdere il cliente",
    ],
    accent: "gold",
    group: "prodotto",
    knowsAbout: ["vendita nel settore edile", "chiusura preventivi", "trattativa impresa edile", "tecniche di vendita edilizia"],
  },
  {
    slug: "numeri-in-edilizia",
    name: "Numeri in Edilizia",
    url: "https://numerinedilizia.com/",
    domain: "numerinedilizia.com",
    kicker: "Il controllo",
    role: "Founder",
    tagline: "Il controllo di gestione che fa guadagnare davvero",
    description:
      "Il metodo che insegna all'imprenditore edile a leggere margini, costi e commesse — per trasformare il fatturato in utile reale invece di lavorare tanto e guadagnare poco.",
    bullets: [
      "Margine di commessa sotto controllo",
      "Costi di cantiere e di struttura chiari",
      "Decisioni sui numeri, non a sensazione",
    ],
    accent: "brand",
    group: "prodotto",
    knowsAbout: ["controllo di gestione edilizia", "margine di commessa", "redditività impresa edile", "budget di cantiere"],
  },
  {
    slug: "imprenditore-edile",
    name: "Imprenditore Edile",
    url: "https://www.imprenditoredile.it/",
    domain: "imprenditoredile.it",
    kicker: "La community",
    role: "Founder",
    tagline: "Contenuti e community per chi fa impresa in edilizia",
    // descrizione allineabile all'effettivo posizionamento del progetto
    description:
      "Il punto di riferimento editoriale per l'imprenditore edile: guide pratiche, casi reali e strumenti per crescere. La porta d'ingresso all'ecosistema, dove tutto parte dai problemi veri del cantiere.",
    bullets: [
      "Guide e approfondimenti pratici",
      "Casi reali di imprese edili",
      "Una community di imprenditori del settore",
    ],
    accent: "accent",
    group: "community",
    knowsAbout: ["community imprenditori edili", "formazione impresa edile", "contenuti per imprese di costruzioni"],
  },
  {
    slug: "edilizia-io",
    name: "edilizia.io",
    url: "https://edilizia.io/",
    domain: "edilizia.io",
    kicker: "L'AI",
    role: "Founder",
    tagline: "L'intelligenza artificiale al servizio dell'edilizia",
    // descrizione allineabile ai servizi precisi di edilizia.io
    description:
      "Strumenti di intelligenza artificiale pensati per l'impresa edile: automatizzano il lavoro ripetitivo e aiutano a decidere più in fretta, così tu resti sul cantiere. Costruiamo il futuro dell'edilizia con l'AI e le persone.",
    bullets: [
      "AI applicata ai problemi reali del cantiere",
      "Meno lavoro ripetitivo, più tempo per costruire",
      "Tecnologia al servizio delle persone",
    ],
    accent: "brand",
    group: "ai",
    knowsAbout: ["intelligenza artificiale edilizia", "AI per imprese edili", "automazione settore costruzioni"],
  },
  {
    slug: "aedix",
    name: "AEDIX",
    url: "https://www.aedix.it/",
    domain: "aedix.it",
    kicker: "Il gruppo",
    role: "Founder & CEO",
    tagline: "La casa madre dell'ecosistema per l'edilizia",
    description:
      "Il gruppo che riunisce software e servizi per digitalizzare e far crescere le imprese edili italiane. Sotto AEDIX nascono EdiliziaInCloud e gli altri brand: una sola visione, un solo obiettivo.",
    bullets: [
      "Software e servizi per l'edilizia",
      "Innovazione al servizio del cantiere",
      "Un unico gruppo, una sola missione",
    ],
    accent: "gold",
    group: "gruppo",
    knowsAbout: ["software per l'edilizia", "digitalizzazione imprese edili", "innovazione settore costruzioni"],
  },
];

// Solo le 4 "leve" prodotto (per la narrativa 4 problemi → 4 leve)
export const products = projects.filter((p) => p.group === "prodotto");
export const featuredProject = products.find((p) => p.featured)!;
export const extraBrands = projects.filter((p) => p.group !== "prodotto");
