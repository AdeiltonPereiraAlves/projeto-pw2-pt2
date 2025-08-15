// src/components/DetalheProduto.tsx
import { useParams } from "react-router-dom";
import { useProdutoContext } from "../context/ProdutoContext";
import { useLogicaCarrinho } from "../hooks/useCarrinho";
import Botao from "./Botao";
import CarrinhoLateral from "./CartLateral";

export default function DetalheProduto() {
  const { id } = useParams();
  const { produtos } = useProdutoContext();
  const { adicionarProduto } = useLogicaCarrinho();

  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) return <p className="p-4">Produto não encontrado.</p>;

  return (

    <div className="p-6 max-w-3xl mx-auto py-60">


      <div className="bg-white p-6 rounded-xl shadow-md flex gap-6 ">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-64 h-64 object-contain rounded"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{produto.nome}</h2>
          <p className="text-gray-700 mb-4">{produto.descricao}</p>
          <p className="text-blue-600 text-xl font-bold mb-4">
            R$ {produto.preco.toFixed(2)}
          </p>
          <button onClick={() => adicionarProduto(produto)}>
            <Botao texto="Adicionar ao Carrinho" />
          </button>
        </div>
         <CarrinhoLateral />
      </div>
    </div>
  );
}
