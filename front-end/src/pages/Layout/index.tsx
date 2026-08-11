import { Outlet } from "react-router";
import Header from "../../components/Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-green-200">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
