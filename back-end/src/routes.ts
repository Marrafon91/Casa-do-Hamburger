import { Router } from "express";
import { login, register } from "./controller/userController.js";

export const router = Router();

//Rotas de usuario.
router.post("/login", login);
router.post("/register", register);
