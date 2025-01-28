import { z } from "zod";

export const listUserAddressSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
});

export type ListUserAddressFormData = z.infer<typeof listUserAddressSchema>;
