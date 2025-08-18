
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface Produto {
//   id: number;
//   nome: string;
//   preco: number;
//   quantidade: number;
// }

// interface CarrinhoState {
//   itens: Produto[];
// }

// const initialState: CarrinhoState = {
//   itens: [],
// };

// const carrinhoSlice = createSlice({
//   name: "carrinho",
//   initialState,
//   reducers: {
//     adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
//       const produtoExistente = state.itens.find(
//         (item) => item.id === action.payload.id
//       );

//       if (produtoExistente) {
//         produtoExistente.quantidade += action.payload.quantidade;
//       } else {
//         state.itens.push(action.payload);
//       }
//     },
//     removerDoCarrinho: (state, action: PayloadAction<number>) => {
//       state.itens = state.itens.filter((item) => item.id !== action.payload);
//     },
//     limparCarrinho: (state) => {
//       state.itens = [];
//     },
//   },
// });

// export const { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho } =
//   carrinhoSlice.actions;
// export default carrinhoSlice.reducer;
