import { z } from "zod";

export const newsletterSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
