import type { AxiosResponse } from "axios";
import type { ProductResponse } from "../types/products";
import { api } from "../utils/api";

export function allProducts() {
  return api.get<ProductResponse>("/products");
}

export function deleteProduct(id: string): Promise<AxiosResponse<void>> {
  return api.delete<void>(`/products/${id}`);
}

export function cartItems() {
  return api.get("/cartItems", {
    withCredentials: true,
  });
}
