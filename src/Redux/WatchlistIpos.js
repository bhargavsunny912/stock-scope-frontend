import { createSlice } from "@reduxjs/toolkit";

const WatchlistIposSlice=createSlice({
    name:"WatchlistIpos",
    initialState:{
        value:[]
    },
    reducers:{
        ToggleIpo:(state,action)=>{
            let index=state.value.findIndex((f)=>{
                f.symbol==action.payload.symbol;
            });
            let exists=state.value.filter((f)=>f.symbol==action.payload.symbol);
            
            if(index==-1 && exists.length==0){
                state.value.push(action.payload);
            }
            else{
                state.value.splice(index,1);
            }
        }
    }
})

export const {ToggleIpo}=WatchlistIposSlice.actions;

export default WatchlistIposSlice.reducer;
