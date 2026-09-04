import { Router } from "express";
import { auth, login, logout, register } from "./controller/userController.js";
import { authMiddleware } from "./middlewares/auth.js";
import { deleteProduct, getProducts } from "./controller/productController.js";
import {
  createCartItem,
  getCartItems,
} from "./controller/cartItemController.js";
import { createOrder } from "./controller/oderController.js";

export const router = Router();

//Rotas de usuario.
router.post("/login", login);
router.post("/register", register);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logout);

// Rotas de Produtos.
router.get("/products", getProducts);
router.delete("/products/:id", authMiddleware, deleteProduct);

// Rotas de Cart
router.get("/cartItems", authMiddleware, getCartItems);
router.post("/create-cartItem", authMiddleware, createCartItem);

//Rotas para os pedidos
router.post("/create-order", authMiddleware, createOrder);
