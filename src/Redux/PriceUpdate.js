import { createSlice } from "@reduxjs/toolkit";

const PriceUpdateSlice=createSlice({
    name:"PriceUpdate",
    initialState:{
        value:{latestPrice:0,OpenPrice:0},
    },
    reducers:{
        updatePrice:(state,action)=>{
            state.value.latestPrice=action.payload;
        },
        SetOpenPrice:(state,action)=>{
            state.value.OpenPrice=action.payload;
        }
    }
});

export const {updatePrice,SetOpenPrice}=PriceUpdateSlice.actions;

export default PriceUpdateSlice.reducer;

