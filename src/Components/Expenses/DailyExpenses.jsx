import { useRef, useState } from "react"
import DailyExpenseList from "./DailyExpenseList"
const DailyExpenses=()=>{
    const [expenses,setExpenses] = useState([])
    const price=useRef()
    const description=useRef()
    const category=useRef()
    const submitHandler=(e)=>{
        e.preventDefault();
        const randomId = Math.floor(Math.random()*1000)
        const data={
            id: randomId,
            price:price.current.value,
            description:description.current.value,
            category:category.current.value
        }
        setExpenses(prevExpenses=>[data,...prevExpenses])
    }
    const expenseList = <ul>
        {expenses.map(item=><DailyExpenseList key={item.id} item={item}/>)}
    </ul>
    return(
        <>
        <form onSubmit={submitHandler}>
            <div>
                <label>Money</label>
                <input type='number' ref={price}></input>
            </div>
            <div>
                <label>Description</label>
                <input type='text' ref={description}></input>
            </div>
            <div>
                <label>Category</label>
                <select ref={category}>
                    <option>Food</option>
                    <option>Petrol</option>
                    <option>Salary</option>
                    <option>Others</option>
                </select>
            </div>
            <button>Add Expense</button>
        </form>
        {expenseList}
        </>
    )
}
export default DailyExpenses