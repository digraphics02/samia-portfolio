import type { MetadataRoute } from "next";
import { indexable, siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: indexable ? "/" : [],
      disallow: indexable ? [] : "/",
    },
    sitemap: `${siteConfig.url}sitemap.xml`,
  };
}
