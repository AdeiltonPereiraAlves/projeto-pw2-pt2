// src/components/tests/Botao.test.tsx
import { render, screen } from "@testing-library/react";
import Botao from "../Botao";

describe("Componente Botao", () => {
  it("deve renderizar o texto corretamente", () => {
    render(<Botao texto="Clique aqui" />);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });

  it("deve aplicar classes de estilo corretamente", () => {
    render(<Botao texto="Testar classes" />);
    const elemento = screen.getByText("Testar classes");
    expect(elemento).toHaveClass(
      "w-full h-6 bg-green-300 p-6 flex items-center justify-center rounded-md hover:bg-green-400 hover:text-white"
    );
  });
});
