import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token')
const localId = localStorage.getItem('local')
const initialState = {
    token:token,
    isLoggedIn:false,
    localId:localId
}

const authSlice = createSlice({
    name:'authentication',
    initialState:initialState,
    reducers:{
        login(state,action){
            state.token = action.payload
            state.isLoggedIn = true
        },
        logout(state){
            state.token=''
            state.isLoggedIn = false
            state.localId = ''
        },
        localIdSet(state,action){
            state.localId = action.payload
        }
    }
})
export const authActions = authSlice.actions 
export default authSlice.reducer