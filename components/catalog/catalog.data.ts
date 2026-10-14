import type { NavLink } from "@/lib/navigation";
import { isSectionEnabled, type SiteSection } from "@/lib/site-sections";

export type CatalogItem = NavLink & {
  image: string;
};

const DEFAULT_CATALOG_IMAGE = "/assets/notimage.jpg";

export function createCatalogItems(
  links: NavLink[],
  section: SiteSection
): CatalogItem[] {
  if (!isSectionEnabled(section)) return [];

  return links.map((link) => ({
    ...link,
    image: DEFAULT_CATALOG_IMAGE,
  }));
}
