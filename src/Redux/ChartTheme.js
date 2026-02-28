import { createSlice } from "@reduxjs/toolkit";

const ChartThemeSlice=createSlice({
    name:"Theme",
    initialState:{
        value:false
    },
    reducers:{
        SwitchTheme:(state)=>{
            state.value=!state.value;
        }
    }
})

export const {SwitchTheme}=ChartThemeSlice.actions;

export default ChartThemeSlice.reducer;