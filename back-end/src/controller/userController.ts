import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email e senha são obrigatórios",
      });
    }

    const user = await prisma.tb_user.findFirst({
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
      admin: user.admin,
    };

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        message: "JWT_SECRET não configurado.",
      });
    }

    const token = jwt.sign(userInfos, process.env.JWT_SECRET);

    console.log(token);

    res.cookie("user", token, {
      maxAge: 18000000,
      httpOnly: true,
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
      return res.status(400).json({
        message: "Todas informações são obrigatórias",
      });
    }

    if (password !== confirmePassword) {
      return res.status(400).json({
        message: "As senhas não são iguais",
      });
    }

    const user = await prisma.tb_user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(409).json({
        message: "E-mail já cadastrado.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.tb_user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        cep,
      },
    });

    const userInfos = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      cep: newUser.cep,
    };

    return res.status(201).json(userInfos);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Erro no servidor",
    });
  }
};

export const auth = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      message: "Token inválido ou expirado",
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  const { user } = req.cookies;

  if (user) {
    res.clearCookie("user");
  }

  console.log(user);

  return res.status(200).json({
    message: "Logout realizado com sucesso",
  });
};
