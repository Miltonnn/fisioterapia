import { services } from "@/components/sections/Services/services.data";
import { ServiceDetail } from "@/components/sections/Services/ServiceDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

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
      <ServiceDetail service={service} />
    </section>
  );
}
