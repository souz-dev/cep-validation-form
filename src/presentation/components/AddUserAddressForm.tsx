import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  listUserAddressSchema,
  type ListUserAddressFormData,
} from "../schemas/listItemSchema";
import { useEffect } from "react";

interface AddUserAdressFormProps {
  onSubmit: (data: ListUserAddressFormData) => void;
  currentUserAddress?: ListUserAddressFormData | null;
  onCancel: () => void;
  isPending: boolean;
}

export function AddUserAddressForm({
  onSubmit,
  onCancel,
  isPending,
  currentUserAddress,
}: AddUserAdressFormProps) {
  const form = useForm<ListUserAddressFormData>({
    resolver: zodResolver(listUserAddressSchema),
    defaultValues: {
      name: "",
      email: "",
      cep: "",
    },
  });

  useEffect(() => {
    if (currentUserAddress) {
      form.setValue("name", currentUserAddress.name);
      form.setValue("email", currentUserAddress.email);
      form.setValue("cep", currentUserAddress.cep);
    }
  }, [currentUserAddress, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="CEP"
                  maxLength={8}
                  {...field}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 8);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button isLoading={isPending} type="submit">
            {currentUserAddress ? "Editar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
