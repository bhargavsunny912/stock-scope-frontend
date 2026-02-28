import { createSlice } from "@reduxjs/toolkit";

const TopStocksSlice=createSlice({
    name:"TopStocks",
    initialState:{
        value:"All"
    },
    reducers:{
        Change:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {Change}=TopStocksSlice.actions;

export default TopStocksSlice.reducer;