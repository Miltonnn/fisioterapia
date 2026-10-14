import { CatalogSection } from "@/components/catalog/CatalogSection";
import { posts } from "./blog.data";

export function Blog() {
  return (
    <CatalogSection
      eyebrow="Blog"
      title="Dicas para cuidar do seu corpo"
      description="Conteúdos sobre postura, prevenção de lesões e qualidade de vida para você se movimentar melhor no dia a dia."
      items={posts}
      allHref="/blog"
      allLabel="Ver todos os posts"
      className="bg-gray-50"
    />
  );
}
