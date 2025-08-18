// src/models/produtoModel.ts
import prisma from "../prisma/Cliente";

export interface ProdutoCreate {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export const produtoModel = {
  findAll: async () => {
    return prisma.produto.findMany();
  },

  findById: async (id: number) => {
    return prisma.produto.findUnique({ where: { id } });
  },

  create: async (data: ProdutoCreate) => {
    return prisma.produto.create({ data });
  },

  update: async (id: number, data: Partial<ProdutoCreate>) => {
    return prisma.produto.update({
      where: { id },
      data,
    });
  },

  remove: async (id: number) => {
    return prisma.produto.delete({ where: { id } });
  },
};
