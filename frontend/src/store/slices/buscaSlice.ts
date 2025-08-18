
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuscaState {
  termo: string;
}

const initialState: BuscaState = {
  termo: "",
};

const buscaSlice = createSlice({
  name: "busca",
  initialState,
  reducers: {
    setBusca: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    limparBusca: (state) => {
      state.termo = "";
    },
  },
});

export const { setBusca, limparBusca } = buscaSlice.actions;
export default buscaSlice.reducer;
