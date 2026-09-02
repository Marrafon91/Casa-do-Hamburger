import { X } from "lucide-react";
import Button from "../Button";
import CartItem from "../CartItem";
import { useEffect, useState } from "react";
import { cartItems } from "../../services/productService";
import type { CartItemDTO } from "../../types/cartItems";

type CartTypeProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ showCart, setShowCart }: CartTypeProps) => {
  const [itemsCart, setItemsCart] = useState<CartItemDTO[]>([]);

  const getCartItems = async () => {
    try {
      const response = await cartItems();

      const data = response.data;
      console.log("DATA" + data);

      setItemsCart(data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCartItems();
  }, []);

  return (
    <div className="absolute right-0 z-10 flex h-screen w-93.75 flex-col bg-[#F2DAAC] p-5">
      <div className="flex items-center justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(!showCart)} />
        <p className="font-bold uppercase">Meu carrinho</p>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-2">
        {itemsCart.map((item) => (
          <CartItem
            title={item.product.name}
            price={item.product.price}
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
