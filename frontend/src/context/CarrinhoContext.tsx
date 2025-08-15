import { createContext, useContext, useState, ReactNode } from "react";
import { Produto, produtos } from "../db/produtos";

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

interface CarrinhoContextType {
  aberto: boolean;
  abrirCarrinho: () => void;
  fecharCarrinho: () => void;
  items: ItemCarrinho[];
  produtos: Produto[];
  setItems: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [aberto, setAberto] = useState(false);
  const [items, setItems] = useState<ItemCarrinho[]>([]);

  return (
    <CarrinhoContext.Provider
      value={{
        aberto,
        abrirCarrinho: () => setAberto(true),
        fecharCarrinho: () => setAberto(false),
        items,
        setItems,
        produtos
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  return context;
};
