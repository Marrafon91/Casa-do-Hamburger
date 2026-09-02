import type { ProductDTO } from "./products";

export type CartItemDTO = {
  id: string;
  userId: string;
  productId: string;
  product: ProductDTO;
};
