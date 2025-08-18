// src/app.ts
import express from "express";
import cors from "cors";
import produtoRoutes from "./routes/ProdutoRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/produtos", produtoRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`servidor rodando http://localhost:${PORT}`);
});
