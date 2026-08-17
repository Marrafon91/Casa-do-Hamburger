import express from "express";
import { connection, prisma } from "./src/db.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

connection();

app.post("/login", async (req, res) => {
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

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
