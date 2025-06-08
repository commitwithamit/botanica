import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const response = await axios.get(`${import.meta.env.VITE_DB_URL}/products.json`);
    return Object.values(response.data);
});
console.log("thunk ", fetchProducts);
const productsSlice = createSlice({
    name: "products",
    initialState:{
        items:[],
        status: "idle",
        error: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = "success";
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

// selecting all the products from database
export const selectAllProducts = (state) => state.products.items;

export const productStatus = (state) => state.products.status;
export const ProductError = (state) => state.products.error;

export default productsSlice.reducer;



// selecting only trendy products below is the other method when database didn't have separate type key so we had to segregate data like this

// const trendyProducts = ["Jade Plant", "Sedum", "Tarragon", "Money Plant", "Pine Bonsai"];
// export const selectTreandyProducts = createSelector(
//     selectAllProducts,
//     (products) => products.filter((product) => trendyProducts.includes(product.name))
// );