import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { productSlugs } from "@/lib/productPageData";

// Date di ultima modifica REALI per pagina: vanno aggiornate a mano quando
// il contenuto cambia davvero. Usare "new Date()" qui direbbe a Google che
// tutto cambia a ogni deploy — e Google impara a ignorare il segnale.
const updated = {
  home: "2026-08-06",
  chiSono: "2026-08-06",
  ecosistema: "2026-08-06",
  consulenza: "2026-08-06",
  blog: "2026-08-06",
  contatti: "2026-07-01",
  media: "2026-07-01",
  legal: "2026-07-01",
  products: "2026-08-06",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(updated.home), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/chi-sono`, lastModified: new Date(updated.chiSono), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ecosistema`, lastModified: new Date(updated.ecosistema), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/consulenza`, lastModified: new Date(updated.consulenza), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(updated.blog), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contatti`, lastModified: new Date(updated.contatti), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/media`, lastModified: new Date(updated.media), changeFrequency: "monthly", priority: 0.7 },
    // Pagine legali: indicizzabili di proposito. Per un personal brand sono un
    // segnale di trasparenza (E-E-A-T), non pagine da nascondere.
    { url: `${base}/privacy`, lastModified: new Date(updated.legal), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie`, lastModified: new Date(updated.legal), changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${base}/ecosistema/${slug}`,
    lastModified: new Date(updated.products),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.updated ?? a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
