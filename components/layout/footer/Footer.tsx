import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import { serviceLinks } from "@/components/sections/Services/services.data";
import { SocialIcons } from "@/components/SocialIcons";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { Mail, MapPin, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/layout/footer/NewsletterForm";
import { FooterSpine } from "@/components/layout/footer/FooterSpine";

const titleClassName =
  "text-base font-semibold uppercase tracking-wide text-white/90";

const linkClassName = "hover:text-white transition duration-300";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-gradient text-white/75">
      <section className="container grid grid-cols-1 lg:grid-cols-[22rem_1fr] xl:grid-cols-[26rem_1fr]">
        <div className="flex flex-col gap-10 py-14 lg:pr-12">
          <div className="space-y-6">
            <h3 className={titleClassName}>Assine nossa newsletter!</h3>
            <NewsletterForm />
          </div>

          <div className="space-y-6">
            <p className="text-sm leading-relaxed">
              Fisioterapia com atendimento humanizado e personalizado para você
              recuperar o movimento e a qualidade de vida.
            </p>
            <Logo variant="light" />
          </div>
        </div>

        <div className="flex flex-col border-t border-white/20 lg:border-t-0 lg:border-l lg:pl-12">
          <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 xl:flex xl:justify-between xl:gap-12">
            <div className="space-y-4">
              <h3 className={titleClassName}>Navegação</h3>

              <nav className="flex flex-col gap-3 text-sm">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    title={link.name}
                    className={linkClassName}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className={titleClassName}>Serviços</h3>

              <nav className="flex flex-col gap-3 text-sm">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    title={link.name}
                    className={linkClassName}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className={titleClassName}>Contato</h3>

              <div className="flex flex-col gap-3 text-sm">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className={linkClassName}
                    title="Ligar"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 shrink-0" />
                  <a
                    href={whatsappHref}
                    className={linkClassName}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className={`${linkClassName} underline underline-offset-4 break-all`}
                    title="E-mail"
                  >
                    {siteConfig.contact.email}
                  </a>
                </span>
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {siteConfig.contact.address.rua} <br />
                    {siteConfig.contact.address.bairro} -{" "}
                    {siteConfig.contact.address.cidade}/
                    {siteConfig.contact.address.estado} <br />
                    CEP: {siteConfig.contact.address.cep}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="-mx-[var(--container-gutter)] flex flex-col gap-4 border-y border-white/20 px-[var(--container-gutter)] py-7 sm:flex-row sm:items-center sm:justify-between lg:-ml-12 lg:pl-12">
            <p className="text-sm">
              {siteConfig.name} · {siteConfig.crefito}
            </p>
            <SocialIcons
              colorMode="light"
              className="gap-3"
              iconSize={16}
              itemClassName="h-8 w-8 bg-white/15 text-white shadow-none hover:bg-white hover:text-heading"
            />
          </div>

          <div className="relative flex flex-col gap-2 pt-10 pb-44 text-sm md:pb-10 md:min-h-56 md:pr-[30rem] lg:pr-80 xl:pr-[26rem]">
            <p>
              © {year} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <Link
              href="/politica-de-privacidade"
              className="w-fit underline-offset-4 hover:text-white hover:underline"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </section>

      <FooterSpine className="absolute -bottom-6 left-1/2 h-auto w-72 -translate-x-1/2 text-white md:left-auto md:right-0 md:w-[30rem] md:translate-x-0 lg:w-80 xl:w-[30rem]" />
    </footer>
  );
}
