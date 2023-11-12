import { useContext, useEffect, useRef, useState } from "react"
import DailyExpenseList from "./DailyExpenseList"
import classes from "./DailyExpenses.module.css"
import AuthContext from "../../Store/authContext"
import { db } from "../../firebase"
import { push, ref, get, remove } from 'firebase/database'
const DailyExpenses=()=>{
    const [expenses,setExpenses] = useState([])
    const authCtx = useContext(AuthContext)
    const price=useRef()
    const description=useRef()
    const category=useRef()
    const submitHandler=async(e)=>{
        e.preventDefault();
        const data={
            price:price.current.value,
            description:description.current.value,
            category:category.current.value
        }
        try {
            const res = await push(ref(db,`/${authCtx.localId}`),data)
            setExpenses(prevExpenses=>{
                const dataStored={objId:res.key,...data}
                return [dataStored,...prevExpenses]
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        async function getAlldata(){
        const dbRef = ref(db, `/${authCtx.localId}`);
            try {
                const snapshot = await get(dbRef)
                const dataToStored=[]
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        dataToStored.push({objId:childSnapshot.key,...childSnapshot.val()});  
                });
                setExpenses(dataToStored)
                } else {
                    console.log('No data available at the specified location.');
                }
            } catch (error) {
                console.log(error)
            }
        }
        getAlldata()
    },[])
    const deleteHandler=async(id)=>{
        const dbref = ref(db,`/${authCtx.localId}/${id}`)
        try {
            await remove(dbref)
            const newList = expenses.filter(item=>item.objId != id)
            setExpenses(newList)
        } catch (error) {
            console.log('Error',error)
        }
    }
    const editHandler= async (id)=>{
        const dbref = ref(db,`/${authCtx.localId}/${id}`)
        try {
            await remove(dbref)
            const editItem = expenses.find(item=>item.objId == id)
            const newList = expenses.filter(item=>item.objId != id)
            price.current.value = editItem.price
            description.current.value = editItem.description
            category.current.value = editItem.category
            setExpenses(newList)
        } catch (error) {
            console.log(error)
        }
    }
    const expenseList = <ul>
        {expenses.map(item=><DailyExpenseList key={item.objId} item={item} onDelete={deleteHandler.bind(null,item.objId)} onEdit={editHandler.bind(null,item.objId)}/>)}
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