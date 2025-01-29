import { createContext, useContext } from "react";
import { ListUserAddress } from "@/domain/models/ListUserAddress";

interface UserAddressContextProps {
  currentUserAddress: ListUserAddress | null;
  setCurrentUserAddress: (address: ListUserAddress | null) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const UserAddressContext = createContext<
  UserAddressContextProps | undefined
>(undefined);

export const useUserAddressContext = () => {
  const context = useContext(UserAddressContext);
  if (!context) {
    throw new Error(
      "useUserAddressContext must be used within a UserAddressProvider"
    );
  }
  return context;
};
