import Link from "next/link";
import { footerNavigationLinks } from "@/lib/navigation";
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
    <footer className="relative overflow-hidden bg-heading text-white/75">
      <section className="container grid grid-cols-1 lg:grid-cols-[22rem_1fr] xl:grid-cols-[26rem_1fr]">
        <div className="relative py-10 lg:col-span-2 after:absolute after:inset-x-[-100vw] after:bottom-0 after:border-b after:border-white/20">
          <Logo variant="light" />
        </div>

        <div className="space-y-6 py-14 lg:pr-12">
          <h3 className={titleClassName}>Assine nossa newsletter!</h3>
          <NewsletterForm />
        </div>

        <div className="relative flex flex-col before:absolute before:inset-x-[-100vw] before:top-0 before:border-t before:border-white/20 lg:border-l lg:border-white/20 lg:pl-12 lg:before:hidden">
          <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 xl:flex xl:justify-between xl:gap-12">
            <div className="space-y-4">
              <h3 className={titleClassName}>Navegação</h3>

              <nav className="flex flex-col gap-3 text-sm">
                {footerNavigationLinks.map((link) => (
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

          <div className="relative -mx-[var(--container-gutter)] flex flex-col gap-4 px-[var(--container-gutter)] py-7 before:absolute before:top-0 before:left-0 before:right-[-100vw] before:border-t before:border-white/20 after:absolute after:bottom-0 after:left-0 after:right-[-100vw] after:border-b after:border-white/20 sm:flex-row sm:items-center sm:justify-between lg:-ml-12 lg:pl-12">
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
          </div>
        </div>
      </section>

      <FooterSpine className="absolute -bottom-6 left-1/2 h-auto w-72 -translate-x-1/2 text-white md:left-auto md:right-0 md:w-[30rem] md:translate-x-0 lg:w-80 xl:w-[30rem]" />
    </footer>
  );
}
