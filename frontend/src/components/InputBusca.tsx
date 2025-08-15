import { ChangeEvent } from "react";

interface InputBuscaProps {
  valor: string;
  aoDigitar: (texto: string) => void;
}

export default function InputBusca({ valor, aoDigitar }: InputBuscaProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    aoDigitar(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Buscar produtos..."
      className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      value={valor}
      onChange={handleChange}
    />
  );
}
