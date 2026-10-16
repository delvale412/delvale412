import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projetos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/servicos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/orcamento`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projetos/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
