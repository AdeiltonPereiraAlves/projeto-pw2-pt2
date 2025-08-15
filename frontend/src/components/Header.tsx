import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";
import { useProdutoContext } from "../context/ProdutoContext";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const { produtos, setProdutos } = useProdutoContext();
  const [busca, setBusca] = useState("");
  const [produtosOriginais] = useState(produtos);

  function handleBusca(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value;
    setBusca(valor);
    const termo = valor.toLowerCase();

    if (valor.trim() === "") {
      setProdutos(produtosOriginais);
      return;
    }

    setProdutos(
      produtosOriginais.filter(
        (p) =>
          p.nome.toLowerCase().includes(termo) ||
          p.descricao.toLowerCase().includes(termo) ||
          p.preco.toString().includes(termo)
      )
    );
  }

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center gap-x-6">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Minha Loja
          </Link>
        </h1>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:text-gray-300">
            Início
          </Link>
          <Link to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/contato" className="hover:text-gray-300">
            Contato
          </Link>
        </nav>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produto..."
              value={busca}
              onChange={handleBusca}
              className="px-8 py-1 rounded text-black w-52"
            />
            <FaSearch className="absolute left-2 top-2.5 text-gray-500" />
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
}
