import { useEffect, useState } from "react";
import { useProdutoContext } from "../context/ProdutoContext";
import Card from "./Card";
import { Produto } from "../db/produtos";

export default function ListaProdutos() {
  const { produtos } = useProdutoContext();
  const [lista, setLista] = useState<Produto[]>([]);

  useEffect(() => {
    setLista(produtos);
  }, [produtos]);

  return (
    <div className="w-full p-4">
      {lista.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          Nenhum produto encontrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lista.map((produto) => (
            <Card key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}
