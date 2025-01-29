import axios from "axios";
import type {
  ListUserAddress,
  ListAdressInput,
} from "../../domain/models/ListUserAddress";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    // Erro de rede ou resposta não-2xx
    if (error.response) {
      throw new Error(
        `Erro na API: ${error.response.status} - ${
          error.response.data.message || "Erro desconhecido"
        }`
      );
    } else if (error.request) {
      throw new Error(
        "Não foi possível se conectar à API. Verifique se o servidor está rodando."
      );
    } else {
      throw new Error(`Erro ao configurar a requisição: ${error.message}`);
    }
  }
  throw new Error("Ocorreu um erro desconhecido");
};

export const apiService = {
  getItems: async (): Promise<ListUserAddress[]> => {
    try {
      const response = await api.get<ListUserAddress[]>("/addresses");
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  addItem: async (item: ListAdressInput): Promise<ListUserAddress> => {
    try {
      const response = await api.post<ListUserAddress>("/addresses", item);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  updateItem: async (item: ListUserAddress): Promise<ListUserAddress> => {
    try {
      const response = await api.put<ListUserAddress>(
        `/addresses/${item.id}`,
        item
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  deleteItem: async (id: string): Promise<void> => {
    try {
      await api.delete(`/addresses/${id}`);
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
