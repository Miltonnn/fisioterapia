import {
  productLinks,
  products,
} from "@/components/sections/Products/products.data";
import { CatalogDetail } from "@/components/catalog/CatalogDetail";
import { CatalogAside } from "@/components/catalog/CatalogAside";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Cta } from "@/components/sections/Cta";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((s) => s.href.endsWith(slug));

  if (!product) return {};

  return {
    title: `${product.name} | SiteBase`,
    description: product.description,
  };
}

export default async function ProdutoDetalhe({ params }: Props) {
  const { slug } = await params;

  const product = products.find((s) => s.href.endsWith(slug));

  if (!product) return notFound();

  return (
    <section>
      <Breadcrumb />

      <div className="container grid gap-12 py-20 lg:grid-cols-[300px_1fr]">
        <div className="lg:order-2">
          <CatalogDetail item={product} />
        </div>

        <div className="lg:order-1">
          <CatalogAside
            title="Produtos"
            links={productLinks}
            currentHref={product.href}
          />
        </div>
      </div>

      <Cta />
      <Diferenciais />
    </section>
  );
}
