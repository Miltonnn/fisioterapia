import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CatalogCard } from "@/components/catalog/CatalogCard";
import { products } from "@/components/sections/Products/products.data";
import { siteSections } from "@/lib/site-sections";
import { notFound } from "next/navigation";

export default function Produtos() {
  if (!siteSections.produtos) notFound();

  return (
    <section>
      <Breadcrumb />

      <div className="container py-15">
        <h2 className="text-4xl font-bold mb-20">Produtos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <CatalogCard key={product.href} item={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
