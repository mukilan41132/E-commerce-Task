import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 
export const fetchProducts = createAsyncThunk(
  "ProductData/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      return response.data;   
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
