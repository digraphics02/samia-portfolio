import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { portfolioProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}about/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}portfolio/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}contact/`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${siteConfig.url}portfolio/${project.slug}/`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
