import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productslice"

export default configureStore({
    reducer:{
        productsReducer,
    }
})