// src/routes/produtoRoutes.ts
import { Router } from "express";
import { produtoController } from "../controllers/ProdutoController";

const router = Router();

router.get("/", produtoController.list);
router.get("/:id", produtoController.get);
router.post("/", produtoController.create);
router.put("/:id", produtoController.update);
router.delete("/:id", produtoController.delete);

export default router;
