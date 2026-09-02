export type ProductDTO = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  category: string;
};

export type ProductTypeDTO = ProductDTO & {
  setProducts: React.Dispatch<React.SetStateAction<ProductDTO[]>>;
};

export interface ProductResponse {
  products: ProductDTO[];
}
