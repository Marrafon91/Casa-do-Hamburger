import { useState } from "react";
import Product from "../../components/Product/Product";

const Home = () => {
  const [category, setCategory] = useState("Hambúrger");

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
      <p className="mb-2 font-bold text-[#F2DAAC] mt-2 uppercase">{category}</p>
      <div className="flex flex-col gap-1 md:gap-2">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
