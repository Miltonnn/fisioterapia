import { Button, ButtonArrow } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";
import { CatalogCarousel } from "./CatalogCarousel";
import type { CatalogItem } from "./catalog.data";

interface CatalogSectionProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  items: CatalogItem[];
  allHref: string;
  allLabel: string;
  className?: string;
}

export function CatalogSection({
  eyebrow,
  title,
  description,
  items,
  allHref,
  allLabel,
  className,
}: CatalogSectionProps) {
  return (
    <section className={cn("overflow-hidden py-20", className)}>
      <div className="container">
        <CatalogCarousel items={items} label={eyebrow.toLowerCase()}>
          <div className="text-left" data-aos="fade-left">
            <span className="text-brand-gradient  mb-1 inline-block font-medium text-lg">
              {eyebrow}
            </span>
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-balance text-heading after:mt-4 after:block after:h-1 after:w-16 after:rounded-full after:bg-brand-gradient md:text-3xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-2xl text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </CatalogCarousel>

        <div className="flex justify-center mt-9">
          <Button asChild size="lg">
            <Link href={allHref} title={eyebrow}>
              {allLabel}
              <ButtonArrow />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
