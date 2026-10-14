import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  source: z.string().min(1, "Selecione uma opção"),
  message: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar a política de privacidade",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;