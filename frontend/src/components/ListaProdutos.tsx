import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchProdutos } from "../store/slices/produtoSlice";
import Card from "./Card";

export default function ListaProdutos() {
  const dispatch = useDispatch<AppDispatch>();

  const { produtos, loading, error } = useSelector(
    (state: RootState) => state.produto
  );
  const termoBusca = useSelector((state: RootState) => state.busca.termo);

  useEffect(() => {
    dispatch(fetchProdutos());
  }, [dispatch]);

  // Filtra os produtos com base no termo de busca
  const produtosFiltrados = produtos.filter((produto) => {
    const termo = termoBusca.toLowerCase();
    return (
      produto.nome.toLowerCase().includes(termo) ||
      produto.descricao.toLowerCase().includes(termo) ||
      produto.preco.toString().includes(termo)
    );
  });

  if (loading) {
    return <p className="text-center mt-10">Carregando produtos...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Erro: {error}
      </p>
    );
  }

  return (
    <div className="w-full p-4">
      {produtosFiltrados.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          Nenhum produto encontrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtosFiltrados.map((produto) => (
            <Card key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}
