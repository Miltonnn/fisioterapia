import { z } from "zod";

export const contactPreferences = ["WhatsApp", "Ligação", "E-mail"] as const;

export const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  service: z.string().min(1, "Selecione uma opção"),
  contactPreference: z.enum(contactPreferences, {
    message: "Escolha como prefere ser contatado",
  }),
  source: z.string().optional(),
  message: z
    .string()
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres")
    .optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar a política de privacidade",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
