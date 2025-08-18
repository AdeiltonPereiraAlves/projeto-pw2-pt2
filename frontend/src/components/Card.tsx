// // src/components/Card.tsx
// import { Link } from "react-router-dom";
// import { useLogicaCarrinho } from "../hooks/useCarrinho";
// import { Produto } from "../db/produtos";
// import Botao from "./Botao";

// interface CardProps {
//   produto: Produto;
// }

// export default function Card({ produto }: CardProps) {
//   const { adicionarProduto } = useLogicaCarrinho();

//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
//       <Link to={`/produto/${produto.id}`}>
//         <img
//           src={produto.imagem}
//           alt={produto.nome}
//           className="w-full h-48 object-contain"
//         />
//       </Link>

//       <div className="p-4">
//         <Link to={`/produto/${produto.id}`}>
//           <h2 className="text-lg font-semibold">{produto.nome}</h2>
//           <p className="text-gray-600 text-sm">{produto.descricao}</p>
//         </Link>
//         <p className="mt-2 text-blue-600 font-bold">
//           R$ {produto.preco.toFixed(2)}
//         </p>
//         <button
//           className="flex w-full justify-center items-center mt-2"
//           onClick={() => adicionarProduto(produto)}
//         >
//           <Botao texto="Comprar" />
//         </button>
//       </div>
//     </div>
//   );
// }

// src/components/Card.tsx
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adicionarAoCarrinho } from "../store/slices/carrinhoSlice";

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem?: string;
};

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {
  const dispatch = useDispatch();

  const handleAddCarrinho = () => {
    dispatch(adicionarAoCarrinho({ ...produto, quantidade: 1 }));
  };

  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center gap-2">
      {/* Link para DetalheProduto */}
      <Link to={`/produto/${produto.id}`}>
        <img
          src={produto.imagem || "https://via.placeholder.com/150"}
          alt={produto.nome}
          className="w-32 h-32 object-cover rounded-md hover:scale-105 transition-transform"
        />
      </Link>

      <Link to={`/produto/${produto.id}`}>
        <h3 className="text-lg font-semibold hover:text-blue-600 transition">
          {produto.nome}
        </h3>
      </Link>

      <p className="text-gray-700">R$ {produto.preco.toFixed(2)}</p>

      <button
        onClick={handleAddCarrinho}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
