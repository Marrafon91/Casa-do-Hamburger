import type { AxiosResponse } from "axios";
import type { ProductResponse } from "../types/products";
import { api } from "../utils/api";
import type { createCartItemDTO } from "../types/cartItems";

export function allProducts() {
  return api.get<ProductResponse>("/products");
}

export function deleteProduct(id: string): Promise<AxiosResponse<void>> {
  return api.delete<void>(`/products/${id}`);
}

export function itemsCart() {
  return api.get("/cartItems", {
    withCredentials: true,
  });
}

export function createCartItem(body: createCartItemDTO) {
  return api.post("/create-cartItem", body, {
    withCredentials: true,
  });
}

export function createOrder() {
  return api.post(
    "/create-order",
    {},
    {
      withCredentials: true,
    },
  );
}
