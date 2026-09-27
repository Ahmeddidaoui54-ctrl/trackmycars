import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

/**
 * Les moteurs de réponse IA n'explorent que ce qu'on autorise explicitement.
 * Les lister un par un vaut mieux qu'un `*` permissif : certains crawlers
 * ignorent la règle générique et ne suivent que la directive à leur nom.
 */
const aiCrawlers = [
  "GPTBot", // ChatGPT — index d'entraînement et de recherche
  "ChatGPT-User", // navigation à la demande depuis ChatGPT
  "OAI-SearchBot", // index de ChatGPT Search
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini et AI Overviews
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "CCBot", // Common Crawl, source de nombreux modèles
  "Meta-ExternalAgent",
  "Amazonbot",
  "DuckAssistBot",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Autorisation nominative des moteurs de réponse
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
