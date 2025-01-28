import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AddUserAddressForm } from "./AddUserAddressForm";
import type { ListUserAddressFormData } from "../schemas/listItemSchema";
import { useState } from "react";

interface AddIUserAddressModalProps {
  onAddItem: (data: ListUserAddressFormData) => void;
}

export function AddUserAddressModal({ onAddItem }: AddIUserAddressModalProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: ListUserAddressFormData) => {
    onAddItem(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Adicionar Novo Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Item</DialogTitle>
        </DialogHeader>
        <AddUserAddressForm
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
