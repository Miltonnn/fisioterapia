export const siteConfig = {
  name: "Dra. Amanda Torrigo",
  description:
    "Fisioterapeuta formada pela Unicsul - Universidade Cruzeiro do Sul",
  crefito: "CREFITO-3 000000-F",

  contact: {
    email: "amandatorrigo2@gmail.com",
    phone: "(11) 95337-2259",
    whatsapp: "(11) 95337-2259",
    address: {
      rua: "Av Nordestina, 2780",
      bairro: "São Miguel",
      cidade: "São Paulo",
      estado: "SP",
      cep: "08042-000",
    },
  },
  mapa: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5594166401643!2d-46.43490642489254!3d-23.51237377883341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63f97469a471%3A0xe2337e0c1bbfd0f8!2sAv.%20Nordestina%2C%202780%20-%20S%C3%A3o%20Miguel%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008042-117!5e0!3m2!1spt-BR!2sbr!4v1771459958961!5m2!1spt-BR!2sbr",
  },
};

export const whatsappHref = `https://wa.me/55${siteConfig.contact.whatsapp.replace(/\D/g, "")}`;
