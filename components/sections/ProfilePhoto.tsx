import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ProfilePhoto() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -top-6 -right-3 bottom-2 left-1.5 -rotate-2 rounded-[40px] bg-primary/15 lg:-right-6"
      />

      <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white bg-linear-to-b from-gray-50 to-primary/20 shadow-[0_16px_40px_-10px_rgba(15,36,56,0.1)] sm:h-[520px] lg:h-[606px]">
        <Image
          src="/assets/banner/hero-banner.png"
          alt="Dra. Amanda Torrigo, fisioterapeuta"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain object-bottom"
        />
      </div>

      <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white/95 px-5 py-3 shadow-[0_8px_24px_-4px_rgba(15,36,56,0.08)] backdrop-blur-sm lg:-right-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          <BadgeCheck className="size-5" aria-hidden="true" />
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-sm leading-none font-semibold tracking-wide text-foreground">
            {siteConfig.crefito}
          </span>
          <span className="text-xs font-semibold tracking-wide text-muted-foreground">
            Fisioterapeuta formada pela Unicsul
          </span>
        </span>
      </div>
    </div>
  );
}
