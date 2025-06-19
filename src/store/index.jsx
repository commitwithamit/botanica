import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/fetchProducts";
import cartReducer from "./slices/addToCart";

const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    },
});

export default store;