import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Mensagem enviada:", form);
    setEnviado(true);
    setForm({ nome: "", email: "", mensagem: "" });
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Fale Conosco</h1>
      {enviado && (
        <div className="bg-green-100 text-green-800 p-2 mb-4 rounded text-sm">
          Mensagem enviada com sucesso!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium">Nome</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
