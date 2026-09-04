import { X } from "lucide-react";
import Button from "../Button";
import CartItem from "../CartItem";
import { useContext } from "react";
import { CartItemContext } from "../../context/CartItemsContext";

type CartTypeProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ showCart, setShowCart }: CartTypeProps) => {
  const { cartItems } = useContext(CartItemContext);

  return (
    <div className="absolute right-0 z-10 flex h-screen w-93.75 flex-col bg-[#F2DAAC] p-5">
      <div className="flex items-center justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(!showCart)} />

        <p className="font-bold uppercase">Meu carrinho</p>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-2">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            title={item.product.name}
            price={item.product.price}
            quantity={item.quantity}
            img={item.product.imgUrl}
            id={item.product.id}
          />
        ))}
      </div>

      <Button title="Finalizar pedido" />
    </div>
  );
};

export default Cart;
