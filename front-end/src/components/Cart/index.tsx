import { X } from "lucide-react";
import Button from "../Button";
import CartItem from "../CartItem";

type CartTypeProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ showCart, setShowCart }: CartTypeProps) => {
  return (
    <div className="absolute right-0 flex h-screen w-93.75 flex-col bg-[#F2DAAC] p-5">
      <div className="flex items-center justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(!showCart)} />
        <p className="font-bold uppercase">Meu carrinho</p>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-2">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <Button title="Finalizar pedido" />
    </div>
  );
};

export default Cart;
