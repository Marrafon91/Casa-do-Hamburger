import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getCartItems = async (req: Request, res: Response) => {
  try {
    const { user } = req;

    const cartItems = await prisma.tb_cart_items.findMany({
      where: { userId: user.id },
      include: { product: true },
    });

    res.status(200).json(cartItems);
  } catch (error) {
    return res.status(500).json({ messge: "Erro do servidor" });
  }
};
