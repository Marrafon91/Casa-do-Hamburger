import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.tb_product.findMany();

    if (products.length === 0) {
      return res.status(404).json({
        message: "Nenhum produto foi adicionado!",
      });
    }

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Erro no Servidor!" });
    return;
  }
};
