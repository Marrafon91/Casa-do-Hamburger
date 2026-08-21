import express from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "../back-end/src/routes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(router);
connection();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
