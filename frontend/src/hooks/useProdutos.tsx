// // src/hooks/useLogicaProdutos.ts
// import { useProdutoContext } from "../context/ProdutoContext";
// import { Produto } from "../db/produtos";

// export function useLogicaProdutos() {
//   const { produtos, setProdutos } = useProdutoContext();

//   const criarProduto = (novo: Omit<Produto, "id">) => {
//     const nextId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
//     setProdutos([...produtos, { ...novo, id: nextId }]);
//   };

//   const editarProduto = (atualizado: Produto) => {
//     setProdutos(produtos.map(p => (p.id === atualizado.id ? atualizado : p)));
//   };

//   const removerProduto = (id: number) => {
//     setProdutos(produtos.filter(p => p.id !== id));
//   };

//   return {
//     produtos,
//     criarProduto,
//     editarProduto,
//     removerProduto,
//   };
// }
import { useEffect, useState } from "react";
 import { useProdutoContext } from "../context/ProdutoContext";
 import { Produto } from "../db/produtos";
 import axios from "axios";
export interface Product {
  id: number;
  title: string;
  price: number;
}

export function useProdutos() {
  
   const { produtos, setProdutos } = useProdutoContext();
  const [loading, setLoading] = useState(true);

  // READ
  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3333/produtos");
      console.log("dados", res);
      
     
      setProdutos(res.data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
    } finally {
      setLoading(false);
    }
  }

  // CREATE
  async function addProduct(produto: Omit<Produto, "id">) {
    const res = await fetch("http://localhost:3333/produtos", {
      method: "POST",
      body: JSON.stringify(produto),
      headers: { "Content-Type": "application/json" },
    });
    const newProduct = await res.json();
    setProdutos((prev) => [...prev, newProduct]);
  }
  // UPDATE
 async function updateProduct(produto: Produto) {
  const res = await fetch(`http://localhost:3333/produtos/${produto.id}`, {
    method: "PUT",
    body: JSON.stringify(produto),
    headers: { "Content-Type": "application/json" },
  });
  const updatedProduct = await res.json();
  setProdutos((prev) =>
    prev.map((p) => (p.id === produto.id ? updatedProduct : p))
  );
}


  // DELETE
  async function deleteProduct(id: number) {
    await fetch(`http://localhost:3333/produtos/${id}`, {
      method: "DELETE",
    });
    setProdutos((prev) => prev.filter((p) => p.id !== id));
  }

  useEffect(() => {
    console.log("useProdutos - carregando produtos...");
    fetchProducts();
  }, []);

  return { produtos, loading, addProduct, updateProduct, deleteProduct, fetchProducts};
}


