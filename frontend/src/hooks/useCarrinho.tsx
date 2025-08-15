import { useCarrinho } from "../context/CarrinhoContext";
import { Produto } from "../db/produtos";

export function useLogicaCarrinho() {
  const { items, setItems } = useCarrinho();

  const adicionarProduto = (produto: Produto) => {
    const existe = items.find((item) => item.produto.id === produto.id);
    if (existe) {
      setItems((prev) =>
        prev.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item!.quantidade! + 1 }
            : item
        )
      );
    } else {
      setItems((prev) => [...prev, { produto, quantidade: 1 }]);
    }
  };

  const removerProduto = (id: number) => {
    setItems((prev) => prev.filter((item) => item.produto.id !== id));
  };

  const aumentarQuantidade = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.produto.id === id
          ? { ...item, quantidade: item.quantidade! + 1 }
          : item
      )
    );
  };

  const diminuirQuantidade = (id: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.produto.id === id
            ? { ...item, quantidade: item.quantidade! - 1 }
            : item
        )
        .filter((item) => item.quantidade! > 0)
    );
  };

  const total = items.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade!,
    0
  );

  const totalItens = items.reduce((acc, item) => acc + item.quantidade!, 0);

  return {
    items,
    total,
    totalItens,
    adicionarProduto,
    removerProduto,
    aumentarQuantidade,
    diminuirQuantidade,
  };
}
