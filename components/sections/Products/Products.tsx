import { CatalogSection } from "@/components/catalog/CatalogSection";
import { products } from "./products.data";

export function Products() {
  return (
    <CatalogSection
      eyebrow="Produtos"
      title="Produtos pensados para o seu negócio"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      items={products}
      allHref="/produtos"
      allLabel="Ver todos os produtos"
    />
  );
}
