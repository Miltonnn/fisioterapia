import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CatalogItem } from "./catalog.data";

interface CatalogDetailProps {
  item: CatalogItem;
}

export function CatalogDetail({ item }: CatalogDetailProps) {
  return (
    <div className="flex flex-col gap-8 text-left">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`Ampliar imagem: ${item.name}`}
            className="group relative block w-full overflow-hidden rounded-md aspect-[5/2] cursor-zoom-in outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              preload
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-fill transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            <span className="absolute right-3 bottom-3 flex size-10 items-center justify-center rounded-full bg-white/90 text-heading shadow-md transition-transform duration-300 group-hover:scale-110">
              <ZoomIn aria-hidden="true" className="size-5" />
            </span>
          </button>
        </DialogTrigger>

        <DialogContent
          showCloseButton={false}
          aria-describedby={undefined}
          className="max-w-[calc(100%-2rem)] border-none bg-transparent p-0 shadow-none sm:max-w-5xl"
        >
          <DialogTitle className="sr-only">{item.name}</DialogTitle>

          <Image
            src={item.image}
            alt={item.name}
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="mx-auto h-auto max-h-[85dvh] w-auto max-w-full rounded-md object-contain"
          />

          <DialogClose
            aria-label="Fechar imagem"
            className="absolute -top-3 -right-3 flex size-10 items-center justify-center rounded-full bg-white text-heading shadow-md transition-transform duration-300 hover:scale-110 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none"
          >
            <X aria-hidden="true" className="size-5" />
          </DialogClose>
        </DialogContent>
      </Dialog>

      <div>
        <h1 className="text-4xl font-bold mb-6">{item.name}</h1>

        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
          {(item.details ?? [item.description]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
