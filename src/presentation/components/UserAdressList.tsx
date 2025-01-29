import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserAddress } from "../hooks/useUserAddress";
import { Delete, Edit, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ListUserAddress } from "@/domain/models/ListUserAddress";
import { useUserAddressContext } from "../context/UserAddressContext";

export function UserAddressList() {
  const { userAdressList, deleteUserAddress } = useUserAddress();
  const { setOpen, setCurrentUserAddress } = useUserAddressContext();
  const handleDelete = async (id: string) => {
    toast.warning("Apagando User...");

    try {
      await deleteUserAddress.mutateAsync(id);
      toast.success("User deletado com sucesso");
    } catch {
      toast.error("Erro ao deletar User");
    }
  };

  const handleEdit = (data: ListUserAddress) => {
    console.log("chamo o handleEdit");
    setCurrentUserAddress(data);
    setOpen(true);
  };

  return userAdressList?.length === 0 ? (
    <div className="mt-56 flex flex-col items-center justify-center">
      <PackageOpen size={140} strokeWidth={1} className="text-gray-600" />
      <p className="mt-8 text-xl text-gray-500">Nenhum user encontrado</p>
      <p className="mt-2 max-w-[400px] text-center text-xl text-gray-500">
        Clique em <strong>criar novo user</strong> para começar a adicionar user
        à sua lista
      </p>
    </div>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>CEP</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userAdressList?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.cep}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                className="button-hover"
                onClick={() => handleEdit(item)}
              >
                <Edit className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="button-hover"
                onClick={() => handleDelete(item.id)}
              >
                <Delete className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
