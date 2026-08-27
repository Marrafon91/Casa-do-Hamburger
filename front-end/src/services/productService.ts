import type { ProductResponse } from "../types/products";
import { api } from "../utils/api";

export function allProducts() {
  return api.get<ProductResponse>("/products");
}
