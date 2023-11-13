import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPremium: false
}
const themeSlice = createSlice({
    name:'theme',
    initialState:initialState,
    reducers:{
        setPremium(state){
            state.isPremium = true
        }
    }
})

export const themeActions = themeSlice.actions
export default themeSlice.reducer