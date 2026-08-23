import { createContext, useEffect, useState, type ReactNode } from "react";
import type { UserContextType, UserDTO } from "../types/users";
import { userMe } from "../services/login";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loading: true,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleAuthUser = async () => {
      try {
        const { data } = await userMe();

        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    handleAuthUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
