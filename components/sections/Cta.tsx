import Link from "next/link";
import { Button, ButtonArrow } from "../ui/button";

export function Cta() {
  return (
    <section className="py-20">
      <div
        className="container rounded-3xl flex flex-col items-center justify-center gap-5 text-center bg-brand-gradient py-20 shadow-2xl"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold text-white">
          Pronto para dar o primeiro passo na sua recuperação?
        </h2>
        <p className="text-lg text-gray-100">
          Entre em contato e agende sua avaliação. Vamos juntos cuidar da sua
          saúde <br /> e do seu bem-estar.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild variant="light" size="lg">
            <Link href="/contato" title="Agendar avaliação">
              Agendar avaliação
              <ButtonArrow />
            </Link>
          </Button>

          <Button asChild variant="outline-light" size="lg">
            <Link href="/contato" title="Tirar dúvidas">
              Tirar dúvidas
              <ButtonArrow />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
