import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
app.use(express.json());
connection();

app.post("/login", async (req, res) => {
  const { email, password, cep } = req.body;
  const user = await prisma.user.findFirst({
    where: { email, password, cep },
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
