import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./thunk";
 
const initialState = {
  loading: false,
  ProductData: [],
  errorMsg: "",
};

 
const productSlice = createSlice({
  name: "ProductData",
  initialState,
  reducers: {
    clearError(state) {
      state.errorMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.ProductData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMsg = action.payload;
      });
  },
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
