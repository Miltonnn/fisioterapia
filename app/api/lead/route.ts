import { Resend } from "resend";
import { z } from "zod";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { escapeHtml } from "@/lib/escape-html";

const resend = new Resend(process.env.RESEND_API_KEY);

const leadSchema = z.object({
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const isHuman = await verifyRecaptcha(body.recaptchaToken, "lead");

    if (!isHuman) {
      return Response.json(
        { error: "Não foi possível validar o envio. Tente novamente." },
        { status: 403 }
      );
    }

    const data = leadSchema.parse(body);

    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: "miltonandrade2919@gmail.com",
      subject: "Novo Lead pelo WhatsApp",
      html: `
        <h2>Novo Lead Recebido</h2>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(data.phone)}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Lead enviado com sucesso",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Erro ao enviar lead" },
      { status: 400 }
    );
  }
}