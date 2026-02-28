// stockSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStockData = createAsyncThunk(
  "stock/fetchStockData",
  async ({ symbol, range, interval }) => {
    const res = await fetch(`/api/chart?symbol=${symbol}&range=${range}&interval=${interval}`);
    return await res.json();
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    data: [],
    status: "idle"
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStockData.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  }
});

export default stockSlice.reducer;
