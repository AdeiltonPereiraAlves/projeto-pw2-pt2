// // src/context/ProdutoContext.tsx
// import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
// import { Produto as ProdutoTipo, produtos as mockProdutos } from "../db/produtos";
// import axios from "axios";
// interface ProdutoContextType {
//   produtos: ProdutoTipo[];
//   setProdutos: React.Dispatch<React.SetStateAction<ProdutoTipo[]>>;
// }

// const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

// export const ProdutoProvider = ({ children }: { children: ReactNode }) => {
//   const [produtos, setProdutos] = useState<any>([]);
//   const [loading, setLoading] = useState(true);
//    async function fetchProducts() {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:3333/produtos");
//       console.log("dados", res);
      
     
//       setProdutos(res.data);
//     } catch (err) {
//       console.error("Erro ao buscar produtos:", err);
//     } finally {
//       setLoading(false);
//     }
//   }
  
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <ProdutoContext.Provider value={{ produtos, setProdutos }}>
//       {children}
//     </ProdutoContext.Provider>
//   );
// };

// export const useProdutoContext = () => {
//   const ctx = useContext(ProdutoContext);
//   if (!ctx) throw new Error("useProdutoContext deve ser usado dentro de ProdutoProvider");
//   return ctx;
// };


