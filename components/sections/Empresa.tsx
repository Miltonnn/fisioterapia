import Link from "next/link";
import { ButtonArrow } from "@/components/ui/button";
import { ProfilePhoto } from "@/components/sections/ProfilePhoto";
import { siteConfig } from "@/lib/site-config";

type Destaque = {
  titulo: string;
  legenda: string;
};

const destaques: Destaque[] = [
  { titulo: "Home care", legenda: "Fisioterapia no conforto da sua casa" },
  { titulo: "1-on-1", legenda: "Atendimento exclusivo" },
  { titulo: "Biomecânica", legenda: "Especialização em movimento humano" },
];

export function Empresa() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">
      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="hidden lg:col-span-5 lg:block" data-aos="fade-right">
          <ProfilePhoto />
        </div>

        <div
          className="flex flex-col items-start lg:col-span-7"
          data-aos="fade-left"
        >
          <span className="mb-4 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
            Sobre a especialista
          </span>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-balance text-heading md:text-[2.5rem] md:leading-12">
            Mais do que tratar sintomas,{" "}
            <span className="text-brand-gradient">cuidar de pessoas.</span>
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Sou a {siteConfig.name}, fisioterapeuta formada pela Unicsul -
            Universidade Cruzeiro do Sul. Acredito que nenhuma recuperação
            acontece com fichas padronizadas: o movimento humano é individual e
            conta a história de cada corpo.
          </p>

          <p className="mb-8 leading-relaxed text-muted-foreground">
            Cada atendimento começa com uma avaliação cuidadosa e uma escuta
            acolhedora. Juntos, entendemos a origem da sua dor ou limitação e
            construímos um caminho seguro para você recuperar a independência do
            seu corpo, no seu tempo.
          </p>

          <div className="mt-6 mb-16 w-full lg:hidden">
            <ProfilePhoto />
          </div>

          <ul className="mb-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {destaques.map((destaque) => (
              <li
                key={destaque.titulo}
                className="flex flex-col items-center gap-1 rounded-sm shadow-lg border border-gray-200/60 bg-gray-50 p-4 text-center"
              >
                <span className="text-brand-gradient text-2xl font-semibold tracking-tight">
                  {destaque.titulo}
                </span>
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                  {destaque.legenda}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/quem-somos"
            title="Sobre mim"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground transition-colors hover:text-primary"
          >
            Conheça minha abordagem clínica
            <ButtonArrow className="size-4 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
