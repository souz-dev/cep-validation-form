export interface ListUserAddress {
  id: string;
  name: string;
  email: string;
  cep: string;
  city: string;
}

export type ListAdressInput = Omit<ListUserAddress, "id" | "city">;
