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
    <footer className="bg-brand-gradient text-white/75">
      <section className="container py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-20">
          <div className="flex flex-col space-y-4">
            <Logo variant="light" />
            <p className="text-md">
              Fisioterapia com atendimento humanizado e personalizado para você
              recuperar o movimento e a qualidade de vida.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white/90 font-semibold">Navegação</h3>

            <nav className="flex flex-col gap-2 text-md">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={link.name}
                  className="hover:text-white transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white/90 font-semibold">Contato</h3>

            <div className="text-md space-y-2">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition duration-300"
                  title="E-mail"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition duration-300"
                  title="Ligar"
                >
                  {siteConfig.contact.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-4 h-4"
                />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className=" hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </span>
              <span className="flex items-stretch gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                {siteConfig.contact.address.rua} <br />
                {siteConfig.contact.address.bairro} -
                {siteConfig.contact.address.cidade}/
                {siteConfig.contact.address.estado} <br />
                CEP: {siteConfig.contact.address.cep}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-white/90 font-semibold">Siga-nos!</h3>
            <SocialIcons
              colorMode="light"
              className="gap-2"
              iconSize={16}
              itemClassName="w-8 h-8"
            />
          </div>
        </div>

        <div className="relative mt-12 pt-8 text-center before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/25">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </section>
    </footer>
  );
}
