import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Cta } from "@/components/sections/Cta";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Mvv } from "@/components/sections/Mvv";
import { ProfilePhoto } from "@/components/sections/ProfilePhoto";
import { siteConfig } from "@/lib/site-config";

export default function QuemSomosPage() {
  return (
    <section>
      <Breadcrumb />
      <div className="overflow-hidden">
        <div className="container grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-12 lg:py-24">
          <div
            className="flex flex-col items-start lg:col-span-7"
            data-aos="fade-right"
          >
            <span className="mb-4 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
              Sobre mim
            </span>

            <h1 className="mb-6 text-3xl font-semibold tracking-tight text-balance text-heading md:text-[2.5rem] md:leading-12">
              Uma trajetória dedicada{" "}
              <span className="text-brand-gradient">ao seu movimento</span>
            </h1>

            <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
              <p className="text-lg">
                Sou a {siteConfig.name}, fisioterapeuta formada pela Unicsul -
                Universidade Cruzeiro do Sul. Escolhi a fisioterapia por
                acreditar que recuperar o movimento é devolver autonomia,
                confiança e qualidade de vida.
              </p>
              <p>
                Atendo em domicílio (home care), levando o tratamento até o
                conforto da sua casa. Assim, você não precisa se deslocar e o
                cuidado se adapta à sua rotina e ao seu ambiente real.
              </p>
              <p>
                Cada tratamento começa com uma avaliação cuidadosa e uma escuta
                atenta. A partir dela, montamos juntos um plano personalizado,
                com acompanhamento próximo da sua evolução a cada sessão.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left">
            <ProfilePhoto />
          </div>
        </div>
      </div>
      <Diferenciais />
      <Cta />
      <Mvv />
    </section>
  );
}
