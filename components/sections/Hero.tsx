import Link from "next/link";
import { Button, ButtonArrow } from "@/components/ui/button";
import Image from "next/image";
import { Activity, PersonStanding } from "lucide-react";
import { SocialIcons } from "@/components/SocialIcons";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen md:min-h-[70vh] pt-16 pb-0 flex items-center xl:items-stretch justify-center md:bg-gray-50">
      <div className="container relative z-30">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12 xl:gap-20 xl:h-full">
          <div
            className="flex flex-col items-center xl:items-start text-center xl:text-left xl:pb-20"
            data-aos="fade-right"
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05] text-balance max-w-2xl text-heading">
              Mais{" "}
              <span className="font-bold text-brand-gradient">movimento,</span>{" "}
              mais qualidade{" "}
              <span className="font-bold text-brand-gradient">de vida.</span>
            </h1>

            <span
              aria-hidden="true"
              className="mt-6 block h-1 w-12 rounded-full bg-brand-gradient"
            />

            <p className="mt-5 max-w-xs text-xl text-heading/80">
              Fisioterapia para você voltar a fazer o que ama.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm font-semibold text-muted-foreground">
                Redes:
              </span>
              <SocialIcons
                className="gap-1"
                colorMode="brand"
                iconSize={14}
                itemClassName="w-7 h-7 rounded-full"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contato" title="Agendar consulta">
                  Agendar consulta
                  <ButtonArrow />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/servicos" title="Tratamentos">
                  Conheça os tratamentos
                  <ButtonArrow />
                </Link>
              </Button>
            </div>
          </div>

          <div
            className="flex justify-center xl:justify-end xl:self-end"
            data-aos="fade-left"
          >
            <div className="relative isolate w-full max-w-[340px] md:max-w-[420px] xl:max-w-[520px]">
              <PersonStanding
                aria-hidden="true"
                strokeWidth={1.25}
                className="pointer-events-none absolute top-[12%] -left-[6%] -z-10 hidden size-28 rotate-12 text-primary/10 xl:block"
              />
              <Activity
                aria-hidden="true"
                strokeWidth={1.25}
                className="pointer-events-none absolute bottom-[18%] -left-[10%] -z-10 hidden size-32 -rotate-6 text-primary/10 xl:block"
              />

              <Image
                src="/assets/banner/hero-banner.png"
                alt="Dra. Amanda Torrigo, fisioterapeuta"
                title="Dra. Amanda Torrigo"
                width={1086}
                height={1448}
                priority
                sizes="(min-width: 1280px) 520px, (min-width: 768px) 420px, 340px"
                className="block w-full h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
