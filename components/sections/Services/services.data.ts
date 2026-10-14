import type { NavLink } from "@/lib/navigation";
import { createCatalogItems } from "@/components/catalog/catalog.data";

export const serviceLinks: NavLink[] = [
  {
    name: "Fisioterapia Ortopédica",
    href: "/servicos/fisioterapia-ortopedica",
    description:
      "Tratamento de dores, lesões musculares, articulares e pós-operatórios, com foco na recuperação dos movimentos e na redução da dor.",
    image: "/assets/servicos/fisioterapia-ortopedica.jpg",
    details: [
      "A fisioterapia ortopédica é indicada para quem sente dores nas costas, no pescoço, nos ombros, nos joelhos ou em outras articulações, e também para quem está se recuperando de fraturas, entorses, tendinites ou cirurgias ortopédicas.",
      "O tratamento começa com uma avaliação completa, em que identificamos a origem da dor e as limitações de movimento. A partir disso, montamos um plano individualizado que combina terapia manual, exercícios terapêuticos e recursos como eletroterapia e crioterapia, sempre de acordo com a fase de recuperação de cada paciente.",
      "O objetivo é reduzir a dor, devolver a mobilidade e a força muscular e permitir que você volte às suas atividades do dia a dia com segurança e confiança.",
    ],
  },
  {
    name: "Pilates Clínico",
    href: "/servicos/pilates-clinico",
    description:
      "Exercícios orientados por fisioterapeuta para fortalecer o core, melhorar a postura, a flexibilidade e prevenir novas lesões.",
    image: "/assets/servicos/pilates-clinico.jpg",
    details: [
      "O Pilates Clínico é uma adaptação do método Pilates conduzida por fisioterapeuta, com exercícios escolhidos de acordo com a necessidade e as limitações de cada pessoa. É indicado tanto para a reabilitação de lesões quanto para quem busca mais qualidade de vida.",
      "As aulas trabalham o fortalecimento do core, que é a musculatura profunda do abdômen e da coluna, além da flexibilidade, do equilíbrio e da consciência corporal. Os exercícios podem ser feitos no solo ou em aparelhos, com acompanhamento próximo para garantir a execução correta.",
      "Com a prática regular, é comum perceber melhora na postura, alívio de dores crônicas, mais disposição e menor risco de novas lesões.",
    ],
  },
  {
    name: "RPG - Reeducação Postural Global",
    href: "/servicos/rpg",
    description:
      "Método que corrige desvios posturais por meio de alongamentos globais, aliviando dores na coluna, ombros e pescoço.",
    image: "/assets/servicos/rpg.jpg",
    details: [
      "A Reeducação Postural Global (RPG) é um método que enxerga o corpo como um todo: uma dor no pescoço, por exemplo, pode ter origem em um desequilíbrio na pelve ou nos pés. Por isso, o tratamento não olha apenas para o ponto onde dói.",
      "Nas sessões, o paciente permanece em posturas específicas de alongamento ativo, mantidas por alguns minutos, enquanto o fisioterapeuta orienta a respiração e corrige o posicionamento. Esse trabalho alonga as cadeias musculares encurtadas e reorganiza a postura de forma gradual.",
      "A RPG é indicada para casos de escoliose, hiperlordose, cifose, hérnia de disco, dores crônicas na coluna e tensões causadas pela rotina e pelo tempo prolongado sentado.",
    ],
  },
  {
    name: "Fisioterapia Esportiva",
    href: "/servicos/fisioterapia-esportiva",
    description:
      "Prevenção e reabilitação de lesões em atletas e praticantes de atividade física, com retorno seguro ao esporte.",
    image: "/assets/servicos/fisioterapia-esportiva.jpg",
    details: [
      "A fisioterapia esportiva atende desde atletas profissionais até quem corre no fim de semana, faz musculação ou pratica qualquer outra atividade física. O foco é tratar lesões e, principalmente, evitar que elas aconteçam.",
      "Na reabilitação, trabalhamos lesões musculares, entorses, tendinites e pós-operatórios, como a reconstrução do ligamento do joelho. O tratamento evolui por etapas, com exercícios cada vez mais próximos do gesto esportivo, até o retorno completo à modalidade.",
      "Na prevenção, avaliamos força, mobilidade e padrões de movimento para identificar pontos de risco e montar um programa que melhora o desempenho e reduz as chances de novas lesões.",
    ],
  },
  {
    name: "Fisioterapia Geriátrica",
    href: "/servicos/fisioterapia-geriatrica",
    description:
      "Cuidado voltado à pessoa idosa para manter a autonomia, o equilíbrio e a força, reduzindo o risco de quedas.",
    image: "/assets/servicos/fisioterapia-geriatrica.jpg",
    details: [
      "Com o passar dos anos, é natural perder um pouco de força, equilíbrio e flexibilidade. A fisioterapia geriátrica atua justamente nesses pontos para que a pessoa idosa mantenha a independência nas tarefas do dia a dia, como caminhar, subir escadas e levantar da cadeira.",
      "O atendimento inclui exercícios de fortalecimento, treino de equilíbrio e de marcha, alongamentos e orientações para tornar a casa mais segura. Também acompanhamos condições comuns nessa fase, como artrose, osteoporose e a recuperação após internações ou cirurgias.",
      "Tudo é feito com respeito ao ritmo de cada paciente, com o objetivo de prevenir quedas, aliviar dores e preservar a autonomia e a qualidade de vida.",
    ],
  },
  {
    name: "Drenagem Linfática",
    href: "/servicos/drenagem-linfatica",
    description:
      "Técnica manual que estimula a circulação linfática, reduz inchaços e auxilia na recuperação pós-cirúrgica.",
    image: "/assets/servicos/drenagem-linfatica.jpg",
    details: [
      "A drenagem linfática é uma técnica de massagem com movimentos suaves, lentos e ritmados que estimulam o sistema linfático, responsável por eliminar o excesso de líquidos e toxinas do corpo.",
      "É muito indicada no pós-operatório de cirurgias plásticas e ortopédicas, ajudando a reduzir o inchaço, os hematomas e o desconforto, além de contribuir para uma recuperação mais rápida. Também auxilia em casos de retenção de líquidos, pernas cansadas e inchaço durante a gestação.",
      "Por ser uma técnica delicada, a drenagem também proporciona sensação de leveza e relaxamento. O número de sessões é definido após a avaliação, de acordo com o objetivo de cada paciente.",
    ],
  },
];

export const services = createCatalogItems(serviceLinks, "servicos");
