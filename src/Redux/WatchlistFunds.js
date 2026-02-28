import { createSlice } from "@reduxjs/toolkit";

const WatchlistfundsSlice=createSlice({
    name:"WatchlistFunds",
    initialState:{
        value:[]
    },
    reducers:{
        ToggleFund:(state,action)=>{
            let index=state.value.findIndex((f)=>{
                f.fund_name==action.payload.fund_name;
            });
            let exists=state.value.filter((f)=>f.fund_name==action.payload.fund_name);
            
            if(index==-1 && exists.length==0){
                state.value.push(action.payload);
            }
            else{
                state.value.splice(index,1);
            }
        }
    }
})

export const {ToggleFund}=WatchlistfundsSlice.actions;

export default WatchlistfundsSlice.reducer;
