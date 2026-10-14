import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const leadSchema = z.object({
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = leadSchema.parse(body);

    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: "miltonandrade2919@gmail.com",
      subject: "Novo Lead pelo WhatsApp",
      html: `
        <h2>Novo Lead Recebido</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
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