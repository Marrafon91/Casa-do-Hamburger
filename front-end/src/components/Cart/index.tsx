import { X } from "lucide-react";
import Button from "../Button";
import CartItem from "../CartItem";
import { useContext, useState } from "react";
import { CartItemContext } from "../../context/CartItemsContext";
import { createOrder } from "../../services/productService";

type CartTypeProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ showCart, setShowCart }: CartTypeProps) => {
  const { cartItems, setCartItems } = useContext(CartItemContext);

  const [error, setError] = useState<string | null>(null);

  const handleCreateOrder = async () => {
    setError(null);

    if (cartItems.length === 0) {
      setError("Seu carrinho está vazio.");
      return;
    }

    try {
      await createOrder();

      setCartItems([]);
      setShowCart(false);

    } catch (error) {
      setError("Erro ao finalizar o pedido.");
      console.error(error);
    }
  };

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

      {error && (
        <p className="mb-3 text-center text-lg font-bold text-red-500">
          {error}
        </p>
      )}

      <Button title="Finalizar pedido" onClick={handleCreateOrder} />
    </div>
  );
};

export default Cart;
