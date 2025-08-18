import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Produto {
  id: number;
  idOriginal?: number; // caso queira rastrear o id do produto
  nome: string;
  preco: number;
  quantidade: number;
}

interface CarrinhoState {
  itens: Produto[];
  aberto: boolean; // novo estado para abrir/fechar carrinho
}

const initialState: CarrinhoState = {
  itens: [],
  aberto: false,
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.itens.find(
        (item) => item.id === action.payload.id
      );

      if (produtoExistente) {
        produtoExistente.quantidade += action.payload.quantidade;
      } else {
        state.itens.push(action.payload);
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload);
    },
    limparCarrinho: (state) => {
      state.itens = [];
    },
    abrirCarrinho: (state) => {
      state.aberto = true;
    },
    fecharCarrinho: (state) => {
      state.aberto = false;
    },
  },
});

export const {
  adicionarAoCarrinho,
  removerDoCarrinho,
  limparCarrinho,
  abrirCarrinho,
  fecharCarrinho,
} = carrinhoSlice.actions;
export default carrinhoSlice.reducer;