import { CatalogSection } from "@/components/catalog/CatalogSection";
import { services } from "./services.data";

export function Services() {
  return (
    <CatalogSection
      eyebrow="Serviços"
      title="Tratamentos personalizados"
      items={services}
      allHref="/servicos"
      allLabel="Ver todos os serviços"
    />
  );
}
