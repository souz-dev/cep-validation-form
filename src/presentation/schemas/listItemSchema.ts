import { z } from "zod";

export const listItemSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
});

export type ListItemFormData = z.infer<typeof listItemSchema>;
