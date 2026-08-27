import { ShoppingCart } from "lucide-react";
import type { ProductDTO } from "../../types/products";
import { formatterPrice } from "../../utils/formatterPrice";

const Product = ({ id, name, description, price, imgUrl }: ProductDTO) => {
  return (
    <div>
      <div className="flex gap-2.5">
        <img src={`./${imgUrl}`} className="h-25 w-21 md:h-42 md:w-50" />
        <div className="flex w-full flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">{name}</p>
          <p className="md:text-md flex-1 text-xs text-[#848484]">
            {description}
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
            <ShoppingCart size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
