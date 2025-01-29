import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AddUserAddressForm } from "./AddUserAddressForm";
import { useUserAddress } from "../hooks/useUserAddress";
import { ListUserAddressFormData } from "../schemas/listItemSchema";
import { toast } from "sonner";
import { ListUserAddress } from "@/domain/models/ListUserAddress";
import { useUserAddressContext } from "../context/UserAddressContext";

export function AddUserAddressModal() {
  const { addUserAddress, editUserAddress } = useUserAddress();
  const isPending = addUserAddress.isPending;
  const { open, setOpen, currentUserAddress, setCurrentUserAddress } =
    useUserAddressContext();
  const handleAddItem = async (data: ListUserAddressFormData) => {
    try {
      await addUserAddress.mutateAsync(data);
      toast.success(`User Address adicionado com sucesso`);
      setOpen(false);
    } catch {
      toast.error(`Erro ao adicionar User Address`);
    }
  };

  const handleEditItem = async (data: ListUserAddressFormData) => {
    const newData = { ...currentUserAddress, ...data };
    try {
      await editUserAddress.mutateAsync(newData as ListUserAddress);
      toast.success(`User Address editado com sucesso`);
      setOpen(false);
      setCurrentUserAddress(null); // Reset current user address after editing
    } catch {
      toast.error(`Erro ao editar User Address`);
    }
  };

  const handleSubmit = async (data: ListUserAddressFormData) => {
    if (currentUserAddress) {
      await handleEditItem(data);
    } else {
      await handleAddItem(data);
    }
  };

  console.log(open);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Adicionar Novo User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo User</DialogTitle>
        </DialogHeader>
        <AddUserAddressForm
          currentUserAddress={currentUserAddress}
          isPending={isPending}
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
