import Link from "next/link";
import type { Metadata } from "next";
import { Button, ButtonArrow } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-white px-4 py-20">
      <div className="flex max-w-xl flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="text-brand-gradient text-[7rem] leading-none font-bold tracking-tighter sm:text-[10rem] lg:text-[12rem]"
        >
          404
        </p>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-heading md:text-3xl">
          Página não encontrada
        </h1>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          A página que você tentou acessar não existe ou mudou de endereço.
          Verifique o link ou volte para a página inicial.
        </p>

        <Button asChild size="lg" className="mt-10">
          <Link href="/" title="Voltar para a home">
            Voltar para a home
            <ButtonArrow />
          </Link>
        </Button>
      </div>
    </section>
  );
}
