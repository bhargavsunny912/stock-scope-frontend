import { createSlice } from "@reduxjs/toolkit";

const IsLoginSlice=createSlice({
    name:"IsLogin",
    initialState:{
        value:false
    },
    reducers:{
        checkAuth:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {checkAuth}=IsLoginSlice.actions;

export default IsLoginSlice.reducer;