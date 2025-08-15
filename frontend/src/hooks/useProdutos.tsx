// src/hooks/useLogicaProdutos.ts
import { useProdutoContext } from "../context/ProdutoContext";
import { Produto } from "../db/produtos";

export function useLogicaProdutos() {
  const { produtos, setProdutos } = useProdutoContext();

  const criarProduto = (novo: Omit<Produto, "id">) => {
    const nextId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
    setProdutos([...produtos, { ...novo, id: nextId }]);
  };

  const editarProduto = (atualizado: Produto) => {
    setProdutos(produtos.map(p => (p.id === atualizado.id ? atualizado : p)));
  };

  const removerProduto = (id: number) => {
    setProdutos(produtos.filter(p => p.id !== id));
  };

  return {
    produtos,
    criarProduto,
    editarProduto,
    removerProduto,
  };
}
