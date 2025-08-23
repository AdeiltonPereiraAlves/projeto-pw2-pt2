// src/components/tests/CardProduto.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import CardProduto, { Produto } from "../Card";
import carrinhoReducer, { adicionarAoCarrinho } from "../../store/slices/carrinhoSlice";

// Função auxiliar para renderizar com Redux + Router
function renderWithProviders(ui: React.ReactNode) {
  const store = configureStore({
    reducer: {
      carrinho: carrinhoReducer,
    },
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter>{ui}</MemoryRouter>
      </Provider>
    ),
  };
}

const mockProduto: Produto = {
  id: 1,
  nome: "Produto Teste",
  preco: 99.9,
  imagem: "img-teste.jpg",
};

describe("CardProduto", () => {
  test("deve renderizar nome, preço e imagem do produto", () => {
    renderWithProviders(<CardProduto produto={mockProduto} />);

    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
    expect(screen.getByText("R$ 99.90")).toBeInTheDocument();

    const img = screen.getByRole("img", { name: /produto teste/i });
    expect(img).toHaveAttribute("src", "img-teste.jpg");
  });

  test("deve ter link para a página de detalhes do produto", () => {
    renderWithProviders(<CardProduto produto={mockProduto} />);

    const link = screen.getAllByRole("link")[0];
    expect(link).toHaveAttribute("href", "/produto/1");
  });

  test("deve disparar action ao clicar em 'Adicionar ao Carrinho'", () => {
    const { store } = renderWithProviders(<CardProduto produto={mockProduto} />);

    const botao = screen.getByRole("button", { name: /adicionar ao carrinho/i });
    fireEvent.click(botao);

    const state = store.getState().carrinho;
    expect(state.itens).toHaveLength(1);
    expect(state.itens[0]).toMatchObject({
      id: 1,
      nome: "Produto Teste",
      quantidade: 1,
    });
  });
});
