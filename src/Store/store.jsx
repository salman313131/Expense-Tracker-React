import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth'
import expenseSlice from './expense'

const store = configureStore({
    reducer: {auth:authSlice,expense:expenseSlice}
})
export default store