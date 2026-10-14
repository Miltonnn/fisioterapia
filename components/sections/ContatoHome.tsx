import Image from "next/image";
import { Formulario } from "@/components/forms/Formulario";

export function ContatoHome() {
  return (
    <section className="overflow-hidden bg-gray-50">
      <div className="container grid grid-cols-1 items-stretch gap-12 xl:grid-cols-[5fr_7fr]">
        <div className="relative hidden xl:block" data-aos="fade-right">
          <Image
            src="/assets/banner/hero-banner.png"
            alt="Dra. Amanda Torrigo, fisioterapeuta"
            fill
            sizes="42vw"
            className="object-contain object-bottom drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
          />
        </div>

        <div
          className="mx-auto flex w-full max-w-2xl flex-col gap-6 py-12 lg:py-16 xl:max-w-none"
          data-aos="fade-left"
        >
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
              Contato
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-balance text-heading md:text-[2.5rem] md:leading-12">
              Agende sua{" "}
              <span className="text-brand-gradient">avaliação</span>
            </h2>
          </div>

          <div className="rounded-3xl bg-white">
            <Formulario />
          </div>
        </div>
      </div>
    </section>
  );
}
