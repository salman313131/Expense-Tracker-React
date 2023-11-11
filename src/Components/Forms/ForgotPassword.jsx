import { Link } from "react-router-dom"
import classes from "./ForgotPassword.module.css"
import axios from 'axios'
import { useRef, useState } from "react"
const ForgotPasword=()=>{
    const emailRef = useRef()
    const [message,setMessage] = useState('')
    const submitHandler= async (e)=>{
        e.preventDefault();
        const emailValue = emailRef.current.value;
        if(emailValue === ''){
            setMessage('Please enter field')
            setTimeout(()=>setMessage(''),2000)
            return
        }
        try {
            const data=JSON.stringify({
                requestType: 'PASSWORD_RESET',
                email:emailValue
            })
            const headers={
                'Content-Type':'application/json'
            }
            await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC-zo3yd0OzHqIhJeZs8KguG4hJI7-0_AM',data,{headers})
            setMessage('successfully send,check Email')
            setTimeout(()=>setMessage(''),2000)
        } catch (error) {
            console.log(error)
            setMessage(error.message)
            setTimeout(()=>setMessage(''),2000)
        }
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.formdiv}>
                <lable>Email</lable>
                <input type='text' ref={emailRef}></input>
            </div>
            <Link to='/login'>Login</Link>
            <button className={classes.button}>Send Link</button>
            {message && <p>{message}</p>}
        </form>
    )
}
export default ForgotPasword