import { ShoppingCart } from "lucide-react";
import duploDaCasa from "../../../public/duplo-da-casa.png";

const Product = () => {
  return (
    <div className="">
      <div className="flex gap-2.5">
        <img src={duploDaCasa} className="h-25 w-21 md:h-42 md:w-50" />
        <div className="flex flex-col">
          <p className="text-sm md:text-lg font-bold uppercase">Duplo da casa</p>
          <p className="text-xs md:text-md text-[#848484] flex-1">
            Dois suculentos hambúrgueres de 120g, queijo cheddar derretido,
            maionese da casa e picles no pão brioche tostado.
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">R$28,90</p>
            <ShoppingCart size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
