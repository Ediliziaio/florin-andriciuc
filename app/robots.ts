import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/grazie"] },
      // Crawler AI benvenuti (GEO/AEO)
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-Web", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
