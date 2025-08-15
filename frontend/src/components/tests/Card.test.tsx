import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { CarrinhoProvider } from "../../context/CarrinhoContext";
import { MemoryRouter } from "react-router-dom";
import { Produto } from "../../db/produtos";

const mockProduto: Produto = {
  id: 1,
  nome: "Tênis",
  descricao: "Confortável",
  preco: 199.99,
  imagem: "https://via.placeholder.com/150",
};

test("deve exibir o nome, descrição e preço do produto", () => {
  render(
    <MemoryRouter>
      <CarrinhoProvider>
        <Card produto={mockProduto} />
      </CarrinhoProvider>
    </MemoryRouter>
  );

  expect(screen.getByText("Tênis")).toBeInTheDocument();
  expect(screen.getByText("Confortável")).toBeInTheDocument();
  expect(screen.getByText("R$ 199.99")).toBeInTheDocument();
});
