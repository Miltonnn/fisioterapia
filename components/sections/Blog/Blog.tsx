import { CatalogSection } from "@/components/catalog/CatalogSection";
import { posts } from "./blog.data";

export function Blog() {
  return (
    <CatalogSection
      eyebrow="Blog"
      title="Conteúdos para o seu negócio"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      items={posts}
      allHref="/blog"
      allLabel="Ver todos os posts"
      className="bg-gray-50"
    />
  );
}
