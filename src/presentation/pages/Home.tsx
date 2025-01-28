import { ListUserAddress } from "@/domain/models/ListUserAddress";
import { AddUserAddressModal } from "../components/AddUserAdressModal";
import { UserAddressList } from "../components/UserAdressList";
import { ListUserAddressFormData } from "../schemas/listItemSchema";

const mockListUserAddresses: ListUserAddress[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    cep: "12345-678",
    city: "Sample City",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    cep: "23456-789",
    city: "Example Town",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    cep: "34567-890",
    city: "Demo Village",
  },
];

export function Home() {
  const handleAddItem = (data: ListUserAddressFormData) => {
    console.log(data);
    // addItem(data)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Itens</h1>
      <div className="mb-8">
        <AddUserAddressModal onAddItem={handleAddItem} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Itens na Lista</h2>
        <UserAddressList items={mockListUserAddresses} />
      </div>
    </div>
  );
}
