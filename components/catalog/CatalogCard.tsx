import { Button, ButtonArrow } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { CatalogItem } from "./catalog.data";

interface CatalogCardProps {
  item: CatalogItem;
}

export function CatalogCard({ item }: CatalogCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col text-left hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-500">
      <div className="relative aspect-[2/1.5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col items-start flex-1 p-6">
        <h3 className="mb-3 font-semibold text-lg">{item.name}</h3>

        <p className="text-muted-foreground mb-6 leading-relaxed flex-1 line-clamp-3">
          {item.description}
        </p>

        <Button
          asChild
          className="mt-auto h-[44px] w-[50%] rounded-[4px]"
          title={`Saiba mais sobre ${item.name}`}
        >
          <Link href={item.href}>
            Saiba mais
            <ButtonArrow />
          </Link>
        </Button>
      </div>
    </div>
  );
}
