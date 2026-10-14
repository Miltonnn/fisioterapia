import Image from "next/image";
import type { CatalogItem } from "@/components/catalog/catalog.data";

interface ServiceDetailProps {
  service: CatalogItem;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="container py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="text-left">
        <h1 className="text-4xl font-bold mb-6">{service.name}</h1>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl aspect-[564/350]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
