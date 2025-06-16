import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const response = await axios.get(`${import.meta.env.VITE_DB_URL}/products.json`);
    return Object.values(response.data || {}); // || {} Prevent crash on null
});

const productsSlice = createSlice({
    name: "products",
    initialState:{
        data:[],
        isLoading: true,
        isError: false,
        error: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = null;
            state.data = [];
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        });
    }
});


export default productsSlice.reducer;

// selecting all the products from database
// export const selectAllProducts = (state) => state.products.items;

// export const productStatus = (state) => state.products.status;
// export const ProductError = (state) => state.products.error;

// export const selectAllProducts = () => [];
// export const productStatus = () => 'idle';
// export const ProductError = () => null;


// selecting only trendy products below is the other method when database didn't have separate type key so we had to segregate data like this

// const trendyProducts = ["Jade Plant", "Sedum", "Tarragon", "Money Plant", "Pine Bonsai"];
// export const selectTreandyProducts = createSelector(
//     selectAllProducts,
//     (products) => products.filter((product) => trendyProducts.includes(product.name))
// );