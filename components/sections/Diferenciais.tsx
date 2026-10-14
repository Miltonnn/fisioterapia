import type { LucideIcon } from "lucide-react";
import {
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  House,
  Timer,
} from "lucide-react";

type Diferencial = {
  icone: LucideIcon;
  titulo: string;
  descricao: string;
};

const diferenciais: Diferencial[] = [
  {
    icone: Timer,
    titulo: "Atendimento individualizado",
    descricao:
      "Sessões dedicadas integralmente a você, com atenção total do início ao fim de cada atendimento.",
  },
  {
    icone: ClipboardList,
    titulo: "Plano de tratamento personalizado",
    descricao:
      "Sem protocolos padronizados: cada intervenção respeita seus objetivos pessoais e a sua rotina real.",
  },
  {
    icone: ChartNoAxesColumnIncreasing,
    titulo: "Acompanhamento da evolução",
    descricao:
      "Reavaliações periódicas para acompanhar seu progresso em movimento, força e controle da dor.",
  },
  {
    icone: House,
    titulo: "Atendimento no conforto da sua casa",
    descricao:
      "Fisioterapia domiciliar (home care), sem deslocamento, com o mesmo cuidado e profissionalismo de um consultório.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container flex flex-col items-center gap-16">
        <div
          className="flex max-w-2xl flex-col items-center gap-4 text-center"
          data-aos="fade-up"
        >
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
            Excelência clínica
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-balance text-heading md:text-[2.5rem] md:leading-12">
            Por que escolher um{" "}
            <span className="text-brand-gradient">
              acompanhamento sob medida
            </span>
          </h2>

          <p className="text-muted-foreground">
            Princípios que guiam cada atendimento, com foco em eficácia,
            conforto e resultados duradouros.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map(({ icone: Icone, titulo, descricao }, index) => (
            <li
              key={titulo}
              className="flex flex-col rounded-2xl border border-gray-200/60 bg-white p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Icone className="size-5" aria-hidden="true" />
              </span>

              <h3 className="mb-2 text-lg leading-7 font-medium text-heading">
                {titulo}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {descricao}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
