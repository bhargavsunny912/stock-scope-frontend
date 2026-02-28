import { createSlice } from "@reduxjs/toolkit";

const IpoListedSlice=createSlice({
    name:"IpoListed",
    initialState:{
        value:[]
    },
    reducers:{
        AddListed:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {AddListed}=IpoListedSlice.actions;

export default IpoListedSlice.reducer;