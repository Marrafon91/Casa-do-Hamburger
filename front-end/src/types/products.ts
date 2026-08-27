export type ProductDTO = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
};

export interface ProductResponse {
  products: ProductDTO[];
}
