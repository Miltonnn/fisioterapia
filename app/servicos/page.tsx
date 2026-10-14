import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CatalogCard } from "@/components/catalog/CatalogCard";
import { services } from "@/components/sections/Services/services.data";
import { siteSections } from "@/lib/site-sections";
import { notFound } from "next/navigation";

export default function Servicos() {
  if (!siteSections.servicos) notFound();

  return (
    <section>
      <Breadcrumb />

      <div className="container py-15">
        <h2 className="text-4xl font-bold mb-20">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <CatalogCard key={service.href} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
