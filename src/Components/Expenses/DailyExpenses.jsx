import { useContext, useRef, useState } from "react"
import DailyExpenseList from "./DailyExpenseList"
import classes from "./DailyExpenses.module.css"
import axios from "axios"
import AuthContext from "../../Store/authContext"
const DailyExpenses=()=>{
    const [expenses,setExpenses] = useState([])
    const authCtx = useContext(AuthContext)
    const price=useRef()
    const description=useRef()
    const category=useRef()
    const submitHandler=async(e)=>{
        e.preventDefault();
        const randomId = Math.floor(Math.random()*1000)
        const data={
            id: randomId,
            price:price.current.value,
            description:description.current.value,
            category:category.current.value
        }
        const headers={
            'Content-Type':'application/json',
        }
        try {
            const res = await axios.post(`https://expense-tracker-react-233c3-default-rtdb.firebaseio.com/expenses`,data,{headers})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const expenseList = <ul>
        {expenses.map(item=><DailyExpenseList key={item.id} item={item}/>)}
    </ul>
    return(
        <>
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.formdiv}>
                <label>Money</label>
                <input type='number' ref={price}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Description</label>
                <input type='text' ref={description}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Category</label>
                <select ref={category}>
                    <option>Food</option>
                    <option>Petrol</option>
                    <option>Salary</option>
                    <option>Others</option>
                </select>
            </div>
            <button className={classes.button}>Add Expense</button>
        </form>
        {expenseList}
        </>
    )
}
export default DailyExpenses