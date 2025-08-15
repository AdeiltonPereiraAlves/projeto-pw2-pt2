import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CarrinhoProvider } from "./context/CarrinhoContext.tsx";
import { ProdutoProvider } from "./context/ProdutoContext.tsx";
import { BuscaProvider } from "./context/BuscaContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProdutoProvider>
        <CarrinhoProvider>
          <BuscaProvider>
            <App />
          </BuscaProvider>
        </CarrinhoProvider>
      </ProdutoProvider>
    </BrowserRouter>
  </StrictMode>
);