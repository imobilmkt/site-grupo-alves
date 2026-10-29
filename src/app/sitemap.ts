import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/imoveis", "/aluguel", "/sobre", "/contato", "/financie", "/negocie"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const propertyRoutes = properties.map((property) => ({
    url: `${siteUrl}/imoveis/${property.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
