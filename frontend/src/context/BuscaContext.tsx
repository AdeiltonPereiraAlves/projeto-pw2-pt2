import { createContext, useContext, useState, ReactNode } from "react";

interface BuscaContextType {
  busca: string;
  setBusca: (valor: string) => void;
}

const BuscaContext = createContext<BuscaContextType | undefined>(undefined);

export const BuscaProvider = ({ children }: { children: ReactNode }) => {
  const [busca, setBusca] = useState("");

  return (
    <BuscaContext.Provider value={{ busca, setBusca }}>
      {children}
    </BuscaContext.Provider>
  );
};

export const useBusca = () => {
  const ctx = useContext(BuscaContext);
  if (!ctx) throw new Error("useBusca deve ser usado dentro de BuscaProvider");
  return ctx;
};
