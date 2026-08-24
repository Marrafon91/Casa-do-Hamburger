import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user } = req.cookies;

  if (!process.env.JWT_SECRET) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }

  try {
    const decoded = jwt.verify(user, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Usuáriao não autenticado" });
  }
};
