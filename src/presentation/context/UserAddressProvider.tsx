import { useState, ReactNode } from "react";
import { ListUserAddress } from "@/domain/models/ListUserAddress";
import { UserAddressContext } from "./UserAddressContext";

export const UserAddressProvider = ({ children }: { children: ReactNode }) => {
  const [currentUserAddress, setCurrentUserAddress] =
    useState<ListUserAddress | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <UserAddressContext.Provider
      value={{ currentUserAddress, setCurrentUserAddress, open, setOpen }}
    >
      {children}
    </UserAddressContext.Provider>
  );
};
