import type { ProductDTO } from "./products";

export type CartItemDTO = {
  id: string;
  userId: string;
  productId: string;
  product: ProductDTO;
};

export type CartItemContextDTO = {
  cartItems: CartItemDTO[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemDTO[]>>;
};
