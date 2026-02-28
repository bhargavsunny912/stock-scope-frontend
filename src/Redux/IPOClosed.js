import { createSlice } from "@reduxjs/toolkit";

const IpoClosedSlice=createSlice({
    name:"IpoClosed",
    initialState:{
        value:[]
    },
    reducers:{
        AddClosed:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {AddClosed}=IpoClosedSlice.actions;

export default IpoClosedSlice.reducer;