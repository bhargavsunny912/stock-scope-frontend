import { createSlice } from "@reduxjs/toolkit";

const IpoActiveSlice=createSlice({
    name:"IPOActive",
    initialState:{
        value:[]
    },
    reducers:{
        AddActive:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {AddActive}=IpoActiveSlice.actions;

export default IpoActiveSlice.reducer;