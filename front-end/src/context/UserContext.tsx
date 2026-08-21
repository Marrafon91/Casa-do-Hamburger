import { createContext, useState, type ReactNode } from "react";
import type { UserContextType, UserDTO } from "../types/users";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
