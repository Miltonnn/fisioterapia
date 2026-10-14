import { products } from "@/components/sections/Products/products.data";
import { ProductDetail } from "@/components/sections/Products/ProductDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

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
      <ProductDetail product={product} />
    </section>
  );
}
