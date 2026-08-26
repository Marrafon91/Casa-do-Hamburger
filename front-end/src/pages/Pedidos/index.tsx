import { CalendarFold, Clock1, User } from "lucide-react";
import { useState } from "react";

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
        <div>
          <div className="rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
            <div className="flex justify-between">
              <p>#1</p>
              <select name="" id="" className="font-bold">
                <option value="" defaultChecked disabled>
                  Pendente
                </option>
                <option value="">Retirado</option>
                <option value="">Cancelado</option>
              </select>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <User size={16} />
                <p className="text-xs">Guilherme Marrafon</p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarFold size={16} />
                <p className="text-xs">28/08/2026</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Clock1 size={16} />
                  <p className="text-xs">14:55</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock1 size={16} />
                  <p className="text-xs">16:32</p>
                </div>
              </div>
            </div>
            <div className="mt-1 h-0.5 w-full bg-[#32343E]"></div>
            <div className="text-right text-lg font-bold">
              <p>R$ 147,69</p>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
            <div className="flex justify-between">
              <p>#1</p>
              <select name="" id="" className="font-bold">
                <option value="" defaultChecked disabled>
                  Pendente
                </option>
                <option value="">Retirado</option>
                <option value="">Cancelado</option>
              </select>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <User size={16} />
                <p className="text-xs">Guilherme Marrafon</p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarFold size={16} />
                <p className="text-xs">28/08/2026</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Clock1 size={16} />
                  <p className="text-xs">14:55</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock1 size={16} />
                  <p className="text-xs">16:32</p>
                </div>
              </div>
            </div>
            <div className="mt-1 h-0.5 w-full bg-[#32343E]"></div>
            <div className="text-right text-lg font-bold">
              <p>R$ 147,69</p>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
            <div className="flex justify-between">
              <p>#1</p>
              <select name="" id="" className="font-bold">
                <option value="" defaultChecked disabled>
                  Pendente
                </option>
                <option value="">Retirado</option>
                <option value="">Cancelado</option>
              </select>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <User size={16} />
                <p className="text-xs">Guilherme Marrafon</p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarFold size={16} />
                <p className="text-xs">28/08/2026</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Clock1 size={16} />
                  <p className="text-xs">14:55</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock1 size={16} />
                  <p className="text-xs">16:32</p>
                </div>
              </div>
            </div>
            <div className="mt-1 h-0.5 w-full bg-[#32343E]"></div>
            <div className="text-right text-lg font-bold">
              <p>R$ 147,69</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
