import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses:[]
}
const expenseSlice = createSlice({
    name:'expense',
    initialState: initialState,
    reducers:{
        addInitial(state,action){
            state.expenses = action.payload
        },
        add(state,action){
            state.expenses = [action.payload,...state.expenses]
        },
        remove(state,action){
            state.expenses = state.expenses.filter(item=>item.objId === action.payload)
        }
    }
})

export const expenseActions = expenseSlice.actions
export default expenseSlice.reducer