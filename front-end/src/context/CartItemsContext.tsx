import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CartItemDTO, CartItemContextDTO } from "../types/cartItems";
import { itemsCart } from "../services/productService";

// eslint-disable-next-line react-refresh/only-export-components
export const CartItemContext = createContext<CartItemContextDTO>({
  cartItems: [],
  setCartItems: () => {},
  getCartItems: async () => {},
});

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemDTO[]>([]);

  const getCartItems = async () => {
    try {
      const response = await itemsCart();

      if (response.status !== 200) {
        return console.log("Erro ao realizar a requisição");
      }

      const data = await response.data;
      setCartItems(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCartItems();
  }, []);

  return (
    <CartItemContext.Provider value={{ cartItems, setCartItems, getCartItems }}>
      {children}
    </CartItemContext.Provider>
  );
};
