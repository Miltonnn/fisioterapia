import Link from "next/link";
import { Button, ButtonArrow } from "@/components/ui/button";
import Image from "next/image";
import {
  HeroArc,
  HeroCornerWaves,
} from "@/components/sections/HeroDecorations";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen md:min-h-[70vh] pt-16 pb-0 flex items-center xl:items-stretch justify-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/banner/bg-fundo-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover blur-[3px] brightness-90"
        />
        <div className="absolute inset-0 bg-white/20 xl:bg-linear-to-r xl:from-white/60 xl:from-5% xl:via-white/20 xl:via-30% xl:to-transparent xl:to-45%" />
        <HeroCornerWaves className="absolute bottom-0 left-0 h-40 w-full md:h-56 xl:w-[60%]" />
      </div>

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
            <div className="relative isolate w-full max-w-[340px] md:max-w-[440px] xl:max-w-[560px]">
              <HeroArc className="absolute top-0 -left-[20%] xl:-top-[10%] -z-10 h-auto w-[190%]" />

              <Image
                src="/assets/banner/hero-banner.png"
                alt="Dra. Amanda Torrigo, fisioterapeuta"
                title="Dra. Amanda Torrigo"
                width={1086}
                height={1448}
                priority
                sizes="(min-width: 1280px) 560px, (min-width: 768px) 440px, 340px"
                className="block w-full h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
