import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const createOrder = async (req: Request, res: Response) => {
  const { user } = req;

  const cartItems = await prisma.tb_cart_items.findMany({
    where: { userId: user.id },
    include: { product: true },
  });

  if (cartItems.length === 0) {
    return res.status(400).json({ message: "Carrinho está vazio" });
  }

  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const items = cartItems[i];
    if (!items) continue;
    total += items.product.price * items.quantity;
  }

  const order = await prisma.tb_order.create({
    data: {
      total,
      userId: user.id,
    },
  });

  res.json(order);
};
