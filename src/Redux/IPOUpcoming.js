import { createSlice } from "@reduxjs/toolkit";

const IpoUpcomingSlice=createSlice({
    name:"IpoUpcoming",
    initialState:{
        value:[]
    },
    reducers:{
        AddUpcoming:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {AddUpcoming}=IpoUpcomingSlice.actions;

export default IpoUpcomingSlice.reducer;