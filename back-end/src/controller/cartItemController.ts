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

export const createCartItem = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "ProductId é Obrigatório" });
    }

    const existingItem = await prisma.tb_cart_items.findFirst({
      where: { productId, userId: user.id },
    });

    let cartItem;

    if (existingItem) {
      cartItem = await prisma.tb_cart_items.update({
        where: { id: existingItem.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      cartItem = await prisma.tb_cart_items.create({
        data: {
          product: { connect: { id: productId } },
          user: { connect: { id: user.id } },
        },
      });
    }

    const statusCode = cartItem.quantity === 1 ? 201 : 200;

    res.status(statusCode).json(cartItem);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao adiconar item ao carrinho" });
  }
};
