import type { NavLink } from "@/lib/navigation";
import { createCatalogItems } from "@/components/catalog/catalog.data";

export const postLinks: NavLink[] = [
  {
    name: "Dor nas costas no home office: 5 ajustes simples",
    href: "/blog/dor-nas-costas-home-office",
    description:
      "Pequenas mudanças na sua mesa, cadeira e rotina podem fazer muita diferença para quem passa o dia trabalhando sentado.",
    image: "/assets/blog/dor-nas-costas-home-office.jpg",
    details: [
      "Trabalhar de casa trouxe praticidade, mas também levou muita gente a passar horas no sofá, na cama ou em uma cadeira improvisada. O resultado aparece no fim do dia: dor no pescoço, nos ombros e na lombar.",
      "O primeiro ajuste é a altura da tela. O topo do monitor deve ficar na altura dos olhos, para que você não precise inclinar a cabeça para baixo. Se usa notebook, apoie-o sobre livros ou um suporte e utilize teclado e mouse externos.",
      "O segundo é a cadeira: os pés devem ficar apoiados no chão, os joelhos em ângulo próximo de 90 graus e a lombar encostada no encosto. Uma almofada pequena atrás da lombar ajuda a manter a curvatura natural da coluna.",
      "O terceiro é manter os cotovelos apoiados e próximos ao corpo, com os antebraços na altura da mesa. O quarto é fazer pausas: a cada 50 minutos, levante, caminhe um pouco e alongue o pescoço e as costas. Por último, beba água ao longo do dia, o que também obriga você a levantar com mais frequência.",
      "Se a dor persistir mesmo com esses cuidados, vale procurar uma avaliação fisioterapêutica para identificar a causa e tratar o problema antes que ele se torne crônico.",
    ],
  },
  {
    name: "Alongar antes ou depois da corrida?",
    href: "/blog/alongamento-corrida",
    description:
      "Entenda a diferença entre aquecimento e alongamento e saiba o que fazer em cada momento do seu treino de corrida.",
    image: "/assets/blog/alongamento-corrida.jpg",
    details: [
      "Essa é uma das dúvidas mais comuns entre corredores. A resposta curta é: antes da corrida, o ideal é aquecer; depois, é o melhor momento para alongar.",
      "Antes de correr, os músculos ainda estão frios. Em vez de ficar parado segurando um alongamento, prefira um aquecimento dinâmico de 5 a 10 minutos, com caminhada acelerada, trote leve, elevação de joelhos, chutes para trás e rotação de quadril. Isso aumenta a temperatura muscular e prepara as articulações para o impacto.",
      "Depois do treino, os músculos estão aquecidos e mais receptivos. É a hora de fazer alongamentos estáticos, mantendo cada posição por 20 a 30 segundos, com foco em panturrilhas, posteriores de coxa, quadríceps e glúteos.",
      "Lembre-se de que alongamento não deve doer. Sentir a musculatura sendo esticada é normal, mas dor intensa é sinal para diminuir a amplitude. Dores que se repetem após os treinos merecem atenção de um fisioterapeuta.",
    ],
  },
  {
    name: "Pilates ou musculação: qual escolher?",
    href: "/blog/pilates-ou-musculacao",
    description:
      "As duas atividades trazem benefícios diferentes. Veja como escolher a melhor opção para o seu objetivo e o seu momento.",
    image: "/assets/blog/pilates-ou-musculacao.jpg",
    details: [
      "Pilates e musculação são atividades excelentes, mas com focos diferentes. A escolha depende do seu objetivo, do seu histórico de lesões e, principalmente, do que você vai conseguir manter com regularidade.",
      "A musculação é a melhor opção para ganho de massa muscular e de força máxima. Ela também é muito importante para a saúde dos ossos, especialmente após os 40 anos. Os treinos costumam trabalhar grupos musculares de forma isolada, com cargas progressivas.",
      "O Pilates trabalha o corpo de forma mais integrada, com ênfase no core, na postura, na flexibilidade e no controle dos movimentos. Por ser de baixo impacto e feito com acompanhamento próximo, é muito indicado para quem tem dores na coluna ou está se recuperando de uma lesão.",
      "A boa notícia é que você não precisa escolher apenas um. Muitas pessoas combinam as duas práticas: a musculação para força e o Pilates para mobilidade e estabilidade. Na dúvida, uma avaliação com fisioterapeuta ajuda a definir o melhor caminho.",
    ],
  },
  {
    name: "Quando procurar um fisioterapeuta?",
    href: "/blog/quando-procurar-fisioterapeuta",
    description:
      "Muita gente só procura a fisioterapia depois de uma cirurgia. Conheça os sinais de que está na hora de agendar uma avaliação.",
    image: "/assets/blog/quando-procurar-fisioterapeuta.jpg",
    details: [
      "Existe a ideia de que a fisioterapia serve apenas para a recuperação após cirurgias ou acidentes. Na prática, ela atua muito antes disso, tratando dores do dia a dia e prevenindo problemas maiores.",
      "Alguns sinais indicam que vale a pena procurar um fisioterapeuta: dor que dura mais de duas semanas, dor que piora com determinados movimentos, rigidez ao acordar, formigamento nos braços ou nas pernas, dificuldade para realizar tarefas simples ou sensação de instabilidade em alguma articulação.",
      "Também é recomendado procurar acompanhamento ao iniciar uma nova atividade física após um longo período parado, durante a gestação, após o parto e com o avanço da idade, para manter a força e o equilíbrio.",
      "Na primeira consulta, o fisioterapeuta faz uma avaliação completa, entende sua rotina e seus objetivos e monta um plano de tratamento individualizado. Quanto antes o problema é tratado, mais rápida e simples tende a ser a recuperação.",
    ],
  },
  {
    name: "Como prevenir quedas de idosos em casa",
    href: "/blog/prevenir-quedas-idosos",
    description:
      "Adaptações simples no ambiente e exercícios de equilíbrio reduzem muito o risco de quedas na terceira idade.",
    image: "/assets/blog/prevenir-quedas-idosos.jpg",
    details: [
      "As quedas estão entre as principais causas de lesões em pessoas idosas, e a maioria delas acontece dentro de casa. A boa notícia é que boa parte pode ser evitada com cuidados simples.",
      "Comece pelo ambiente: retire tapetes soltos ou fixe-os com fita antiderrapante, mantenha os corredores livres de objetos e fios, instale barras de apoio no banheiro e garanta boa iluminação, inclusive no caminho entre o quarto e o banheiro durante a noite.",
      "Os calçados também fazem diferença. Prefira modelos fechados, com solado antiderrapante e bem ajustados aos pés. Evite andar apenas de meias ou com chinelos largos.",
      "Por fim, o corpo precisa estar preparado. Exercícios de fortalecimento das pernas e treino de equilíbrio, orientados por um fisioterapeuta, melhoram a estabilidade e a confiança para caminhar, reduzindo o risco de quedas e preservando a independência.",
    ],
  },
  {
    name: "Por que fortalecer as costas previne dores",
    href: "/blog/fortalecer-as-costas",
    description:
      "Músculos fortes funcionam como um suporte natural para a coluna. Entenda como o fortalecimento ajuda a evitar dores.",
    image: "/assets/blog/fortalecer-as-costas.jpg",
    details: [
      "A coluna não trabalha sozinha. Ela é sustentada por uma rede de músculos das costas, do abdômen e do quadril, que funcionam como um colete natural, distribuindo as cargas do dia a dia.",
      "Quando essa musculatura está fraca, a coluna e os discos entre as vértebras passam a receber mais sobrecarga. Movimentos simples, como pegar uma sacola no chão ou carregar uma criança no colo, podem então causar dor ou lesão.",
      "Exercícios de fortalecimento, como prancha, ponte de glúteos, exercícios de remada e o Pilates, ajudam a estabilizar a coluna, melhorar a postura e reduzir a frequência das crises de dor lombar.",
      "O ideal é começar com orientação profissional, principalmente se você já sente dor. O fisioterapeuta indica os exercícios certos para o seu caso, com a progressão adequada, para que o fortalecimento traga alívio e não novas lesões.",
    ],
  },
];

export const posts = createCatalogItems(postLinks, "blog");
