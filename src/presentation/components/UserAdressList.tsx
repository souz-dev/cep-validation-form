import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListUserAddress } from "@/domain/models/ListUserAddress";

interface UserAdressListProps {
  items: ListUserAddress[];
}

export function UserAddressList({ items }: UserAdressListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>CEP</TableHead>
          <TableHead>Cidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.cep}</TableCell>
            <TableCell>{item.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
