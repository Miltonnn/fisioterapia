import Link from "next/link";
import { Button, ButtonArrow } from "@/components/ui/button";
import Image from "next/image";
import { SocialIcons } from "@/components/SocialIcons";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen md:min-h-[70vh] py-16 xl:pb-0 flex items-center xl:items-stretch justify-center md:bg-gray-50">
      <div className="container relative z-30">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-20 xl:h-full">
          <div
            className="flex flex-col items-center xl:items-start text-center xl:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.1] text-balance max-w-xl text-heading">
              Fisioterapia que devolve{" "}
              <span className="text-brand-gradient">
                a liberdade do seu movimento
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Sou a Dra. Amanda Torrigo, fisioterapeuta formada pela Unicsul -
              Universidade Cruzeiro do Sul. Atendimento humanizado e
              personalizado para ajudar você a aliviar dores, recuperar a
              mobilidade e voltar a fazer o que gosta.
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

          <div className="flex justify-end xl:self-end" data-aos="fade-left">
            <Image
              src="/assets/banner/hero-banner.png"
              alt="Dra. Amanda Torrigo, fisioterapeuta"
              title="Dra. Amanda Torrigo"
              width={1086}
              height={1448}
              priority
              className="hidden xl:block w-full max-w-[520px] h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
