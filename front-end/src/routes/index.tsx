import { createBrowserRouter } from "react-router";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);
