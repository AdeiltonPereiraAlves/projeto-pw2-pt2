import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Produto } from "../../db/produtos";
import axios from "axios";

interface ProdutoState {
  produtos: Produto[];
  loading: boolean;
  error: string | null;
}

const initialState: ProdutoState = {
  produtos: [],
  loading: false,
  error: null,
};

// READ
export const fetchProdutos = createAsyncThunk("produtos/fetch", async () => {
  const res = await axios.get("http://localhost:3333/produtos");
  return res.data as Produto[];
});

// CREATE
export const addProduto = createAsyncThunk(
  "produtos/add",
  async (produto: Omit<Produto, "id">) => {
    const res = await axios.post("http://localhost:3333/produtos", produto);
    return res.data as Produto;
  }
);

// UPDATE
export const updateProduto = createAsyncThunk(
  "produtos/update",
  async (produto: Produto) => {
    const res = await axios.put(
      `http://localhost:3333/produtos/${produto.id}`,
      produto
    );
    return res.data as Produto;
  }
);

// DELETE
export const deleteProduto = createAsyncThunk(
  "produtos/delete",
  async (id: number) => {
    await axios.delete(`http://localhost:3333/produtos/${id}`);
    return id;
  }
);

const produtoSlice = createSlice({
  name: "produtos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.loading = false;
        state.produtos = action.payload;
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Erro ao buscar produtos";
      })
      // ADD
      .addCase(addProduto.fulfilled, (state, action) => {
        state.produtos.push(action.payload);
      })
      // UPDATE
      .addCase(updateProduto.fulfilled, (state, action) => {
        state.produtos = state.produtos.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      })
      // DELETE
      .addCase(deleteProduto.fulfilled, (state, action) => {
        state.produtos = state.produtos.filter((p) => p.id !== action.payload);
      });
  },
});

export default produtoSlice.reducer;
