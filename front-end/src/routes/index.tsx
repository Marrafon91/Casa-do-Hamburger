import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Pedidos from "../pages/Pedidos";
import Layout from "../pages/Layout";
import PublicRoutes from "../pages/PublicRoutes";
import PrivateRoutes from "../pages/PrivateRoutes";

export const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
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
    ],
  },

  {
    path: "/login",
    element: (
      <PublicRoutes>
        <Login />
      </PublicRoutes>
    ),
  },

  {
    path: "/register",
    element: (
      <PublicRoutes>
        <Register />
      </PublicRoutes>
    ),
  },
]);
