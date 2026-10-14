import { Resend } from "resend";
import { contactSchema } from "@/schemas/contactSchema";
import { ZodError } from "zod";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { escapeHtml } from "@/lib/escape-html";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const isHuman = await verifyRecaptcha(body.recaptchaToken, "contact");

    if (!isHuman) {
      return Response.json(
        { error: "Não foi possível validar o envio. Tente novamente." },
        { status: 403 }
      );
    }

    // validação com Zod
    const validatedData = contactSchema.parse(body);

    const { name, email, phone, service, contactPreference, source, message } =
      validatedData;

    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: "miltonandrade2919@gmail.com",
      subject: `Novo agendamento: ${service}`,
      html: `
        <h2>Nova solicitação de agendamento</h2>

        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Tratamento:</strong> ${escapeHtml(service)}</p>
        <p><strong>Prefere contato por:</strong> ${escapeHtml(contactPreference)}</p>
        <p><strong>Origem:</strong> ${escapeHtml(source || "Não informado")}</p>

        <hr/>

        <p><strong>Mensagem:</strong></p>
        <p>${message ? escapeHtml(message) : "Sem mensagem"}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error: unknown) {

    // erro de validação do Zod
    if (error instanceof ZodError) {
      return Response.json(
        { error: "Dados inválidos", details: error.flatten() },
        { status: 400 }
      );
    }

    console.error("Erro ao enviar email:", error);

    return Response.json(
      { error: "Erro interno ao enviar email" },
      { status: 500 }
    );
  }
}