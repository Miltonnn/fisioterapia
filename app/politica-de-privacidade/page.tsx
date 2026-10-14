import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${siteConfig.name}`,
  description: `Saiba como ${siteConfig.name} coleta, utiliza e protege os seus dados pessoais.`,
};

const LAST_UPDATE = "14 de outubro de 2026";

const sections = [
  {
    title: "1. Quem somos",
    content: [
      `Este site pertence a ${siteConfig.name}, fisioterapeuta registrada no ${siteConfig.crefito}, com atendimento em ${siteConfig.contact.address.rua}, ${siteConfig.contact.address.bairro}, ${siteConfig.contact.address.cidade}/${siteConfig.contact.address.estado}. Somos responsáveis (controladores) pelo tratamento dos dados pessoais coletados por aqui, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).`,
    ],
  },
  {
    title: "2. Quais dados coletamos",
    content: [
      "Formulário de contato: nome, e-mail, telefone, tratamento de interesse, forma de contato preferida, como nos conheceu (opcional) e a mensagem que você escrever (opcional).",
      "Atendimento rápido (ícone do WhatsApp): e-mail e telefone.",
      "Dados de navegação: endereço IP, tipo de navegador e informações técnicas coletadas automaticamente pelos serviços de segurança e hospedagem descritos abaixo.",
    ],
  },
  {
    title: "3. Dados de saúde",
    content: [
      "No campo de mensagem, você pode nos contar o que está sentindo. Essas informações são consideradas dados pessoais sensíveis pela LGPD (art. 5º, II). Por isso, só as tratamos com o seu consentimento específico, dado ao marcar a caixa de concordância antes do envio, e apenas para entender o seu caso e preparar o atendimento.",
      "Se preferir, você pode deixar a mensagem em branco e conversar sobre a sua saúde diretamente na avaliação.",
    ],
  },
  {
    title: "4. Para que usamos os seus dados",
    content: [
      "Responder ao seu contato e agendar a sua avaliação pelo canal que você escolheu.",
      "Entender qual tratamento você procura para direcionar o atendimento.",
      "Proteger o site contra envios automáticos (spam e robôs).",
      "Não vendemos, alugamos ou utilizamos os seus dados para envio de propaganda sem a sua autorização.",
    ],
  },
  {
    title: "5. Com quem compartilhamos",
    content: [
      "Utilizamos alguns serviços de terceiros para o site funcionar, que podem tratar dados em nosso nome:",
      "Resend: envio, por e-mail, das mensagens dos formulários para a nossa equipe.",
      "Google reCAPTCHA: verificação de segurança nos formulários, que analisa informações técnicas do seu navegador para diferenciar pessoas de robôs. Está sujeito à Política de Privacidade e aos Termos de Serviço do Google.",
      "Google Maps: exibição do mapa com a localização do consultório.",
      "Vercel: hospedagem do site.",
      "WhatsApp (Meta): quando você opta por conversar conosco por lá.",
      "Alguns desses serviços podem armazenar dados fora do Brasil, sempre com as garantias exigidas pela LGPD.",
    ],
  },
  {
    title: "6. Cookies e armazenamento local",
    content: [
      "O Google reCAPTCHA e o Google Maps podem utilizar cookies próprios para segurança e funcionamento.",
      "O site guarda no seu navegador (localStorage) apenas uma marcação indicando que você já enviou o seu contato, para não exibir o convite de atendimento novamente. Você pode apagá-la limpando os dados do navegador.",
    ],
  },
  {
    title: "7. Por quanto tempo guardamos",
    content: [
      "Mantemos os seus dados pelo tempo necessário para responder ao seu contato e realizar o atendimento. Caso você se torne paciente, as informações do prontuário seguem os prazos de guarda exigidos pelas normas do conselho profissional (COFFITO).",
    ],
  },
  {
    title: "8. Seus direitos",
    content: [
      "Pela LGPD (art. 18), você pode, a qualquer momento: confirmar se tratamos os seus dados; acessá-los; corrigir dados incompletos ou desatualizados; pedir a exclusão; revogar o seu consentimento; e obter informações sobre com quem os compartilhamos.",
      `Para exercer qualquer um desses direitos, entre em contato pelo e-mail ${siteConfig.contact.email}.`,
    ],
  },
  {
    title: "9. Segurança",
    content: [
      "Adotamos medidas técnicas para proteger os seus dados, como conexão criptografada (HTTPS) e verificação contra envios automatizados. Nenhum sistema é totalmente imune a riscos, mas trabalhamos para manter as suas informações seguras.",
    ],
  },
  {
    title: "10. Alterações nesta política",
    content: [
      "Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última atualização fica sempre indicada no início desta página.",
    ],
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <section>
      <Breadcrumb />

      <div className="container py-20">
        <div className="max-w-3xl">
          <h1 className="mb-3 text-4xl font-bold text-heading">
            Política de Privacidade
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">
            Última atualização: {LAST_UPDATE}
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-xl font-semibold text-heading">
                  {section.title}
                </h2>

                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
