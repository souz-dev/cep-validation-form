import { AddUserAddressModal } from "../components/AddUserAdressModal";
import { UserAddressList } from "../components/UserAdressList";

import { useUserAddress } from "../hooks/useUserAddress";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { UserAddressProvider } from "../context/UserAddressProvider";

export function Home() {
  const { isLoading, error } = useUserAddress();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Carregando...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <Alert variant="destructive">
          <AlertTitle>Erro ao carregar os usuários</AlertTitle>
          <AlertDescription>
            {error instanceof Error
              ? error.message
              : "Ocorreu um erro desconhecido"}
          </AlertDescription>
        </Alert>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <UserAddressProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Lista de User</h1>
        <div className="mb-8">
          <AddUserAddressModal />
        </div>
        <div>
          <UserAddressList />
        </div>
      </div>
    </UserAddressProvider>
  );
}
