export type ProductPage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  hero: { eyebrow: string; h1: string; intro: string };
  painsTitle: string;
  painsIntro: string;
  pains: { problem: string; solution: string }[];
  featuresTitle: string;
  featuresIntro: string;
  features: { title: string; text: string }[];
  howTitle: string;
  steps: { n: string; title: string; text: string }[];
  founderQuote: string;
  founderText: string;
  results: string[];
  faq: { q: string; a: string }[];
  relatedArticles: string[]; // slug articoli
  relatedProducts: string[]; // slug prodotti
};
