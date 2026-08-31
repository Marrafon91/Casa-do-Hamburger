import { CircleChevronLeft, CircleChevronRight, Trash2 } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="./duplo-da-casa.png"
        alt="Duplo da casa"
        className="w-25 rounded-md"
      />
      <div className="flex-1">
        <p className="font-bold uppercase">Duplo da casa</p>
        <p className="font-bold text-[#848484]">R$ 28,90</p>
        <div className="mt-1 flex gap-3">
          <CircleChevronLeft
            className="cursor-pointer rounded-full bg-[#C92A0E] text-white"
            size={25}
          />
          <p className="font-bold">1</p>
          <CircleChevronRight
            className="cursor-pointer rounded-full bg-[#C92A0E] text-white"
            size={25}
          />
        </div>
      </div>
      <Trash2 size={20} className="cursor-pointer" />
    </div>
  );
};
export default CartItem;
