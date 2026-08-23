import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email e senha são obrigatórios",
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado.",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        message: "Senha incorreta.",
      });
    }

    const userInfos = {
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
    };

    if (!process.env.JWT_SECRET) {
      return;
    }

    const token = jwt.sign(userInfos, process.env.JWT_SECRET);

    console.log(token);

    res.cookie("user", token, {
      maxAge: 18000000,
    });

    return res.status(200).json(userInfos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erro no servidor.",
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmePassword, cep } = req.body;

    if (!name || !email || !password || !confirmePassword || !cep) {
      res.status(400).json({ message: "Todas informaçôes são obrigatorias" });
      return;
    }

    if (password !== confirmePassword) {
      res.status(400).json({ message: "As senhas não são iguais" });
      return;
    }
    const hash = await bcrypt.hash(password, 10);

    console.log(hash);

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (user?.email) {
      res.status(409).json({ message: "E-mail já cadastrado." });
      return;
    }

    const newUser = await prisma.user.create({
      data: { name, email, password: hash, cep },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};

export const auth = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.user;

    if (!process.env.JWT_SECRET) {
      return;
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      res.status(401).json({message: "Usuário não autorizado"});
    }

    res.status(200).json(decode);
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
};
