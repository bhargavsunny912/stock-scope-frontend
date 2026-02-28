import { createSlice } from "@reduxjs/toolkit";

const GraphDuration=createSlice({
    name:"Duration",
    initialState:{
        value:"1d-1m"
    },
    reducers:{
        ChangeDuration:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {ChangeDuration}=GraphDuration.actions;

export default GraphDuration.reducer;