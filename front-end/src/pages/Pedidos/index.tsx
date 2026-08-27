import { useState } from "react";
import CardPedidos from "../../components/CardPedidos";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");

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
      {/* {Categorias} */}
      <div className="mt-1 mb-3 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Pendente")}
          onClick={() => handleChangeCategory("Pendente")}
        >
          Pendente
        </div>
        <div
          className={getCategoryClass("Retirado")}
          onClick={() => handleChangeCategory("Retirado")}
        >
          Retirado
        </div>
        <div
          className={getCategoryClass("Cancelado")}
          onClick={() => handleChangeCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <CardPedidos
          id={2}
          name="Guilherme Marrafon"
          date="28/08/2026"
          orderTime="14:55"
          deliveredTime="16:32"
          total={147.69}
        />
      </div>
    </div>
  );
};

export default Pedidos;
