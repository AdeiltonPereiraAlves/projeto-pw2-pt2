import { useCarrinho } from "../context/CarrinhoContext";
import { useLogicaCarrinho } from "../hooks/useCarrinho";
import { FaTimes } from "react-icons/fa";

export default function CarrinhoLateral() {
  const { aberto, fecharCarrinho } = useCarrinho();
  const {
    items,
    total,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
  } = useLogicaCarrinho();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-50
      ${aberto ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Carrinho</h2>
        <button onClick={fecharCarrinho}>
          <FaTimes size={20} />
        </button>
      </div>

      <div className="p-4 space-y-4">
        {items.length === 0 ? (
          <p className="text-sm text-gray-600">Seu carrinho está vazio.</p>
        ) : (
          <>
            {items.map(({ produto, quantidade }) => (
              <div
                key={produto.id}
                className="flex items-center gap-4 border-b pb-2"
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{produto.nome}</h3>
                  <p className="text-xs text-gray-500">
                    R$ {produto.preco.toFixed(2)} x {quantidade}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => diminuirQuantidade(produto.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span className="text-sm">{quantidade}</span>
                    <button
                      onClick={() => aumentarQuantidade(produto.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removerProduto(produto.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remover
                </button>
              </div>
            ))}
            <div className="text-right font-bold pt-4">
              Total: R$ {total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
