import Link from "next/link";
import Image from "next/image";
import { Activity, Heart, PersonStanding, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/social-links";
import { cn } from "@/lib/utils";

const marqueeWords = ["movimento", "reabilitação", "bem-estar", "cuidado"];

const chips = [
  { label: "Reabilitação", icon: Activity, className: "hero-chip--a" },
  { label: "Movimento", icon: PersonStanding, className: "hero-chip--b" },
  { label: "Bem-estar", icon: Sparkles, className: "hero-chip--c" },
];

const heroButtonClassName =
  "h-13 rounded-full px-7 text-base font-semibold hover:-translate-y-0.5 motion-reduce:hover:translate-y-0";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </div>
      </div>

      <div className="container relative z-10 grid h-full grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] max-md:pt-12">
        <div className="hero-content relative z-40 max-w-[500px] max-md:max-w-none">
          <h1
            id="hero-title"
            className="mb-5 text-[clamp(2.25rem,4.4vw,3.625rem)] font-medium leading-[1.05] tracking-tight text-balance text-heading"
          >
            Mais{" "}
            <span className="font-bold text-brand-gradient">movimento,</span>{" "}
            mais qualidade{" "}
            <span className="font-bold text-brand-gradient">de vida.</span>
          </h1>

          <p className="mb-8 text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-normal text-heading/80">
            Fisioterapia para você voltar a fazer o que ama.
          </p>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap max-md:mb-6">
            <Button
              asChild
              className={cn(
                heroButtonClassName,
                "shadow-[0_14px_30px_-14px] shadow-heading/70"
              )}
            >
              <Link href="/contato" title="Agendar consulta">
                Agendar consulta
              </Link>
            </Button>

            <Button
              asChild
              variant="light"
              className={cn(
                heroButtonClassName,
                "border-[1.5px] border-heading/20 bg-white/60"
              )}
            >
              <Link href="/servicos" title="Tratamentos">
                Conheça os tratamentos
              </Link>
            </Button>
          </div>

          <ul className="flex gap-2.5" aria-label="Redes sociais">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  title={name}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-full border-[1.5px] border-heading/20 text-primary transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-dots" aria-hidden="true" />
          <div className="hero-ring" aria-hidden="true" />
          <div className="hero-blob" aria-hidden="true" />

          <svg className="hero-wave" viewBox="0 0 600 200" aria-hidden="true">
            <path d="M0 120 C 80 120, 100 40, 160 40 S 240 160, 300 160 S 380 60, 440 60 S 540 130, 600 110" />
          </svg>

          <Image
            src="/assets/banner/hero-banner.png"
            alt="Dra. Amanda Torrigo, fisioterapeuta"
            title="Dra. Amanda Torrigo"
            width={1086}
            height={1448}
            priority
            sizes="(min-width: 768px) 600px, 360px"
            className="hero-photo"
          />

          <div className="hero-badge" aria-hidden="true">
            <svg className="hero-badge-text" viewBox="0 0 120 120">
              <defs>
                <path
                  id="hero-badge-circle"
                  d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0"
                />
              </defs>
              <text textLength="272" lengthAdjust="spacing">
                <textPath
                  href="#hero-badge-circle"
                  textLength="272"
                  lengthAdjust="spacing"
                >
                  fisioterapia • movimento •
                </textPath>
              </text>
            </svg>
            <Heart className="hero-badge-icon" />
          </div>

          {chips.map(({ label, icon: Icon, className }) => (
            <div key={label} className={cn("hero-chip", className)} aria-hidden="true">
              <span className="hero-chip-icon">
                <Icon />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
