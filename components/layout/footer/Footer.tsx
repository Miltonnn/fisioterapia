import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import { SocialIcons } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-brand-gradient">
      <section className="container py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-20">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-md text-muted-foreground">
              Fisioterapia com atendimento humanizado e personalizado para você
              recuperar o movimento e a qualidade de vida.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-foreground font-semibold">Navegação</h3>

            <nav className="flex flex-col gap-2 text-md text-muted-foreground">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={link.name}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-foreground font-semibold">Contato</h3>

            <div className="text-md text-muted-foreground space-y-2">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary transition duration-300"
                  title="E-mail"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-primary transition duration-300"
                  title="Ligar"
                >
                  {siteConfig.contact.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-primary w-4 h-4"
                />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className=" hover:text-primary transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </span>
              <span className="flex items-stretch gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                {siteConfig.contact.address.rua} <br />
                {siteConfig.contact.address.bairro} -
                {siteConfig.contact.address.cidade}/
                {siteConfig.contact.address.estado} <br />
                CEP: {siteConfig.contact.address.cep}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-foreground font-semibold">Siga-nos!</h3>
            <SocialIcons />
          </div>
        </div>

        <div className="relative mt-12 pt-8 text-center text-muted-foreground before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-brand-gradient">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </section>
    </footer>
  );
}
