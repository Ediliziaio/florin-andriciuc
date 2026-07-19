import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/chi-sono`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ecosistema`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contatti`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
