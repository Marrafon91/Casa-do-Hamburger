import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { allProducts } from "../../services/productService";
import type { ProductDTO } from "../../types/products";

const Home = () => {
  const [category, setCategory] = useState("Hambúrger");
  const [product, setProduct] = useState<ProductDTO[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };
  const getCategoryClass = (categoryName: string) => {
    const elementoSeleciona =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";

    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    if (category === categoryName) {
      return elementoSeleciona;
    } else {
      return elementoNaoSelecionado;
    }
  };

  const getProducts = async () => {
    try {
      const response = await allProducts();

      setProduct(response.data.products);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mx-auto w-full px-3 text-white md:w-184.25 md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Hambúrger")}
          onClick={() => handleChangeCategory("Hambúrger")}
        >
          Hambúrger
        </div>
        <div
          className={getCategoryClass("Bebidas")}
          onClick={() => handleChangeCategory("Bebidas")}
        >
          Bebidas
        </div>
        <div
          className={getCategoryClass("Porções")}
          onClick={() => handleChangeCategory("Porções")}
        >
          Porções
        </div>
      </div>
      <p className="mt-2 mb-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-1 md:gap-2">
        {product.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            description={product.description}
            imgUrl={product.imgUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
