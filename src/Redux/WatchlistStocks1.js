import { createSlice } from "@reduxjs/toolkit";

const WatchlistStocksSlice1=createSlice({
    name:"WatchlistStocks1",
    initialState:{
        value:[]
    },
    reducers:{
        ToggleStock1:(state,action)=>{
            let index=state.value.findIndex((f)=>{
                f.ticker===action.payload.ticker;
            });
            let exists=state.value.filter((f)=>f.ticker==action.payload.ticker);
            if(index==-1 && exists.length==0){
                state.value.push(action.payload);
            }
            else{
                state.value.splice(index,1);
            }
        },
    }
})

export const {ToggleStock1}=WatchlistStocksSlice1.actions;

export default WatchlistStocksSlice1.reducer;
