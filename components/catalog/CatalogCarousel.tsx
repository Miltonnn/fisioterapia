"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CatalogCard } from "./CatalogCard";
import type { CatalogItem } from "./catalog.data";

interface CatalogCarouselProps {
  items: CatalogItem[];
  label: string;
  children?: ReactNode;
}

const arrowClassName =
  "size-8 rounded-full flex items-center justify-center transition-all bg-white text-foreground shadow-md enabled:hover:bg-gray-100 enabled:hover:shadow-lg disabled:bg-gray-100 disabled:text-gray-300 disabled:shadow-none disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function CatalogCarousel({
  items,
  label,
  children,
}: CatalogCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(updateArrows);
    observer.observe(track);

    return () => observer.disconnect();
  }, [updateArrows]);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
        {children}

        <div
          role="group"
          aria-label={`Navegação de ${label}`}
          className="flex gap-3 shrink-0"
        >
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Anterior"
            className={arrowClassName}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Próximo"
            className={arrowClassName}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={updateArrows}
        aria-label={`Lista de ${label}`}
        tabIndex={0}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory overscroll-x-contain scroll-smooth pt-2 pb-6 -mx-1 px-1 scroll-px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none"
      >
        {items.map((item) => (
          <li
            key={item.href}
            className="snap-start shrink-0 basis-[85%] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] xl:basis-[calc((100%-4.5rem)/4)]"
          >
            <CatalogCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
