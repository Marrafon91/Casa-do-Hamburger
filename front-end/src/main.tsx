import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/index";
import { RouterProvider } from "react-router";
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
