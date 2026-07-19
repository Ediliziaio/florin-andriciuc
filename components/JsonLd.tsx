import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

type Json = Record<string, unknown>;

export function JsonLd({ data }: { data: Json | Json[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// URL "sameAs" dell'entità Florin: social reali (esclusi i placeholder) + i brand di proprietà.
// Collegare le proprietà possedute rafforza l'entità agli occhi di Google e delle AI (GEO).
const socialSameAs = Object.values(site.social).filter((u) => u.startsWith("http"));
const AEDIX = projects.find((p) => p.slug === "aedix")!;

export const personSchema: Json = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.domain}/#florin`,
  name: site.name,
  url: site.domain,
  jobTitle: "Imprenditore · Founder & CEO di AEDIX",
  description: site.description,
  knowsAbout: [
    "Software gestionale per imprese edili",
    "Marketing per imprese edili",
    "Vendita nel settore edile",
    "Controllo di gestione edilizia",
    "Digitalizzazione delle imprese di costruzioni",
  ],
  worksFor: { "@id": `${AEDIX.url}#organization` },
  founder: projects.map((p) => ({ "@type": "Organization", name: p.name, url: p.url })),
  sameAs: [...socialSameAs, ...projects.map((p) => p.url)],
};

// Organizzazione principale: AEDIX (casa madre). I brand sono subOrganization/brand.
export const organizationSchema: Json = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${AEDIX.url}#organization`,
  name: "AEDIX",
  url: AEDIX.url,
  description: AEDIX.description,
  founder: { "@id": `${site.domain}/#florin` },
  areaServed: "IT",
  knowsAbout: [...new Set(projects.flatMap((p) => p.knowsAbout))],
  subOrganization: projects
    .filter((p) => p.slug !== "aedix")
    .map((p) => ({ "@type": "Organization", name: p.name, url: p.url, description: p.tagline })),
  brand: projects.filter((p) => p.slug !== "aedix").map((p) => ({ "@type": "Brand", name: p.name, url: p.url })),
  sameAs: socialSameAs,
};

// ItemList dei brand → aiuta i sitelink e la comprensione dell'ecosistema (GEO/AEO).
export function ecosystemItemListSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ecosistema AEDIX per l'impresa edile",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: p.url,
      name: p.name,
      description: p.tagline,
    })),
  };
}

export const websiteSchema: Json = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.domain}/#website`,
  url: site.domain,
  name: site.name,
  inLanguage: "it-IT",
  publisher: { "@id": `${site.domain}/#florin` },
};

export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: "it-IT",
    author: { "@id": `${site.domain}/#florin` },
    publisher: { "@id": `${site.domain}/#organization` },
    mainEntityOfPage: opts.url,
  };
}
