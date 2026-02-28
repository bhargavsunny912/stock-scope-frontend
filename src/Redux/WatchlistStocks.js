import { createSlice } from "@reduxjs/toolkit";

const WatchlistStocksSlice=createSlice({
    name:"WatchlistStocks",
    initialState:{
        value:[]
    },
    reducers:{
        ToggleStock:(state,action)=>{
            let index=state.value.findIndex((f)=>{
                f.ric===action.payload.ric;
            });
            let exists=state.value.filter((f)=>f.ric==action.payload.ric);
            if(index==-1 && exists.length==0){
                state.value.push(action.payload);
            }
            else{
                state.value.splice(index,1);
            }
        },
    }
})

export const {ToggleStock}=WatchlistStocksSlice.actions;

export default WatchlistStocksSlice.reducer;
