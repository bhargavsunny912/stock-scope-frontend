import { createSlice } from "@reduxjs/toolkit";

const CandleSlice=createSlice({
    name:"CandleStatus",
    initialState:{
        value:false
    },
    reducers:{
        SwitchGraph:(state)=>{
            state.value=!state.value;
        }
    }
})

export const {SwitchGraph}=CandleSlice.actions;

export default CandleSlice.reducer;