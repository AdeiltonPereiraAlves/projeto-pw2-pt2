// src/components/Card.tsx
import { Link } from "react-router-dom";
import { useLogicaCarrinho } from "../hooks/useCarrinho";
import { Produto } from "../db/produtos";
import Botao from "./Botao";

interface CardProps {
  produto: Produto;
}

export default function Card({ produto }: CardProps) {
  const { adicionarProduto } = useLogicaCarrinho();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/produto/${produto.id}`}>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-48 object-contain"
        />
      </Link>

      <div className="p-4">
        <Link to={`/produto/${produto.id}`}>
          <h2 className="text-lg font-semibold">{produto.nome}</h2>
          <p className="text-gray-600 text-sm">{produto.descricao}</p>
        </Link>
        <p className="mt-2 text-blue-600 font-bold">
          R$ {produto.preco.toFixed(2)}
        </p>
        <button
          className="flex w-full justify-center items-center mt-2"
          onClick={() => adicionarProduto(produto)}
        >
          <Botao texto="Comprar" />
        </button>
      </div>
    </div>
  );
}
