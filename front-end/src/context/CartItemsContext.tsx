import { createContext, useState, type ReactNode } from "react";
import type { CartItemDTO, CartItemContextDTO } from "../types/cartItems";

// eslint-disable-next-line react-refresh/only-export-components
export const CartItemContext = createContext<CartItemContextDTO>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemDTO[]>([]);

  return (
    <CartItemContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemContext.Provider>
  );
};
