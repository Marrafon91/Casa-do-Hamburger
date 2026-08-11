import { createBrowserRouter } from "react-router";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";
import Home from "../pages/Home";
import Pedidos from "../pages/Pedidos";
import Layout from "../pages/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);
