import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Pergunta = {
  pergunta: string;
  resposta: string;
};

const perguntas: Pergunta[] = [
  {
    pergunta: "Preciso de pedido médico para fazer fisioterapia?",
    resposta:
      "Não é obrigatório. O fisioterapeuta é um profissional de primeiro contato e pode avaliar e tratar você diretamente. Se você já tiver um encaminhamento ou exames, traga para a avaliação, pois eles ajudam a complementar o diagnóstico funcional.",
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "A primeira sessão é uma avaliação completa: conversamos sobre seu histórico, suas queixas e seus objetivos, e realizamos testes de movimento, força e mobilidade. A partir disso, montamos um plano de tratamento personalizado para a sua necessidade.",
  },
  {
    pergunta: "Quantas sessões vou precisar?",
    resposta:
      "Depende do tipo de lesão, do tempo de evolução do problema e da sua resposta ao tratamento. Após a avaliação, apresentamos uma estimativa e fazemos reavaliações periódicas para ajustar o plano conforme a sua evolução.",
  },
  {
    pergunta: "A fisioterapia dói?",
    resposta:
      "O objetivo é aliviar a dor, não causá-la. Algumas técnicas e exercícios podem gerar um leve desconforto, que é normal durante a recuperação, mas tudo é feito respeitando os seus limites e sempre com comunicação aberta durante a sessão.",
  },
  {
    pergunta: "Como funciona o atendimento domiciliar?",
    resposta:
      "Vamos até a sua casa com os materiais necessários para a sessão. Você ganha conforto e economiza tempo de deslocamento, com a mesma qualidade de um consultório. É ideal para quem tem mobilidade reduzida, está em pós-operatório ou tem uma rotina corrida.",
  },
  {
    pergunta: "Que roupa devo usar durante as sessões?",
    resposta:
      "Prefira roupas leves e confortáveis, que permitam movimentar livremente a região tratada, como shorts, legging ou camiseta. Se o tratamento for no joelho, por exemplo, um short facilita a avaliação e a aplicação das técnicas.",
  },
];

export function Faq() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container flex flex-col items-center gap-12">
        <div
          className="flex max-w-2xl flex-col items-center gap-4 text-center"
          data-aos="fade-up"
        >
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
            Dúvidas frequentes
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-balance text-heading md:text-[2.5rem] md:leading-12">
            Tire suas <span className="text-brand-gradient">dúvidas</span>
          </h2>

          <p className="text-muted-foreground">
            Reunimos as perguntas mais comuns de quem está começando a
            fisioterapia.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl"
          data-aos="fade-up"
        >
          {perguntas.map(({ pergunta, resposta }, index) => (
            <AccordionItem
              key={pergunta}
              value={`item-${index}`}
              className="border-gray-200"
            >
              <AccordionTrigger className="py-5 text-base font-medium text-heading hover:no-underline hover:text-primary">
                {pergunta}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
