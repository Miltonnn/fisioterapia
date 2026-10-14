import { Resend } from "resend";
import { contactSchema } from "@/schemas/contactSchema";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validação com Zod
    const validatedData = contactSchema.parse(body);

    const { name, email, phone, source, message } = validatedData;

    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: "miltonandrade2919@gmail.com",
      subject: "Nova mensagem pelo formulário",
      html: `
        <h2>Novo contato recebido</h2>

        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Origem:</strong> ${source}</p>

        <hr/>

        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
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