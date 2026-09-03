import { CircleChevronLeft, CircleChevronRight, Trash2 } from "lucide-react";
import { formatterPrice } from "../../utils/formatterPrice";

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

const CartItem = ({ id, title, price, img, quantity }: CartItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <img src={img} alt="Duplo da casa" className="w-25 rounded-md" />
      <div className="flex-1">
        <p className="text-sm font-bold uppercase">{title}</p>
        <p className="text-sm font-bold text-[#848484]">
          {formatterPrice(price)}
        </p>
        <div className="mt-1 flex items-center gap-3">
          <CircleChevronLeft
            className="cursor-pointer rounded-full bg-[#C92A0E] text-white"
            size={22}
          />
          <p className="text-sm font-bold">{quantity}</p>
          <CircleChevronRight
            className="cursor-pointer rounded-full bg-[#C92A0E] text-white"
            size={22}
          />
        </div>
      </div>
      <Trash2 size={20} className="cursor-pointer" onClick={() => alert(id)} />
    </div>
  );
};
export default CartItem;
