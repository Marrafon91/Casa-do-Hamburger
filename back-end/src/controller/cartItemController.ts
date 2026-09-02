import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getCartItems = async (req: Request, res: Response) => {
  const cartItems = await prisma.tb_cart_items.findMany({
    where: { userId: "fabf3498-aad9-4cb9-9ae6-af45a79fd0fc" },
    include: { product: true, user: true },
  });

  res.json(cartItems);
};
