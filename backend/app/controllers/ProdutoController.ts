// src/controllers/produtoController.ts
import { Request, Response } from "express";
import { produtoModel } from "../model/ProdutoModel";

export const produtoController = {
  list: async (req: Request, res: Response) => {
    const produtos = await produtoModel.findAll();
    return res.json(produtos);
  },

  get: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const produto = await produtoModel.findById(id);
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    return res.json(produto);
  },

  create: async (req: Request, res: Response) => {
    const { nome, descricao, preco, imagem } = req.body;
    if (!nome || !descricao || preco === undefined || !imagem) {
      return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }
    const created = await produtoModel.create({ nome, descricao, preco: Number(preco), imagem });
    return res.status(201).json(created);
  },

  update: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const { nome, descricao, preco, imagem } = req.body;
    try {
      const updated = await produtoModel.update(id, { nome, descricao, preco: preco !== undefined ? Number(preco) : undefined, imagem });
      return res.json(updated);
    } catch (err: any) {
      // se não existir, prisma lança erro
      return res.status(404).json({ error: "Produto não encontrado" });
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    try {
      await produtoModel.remove(id);
      return res.status(204).send();
    } catch (err: any) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
  },
};
