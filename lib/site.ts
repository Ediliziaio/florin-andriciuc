export const site = {
  name: "Florin Andriciuc",
  legalName: "Florin Andriciuc",
  // Dominio canonico (apex). www.florinandriciuc.com reindirizza qui via Vercel.
  domain: "https://florinandriciuc.com",
  role: "Founder & CEO di AEDIX",
  tagline: "Costruisco gli strumenti che mancano all'impresa edile",
  description:
    "Sono Florin Andriciuc: imprenditore che ha costruito software e metodi per far crescere le imprese edili. Gestionale, marketing, vendita e controllo di gestione — pensati per chi il cantiere lo vive davvero.",
  founder: {
    name: "Florin Andriciuc",
    role: "Imprenditore, founder di EdiliziaInCloud e dell'ecosistema AEDIX",
  },
  // Codice di verifica Google Search Console (metodo "tag HTML").
  // Incolla qui SOLO il valore del content="..." fornito da GSC, poi rideploya.
  googleVerification: "",
  // Tracciamento — [DA CONFERMARE] inserire ID reali GA4 / GTM
  analytics: {
    ga4: "", // Google Analytics 4 Measurement ID (es. G-XXXXXXX)
    gtm: "", // Google Tag Manager container (es. GTM-XXXXXX)
    metaPixel: "912028060826443", // Meta (Facebook) Pixel ID
  },
  email: "[DA CONFERMARE]@florinandriciuc.com",
  phone: "+39 [DA CONFERMARE]",
  // [DA CONFERMARE] — sostituire con i profili reali
  social: {
    linkedin: "[DA CONFERMARE]",
    instagram: "[DA CONFERMARE]",
    youtube: "[DA CONFERMARE]",
    tiktok: "[DA CONFERMARE]",
  },
  cta: {
    primaryLabel: "Parla con me",
    primaryHref: "/contatti",
  },
} as const;

export const nav = [
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Ecosistema", href: "/ecosistema" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
] as const;
