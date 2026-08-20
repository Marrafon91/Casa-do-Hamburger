import express, { Request, Response } from "express";
import { connection, prisma } from "./src/db.js";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());
app.use(cors());

connection();

app.post("/login", async (req: Request, res: Response) => {
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
        password,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado.",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Erro no servidor. ");
    return;
  }
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmePassword, cep } = req.body;

    if (!name || !email || !password || !confirmePassword || !cep) {
      res.status(400).json({ message: "Todas informaçôes são obrigatorias" });
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
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
