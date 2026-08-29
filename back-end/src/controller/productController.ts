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

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (typeof id !== "string" || !id) {
      return res.status(400).json({
        message: "ID inválido!",
      });
    }

    await prisma.tb_product.delete({
      where: {
        id,
      },
    });

    return res.status(204).send();
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({
        message: "Produto não encontrado!",
      });
    }

    return res.status(500).json({
      message: "Erro no servidor!",
    });
  }
};
