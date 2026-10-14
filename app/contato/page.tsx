import { Formulario } from "@/components/forms/Formulario";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Mapa } from "@/components/sections/Mapa";
import { siteConfig } from "@/lib/site-config";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <section>
      <Breadcrumb />
      <div className="container py-15">
        <div className="grid grid-cols-12 items-center py-10 lg:gap-20">
          <div className="col-span-12 xl:col-span-6 pb-20 xl:pb-0" data-aos="fade-right">
            <h2 className="text-3xl font-medium text-dark mb-4">
              Informções de contato
            </h2>
            <p className="text-muted-foreground">
              Solicite informações, orçamentos ou dúvidas técnicass
              <span className="block">nossa equipe responde com agilidade</span>
            </p>
            <div className="pt-6 flex flex-col gap-7">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-md flex items-center">
                  <MapPin className="h-6 w-6 text-gray-100" />
                </div>
                <span>
                  <h3 className="text-lg font-bold text-brand-gradient">Endereço</h3>
                  {siteConfig.contact.address.rua} <br />
                  {siteConfig.contact.address.bairro} -
                  {siteConfig.contact.address.cidade}/
                  {siteConfig.contact.address.estado} <br />
                  CEP: {siteConfig.contact.address.cep}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-md flex items-center">
                  <Phone className="h-6 w-6 text-gray-100" />
                </div>
                <span>
                  <h3 className="text-lg font-bold text-brand-gradient">Telefone</h3>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-primary transition duration-300"
                    title="Ligar"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-md flex items-center">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="h-6 w-6 text-gray-100"
                  />
                </div>
                <span>
                  <h3 className="text-lg font-bold text-brand-gradient">Whatsapp</h3>
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
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-md flex items-center">
                  <Mail className="h-6 w-6 text-gray-100" />
                </div>
                <span>
                  <h3 className="text-lg font-bold text-brand-gradient">E-mail</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className=" hover:text-primary transition duration-300"
                    title="E-mail"
                  >
                    {siteConfig.contact.email}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6" data-aos="fade-left">
            <Formulario />
          </div>
        </div>
      </div>

      <Mapa />
    </section>
  );
}
