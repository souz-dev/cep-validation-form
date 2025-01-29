import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "../../infrastructure/api/apiService";
import type {
  ListUserAddress,
  ListAdressInput,
} from "../../domain/models/ListUserAddress";
import { useState } from "react";

export function useUserAddress() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  console.log("open no hook", open);
  const [currentUserAddress, setCurrentUserAddress] =
    useState<ListUserAddress | null>(null);
  const {
    data: userAdressList,
    isLoading,
    error,
  } = useQuery<ListUserAddress[], Error>({
    queryKey: ["userAdress"],
    queryFn: apiService.getItems,
    retry: 1, // Tenta uma vez antes de falhar
  });

  const addUserAddress = useMutation({
    mutationFn: async (newItem: ListAdressInput) =>
      await apiService.addItem(newItem),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userAdress"] });
    },
  });

  const editUserAddress = useMutation({
    mutationFn: async (updatedItem: ListUserAddress) =>
      await apiService.updateItem(updatedItem),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userAdress"] });
    },
  });

  const deleteUserAddress = useMutation({
    mutationFn: async (id: string) => await apiService.deleteItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userAdress"] });
    },
  });
  return {
    userAdressList,
    isLoading,
    error,
    addUserAddress,
    editUserAddress,
    deleteUserAddress,
    currentUserAddress,
    open,
    setCurrentUserAddress,
    setOpen,
  };
}
