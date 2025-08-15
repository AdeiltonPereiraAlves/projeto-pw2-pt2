// src/components/DashboardProdutos.tsx
import React, { useState, useEffect } from "react";
import { useLogicaProdutos } from "../hooks/useProdutos";
import { Produto } from "../db/produtos";

type FormState = Omit<Produto, "id"> & { id?: number };

export default function DashboardProdutos() {
  const { produtos, criarProduto, editarProduto, removerProduto } = useLogicaProdutos();

  const [form, setForm] = useState<FormState>({ nome: "", descricao: "", preco: 0, imagem: "" });
  const [editandoId, setEditandoId] = useState<number | null>(null);

  // Sempre que começamos a editar, carregamos o produto no form
  useEffect(() => {
    if (editandoId != null) {
      const p = produtos.find(p => p.id === editandoId);
      if (p) setForm({ id: p.id, nome: p.nome, descricao: p.descricao, preco: p.preco, imagem: p.imagem });
    } else {
      setForm({ nome: "", descricao: "", preco: 0, imagem: "" });
    }
  }, [editandoId, produtos]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editandoId != null) {
      editarProduto(form as Produto);
    } else {
      criarProduto(form);
    }
    setEditandoId(null);
  };

  return (
    <div className="p-6 space-y-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Dashboard de Produtos</h1>

      {/* Formulário de criar/editar */}
      <form onSubmit={onSubmit} className="space-y-4 p-4 bg-white rounded shadow w-80">
        <div>
          <label className="block text-sm">Nome</label>
          <input
            className="w-full border px-2 py-1"
            value={form.nome}
            onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
            required
          />
        </div>
        <div>
          <label className="block text-sm">Descrição</label>
          <textarea
            className="w-full border px-2 py-1"
            value={form.descricao}
            onChange={e => setForm(f => ({ ...f, descricao: e.target.value }))}
            required
          />
        </div>
        <div>
          <label className="block text-sm">Preço</label>
          <input
            type="number"
            step="0.01"
            className="w-full border px-2 py-1"
            value={form.preco}
            onChange={e => setForm(f => ({ ...f, preco: parseFloat(e.target.value) }))}
            required
          />
        </div>
        <div>
          <label className="block text-sm">URL da Imagem</label>
          <input
            className="w-full border px-2 py-1"
            value={form.imagem}
            onChange={e => setForm(f => ({ ...f, imagem: e.target.value }))}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editandoId != null ? "Salvar Alterações" : "Criar Produto"}
        </button>
        {editandoId != null && (
          <button
            type="button"
            onClick={() => setEditandoId(null)}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        )}
      </form>

      {/* Tabela/Listagem */}
      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Preço</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(p => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-2 text-center">{p.id}</td>
              <td className="p-2">{p.nome}</td>
              <td className="p-2">R$ {p.preco.toFixed(2)}</td>
              <td className="p-2 space-x-2 text-center">
                <button
                  onClick={() => setEditandoId(p.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => removerProduto(p.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
