import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses:[],
    totalExpense:0
}
const expenseSlice = createSlice({
    name:'expense',
    initialState: initialState,
    reducers:{
        addInitial(state,action){
            state.expenses = action.payload
            state.totalExpense = action.payload.reduce((sum,item)=>{
                return sum+Number(item.price)
            },0)
        },
        add(state,action){
            state.expenses = [action.payload,...state.expenses]
            state.totalExpense+=Number(action.payload.price)
        },
        remove(state,action){
            const itemRemoved = state.expenses.find(item=>item.objId === action.payload)
            state.expenses = state.expenses.filter(item=>item.objId !== action.payload)
            state.totalExpense-=Number(itemRemoved.price)
        }
    }
})

export const expenseActions = expenseSlice.actions
export default expenseSlice.reducer