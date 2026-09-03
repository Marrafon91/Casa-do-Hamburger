import type { ProductDTO } from "./products";

export type CartItemDTO = {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  product: ProductDTO;
};

export type CartItemContextDTO = {
  cartItems: CartItemDTO[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemDTO[]>>;
};

export type createCartItemDTO = {
  productId: string;
};
