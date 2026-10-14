import {
  serviceLinks,
  services,
} from "@/components/sections/Services/services.data";
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

  const service = services.find((s) => s.href.endsWith(slug));

  if (!service) return {};

  return {
    title: `${service.name} | SiteBase`,
    description: service.description,
  };
}

export default async function ServicoDetalhe({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.href.endsWith(slug));

  if (!service) return notFound();

  return (
    <section>
      <Breadcrumb />

      <div className="container grid gap-12 py-20 lg:grid-cols-[300px_1fr]">
        <div className="lg:order-2">
          <CatalogDetail item={service} />
        </div>

        <div className="lg:order-1">
          <CatalogAside
            title="Serviços"
            links={serviceLinks}
            currentHref={service.href}
          />
        </div>
      </div>

      <Cta />
      <Diferenciais />
    </section>
  );
}
