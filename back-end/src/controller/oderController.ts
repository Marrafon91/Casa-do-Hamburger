import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const createOrder = async (req: Request, res: Response) => {
  try {
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
        items: {
          create: cartItems.map((items) => ({
            productId: items.productId,
            quantity: items.quantity,
            price: items.product.price,
          })),
        },
      },
      include: { items: true },
    });

    await prisma.tb_cart_items.deleteMany({
      where: { userId: user.id },
    });

    res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao Criar pedido" });
  }
};
