import type { MetadataRoute } from "next";
import { footerNavigationLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const links = footerNavigationLinks.flatMap((link) => [
    link,
    ...(link.children ?? []),
  ]);

  return links.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
  }));
}
