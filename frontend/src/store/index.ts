import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./slices/carrinhoSlice";
import produtoReducer from "./slices/produtoSlice";
import buscaReducer from "./slices/buscaSlice";
export const store = configureStore({
  reducer: {
     carrinho: carrinhoSlice,
    produto: produtoReducer,
    busca: buscaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
function carrinhoReducer(state: unknown, action: any): unknown {
    throw new Error("Function not implemented.");
}

