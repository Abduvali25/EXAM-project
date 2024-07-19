import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name:"products",
    initialState: {products: []},
    reducers: {
        addProducts: (state , action) => {
            state.products = action.payload;
        },
        HighToLow: (state , action) => {

        }
    }
});

export const {addProducts , HighToLow} = productsSlice.actions;
export default productsSlice.reducer;