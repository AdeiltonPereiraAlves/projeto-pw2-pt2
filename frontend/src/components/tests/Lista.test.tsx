import React from "react";
import { render, screen } from "@testing-library/react";
import ListaProdutos from "../ListaProdutos";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from "../../store/slices/produtoSlice";
import buscaReducer from "../../store/slices/buscaSlice";
import { vi } from "vitest"; // <-- import do vitest para mocks

// Mock do thunk fetchProdutos
vi.mock("../../store/slices/produtoSlice", async () => {
  const originalModule = await vi.importActual("../../store/slices/produtoSlice");
  return {
    ...originalModule,
    fetchProdutos: () => ({ type: "produto/fetchProdutos/mock" }),
  };
});

function renderWithStore(initialState?: any) {
  const store = configureStore({
    reducer: {
      produto: produtoReducer,
      busca: buscaReducer,
    },
    preloadedState: initialState,
  });

  return render(
    <Provider store={store}>
      <ListaProdutos />
    </Provider>
  );
}

test("exibe mensagem quando não há produtos", () => {
  renderWithStore({
    produto: { produtos: [], loading: false, error: null },
    busca: { termo: "" },
  });

  expect(screen.getByText("Nenhum produto encontrado.")).toBeInTheDocument();
});
