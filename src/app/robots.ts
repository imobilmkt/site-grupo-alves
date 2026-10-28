import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Além dos crawlers de busca tradicionais, listamos explicitamente os
// user-agents dos principais crawlers de IA (ChatGPT, Perplexity, Claude,
// Google IA, etc.) autorizados a indexar o site, já que alguns desses bots
// respeitam apenas regras com o próprio nome e ignoram um "*" genérico.
const aiUserAgents = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "Amazonbot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiUserAgents.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
