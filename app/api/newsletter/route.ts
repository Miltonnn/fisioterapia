import { Resend } from "resend";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { escapeHtml } from "@/lib/escape-html";
import { newsletterSchema } from "@/schemas/newsletterSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const isHuman = await verifyRecaptcha(body.recaptchaToken, "newsletter");

    if (!isHuman) {
      return Response.json(
        { error: "Não foi possível validar o envio. Tente novamente." },
        { status: 403 }
      );
    }

    const data = newsletterSchema.parse(body);

    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: "miltonandrade2919@gmail.com",
      subject: "Novo cadastro na newsletter",
      html: `
        <h2>Novo cadastro na newsletter</h2>
        <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(data.phone)}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Cadastro realizado com sucesso",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Erro ao realizar cadastro" },
      { status: 400 }
    );
  }
}
