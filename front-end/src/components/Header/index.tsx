import { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { UserContext } from "../../context/UserContext";
import { Box, LayoutDashboard, LogOut, Plus, ShoppingCart } from "lucide-react";
import Cart from "../Cart";

const Header = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { user, handleUserLogout } = useContext(UserContext);
  const location = useLocation();

  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border";

    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC]`;
    } else {
      return baseClass;
    }
  };

  return (
    <div className="bg-[#161410]">
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}

      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>

        <Link to="/login" className="text-white">
          Login
        </Link>

        {user ? (
          <div className="flex items-center gap-8 text-white">
            {user.admin && (
              <div className="hidden items-center gap-2 text-[#F2DAAC] md:flex">
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box size={18} />
                  </div>
                </Link>
                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard size={18} />
                  </div>
                </Link>
                <div className="flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border">
                  <Plus size={18} />
                </div>
              </div>
            )}
            <div className="relative cursor-pointer">
              <ShoppingCart size={18} onClick={() => setShowCart(!showCart)} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>{user.name}</p>
              <LogOut
                size={18}
                className="cursor-pointer"
                onClick={handleUserLogout}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="flex w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
