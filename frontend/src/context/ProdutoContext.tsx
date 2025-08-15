// src/context/ProdutoContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Produto as ProdutoTipo, produtos as mockProdutos } from "../db/produtos";

interface ProdutoContextType {
  produtos: ProdutoTipo[];
  setProdutos: React.Dispatch<React.SetStateAction<ProdutoTipo[]>>;
}

const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

export const ProdutoProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<ProdutoTipo[]>(mockProdutos);

  return (
    <ProdutoContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export const useProdutoContext = () => {
  const ctx = useContext(ProdutoContext);
  if (!ctx) throw new Error("useProdutoContext deve ser usado dentro de ProdutoProvider");
  return ctx;
};
