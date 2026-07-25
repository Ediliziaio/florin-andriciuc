import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/grazie"] },
      // Crawler AI benvenuti (GEO/AEO) — lista completa allineata agli altri domini AEDIX
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
