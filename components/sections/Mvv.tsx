import type { LucideIcon } from "lucide-react";
import { Eye, HeartHandshake, Target } from "lucide-react";

type Principio = {
  icone: LucideIcon;
  titulo: string;
  descricao: string;
};

const principios: Principio[] = [
  {
    icone: Target,
    titulo: "Missão",
    descricao:
      "Promover a recuperação do movimento e da qualidade de vida de cada paciente, com um atendimento humanizado e individual.",
  },
  {
    icone: Eye,
    titulo: "Visão",
    descricao:
      "Ser referência em fisioterapia domiciliar, reconhecida pela confiança, pelo cuidado e pelos resultados na vida dos pacientes.",
  },
  {
    icone: HeartHandshake,
    titulo: "Valores",
    descricao:
      "Empatia, ética, respeito à individualidade de cada pessoa e compromisso com a evolução de cada paciente.",
  },
];

export function Mvv() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container flex flex-col items-center gap-16">
        <div
          className="flex max-w-2xl flex-col items-center gap-4 text-center"
          data-aos="fade-up"
        >
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
            Propósito
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-balance text-heading md:text-[2.5rem] md:leading-12">
            O que guia o{" "}
            <span className="text-brand-gradient">meu cuidado</span>
          </h2>

          <p className="text-muted-foreground">
            Princípios presentes em cada atendimento, do primeiro contato à
            sua recuperação.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {principios.map(({ icone: Icone, titulo, descricao }, index) => (
            <li
              key={titulo}
              className="flex flex-col rounded-2xl border border-gray-200/60 bg-gray-50 p-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Icone className="size-5" aria-hidden="true" />
              </span>

              <h3 className="mb-2 text-xl font-semibold text-heading">
                {titulo}
              </h3>

              <p className="leading-relaxed text-muted-foreground">
                {descricao}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
