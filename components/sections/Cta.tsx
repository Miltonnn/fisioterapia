import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ClipboardList, HeartHandshake } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button, ButtonArrow } from "../ui/button";
import { siteConfig, whatsappHref } from "@/lib/site-config";

const trustItems = [
  { icon: BadgeCheck, label: siteConfig.crefito },
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: ClipboardList, label: "Avaliação individual" },
];

export function Cta() {
  return (
    <section className="py-20 lg:pt-32">
      <div className="container" data-aos="fade-up">
        <div className="relative isolate grid rounded-3xl bg-brand-gradient shadow-2xl lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_400px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 overflow-hidden rounded-3xl"
          >
            <div className="cta-dots absolute inset-0" />
            <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -right-16 -bottom-32 size-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="flex flex-col items-center gap-5 px-6 py-16 text-center md:px-12 lg:items-start lg:py-20 lg:text-left">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase">
              Agende sua avaliação
            </span>

            <h2 className="text-3xl font-bold text-balance text-white md:text-4xl">
              Pronto para dar o primeiro passo na sua recuperação?
            </h2>

            <p className="max-w-xl text-lg text-white/85">
              Agende sua avaliação ou tire suas dúvidas pelo WhatsApp. Vamos
              juntos cuidar da sua saúde e do seu bem-estar.
            </p>

            <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button
                asChild
                variant="light"
                size="lg"
                className="cta-shimmer"
              >
                <Link href="/contato" title="Agendar avaliação">
                  Agendar avaliação
                  <ButtonArrow />
                </Link>
              </Button>

              <Button asChild variant="outline-light" size="lg">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tirar dúvidas pelo WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="size-5" />
                  Tirar dúvidas no WhatsApp
                </a>
              </Button>
            </div>

            <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85 lg:justify-start">
              {trustItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon aria-hidden="true" className="size-4 text-white" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="/assets/banner/hero-banner.png"
              alt="Dra. Amanda Torrigo, fisioterapeuta"
              width={1086}
              height={1448}
              sizes="(min-width: 1280px) 400px, 340px"
              className="absolute bottom-0 left-1/2 h-[118%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
