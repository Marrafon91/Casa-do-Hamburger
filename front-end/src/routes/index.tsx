import { createBrowserRouter } from "react-router";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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
