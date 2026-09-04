import { X } from "lucide-react";
import Button from "../Button";
import CartItem from "../CartItem";
import { useContext } from "react";
import { CartItemContext } from "../../context/CartItemsContext";
import { creatOrder } from "../../services/productService";

type CartTypeProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ showCart, setShowCart }: CartTypeProps) => {
  const { cartItems, setCartItems } = useContext(CartItemContext);

  const handleCreateOrder = async () => {
    try {
      const respose = await creatOrder();

      if (cartItems.length === 0) {
        return console.log("Carrinho Vazio");
      }

      if (respose.status !== 201) {
        return console.log("Erro ao finalizar o pedido");
      }

      setCartItems([]);
      setShowCart(false);

      console.log("Pedido realizado com Sucesso");
    } catch (error) {
      console.error("Erro no pedido", error);
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

      <Button title="Finalizar pedido" onClick={handleCreateOrder} />
    </div>
  );
};

export default Cart;
