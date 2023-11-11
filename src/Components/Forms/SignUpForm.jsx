import { useRef } from "react"
import { useState } from "react"
import classes from "./SignUpForm.module.css"
import axios from "axios"
const SignUpForm=()=>{
    const [message,setMessage] = useState('')
    const email=useRef()
    const password=useRef()
    const confirmPassword=useRef()
    const submitHandler= async (e)=>{
        e.preventDefault()
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const confirmPasswordValue = confirmPassword.current.value;
        if (emailValue =='' || passwordValue =='' || confirmPasswordValue == ''){
            setMessage('Please fill all the fields')
            setTimeout(()=>setMessage(''),2000)
            return
        }
        if (passwordValue !== confirmPasswordValue){
            setMessage('Password and confimPassword not matched')
            setTimeout(()=>setMessage(''),2000)
            return
        }
        const data={
            email:emailValue,
            password:passwordValue,
            returnSecureToken: true
        }
        const headers={
            'Content-Type':'application/json'
        }
        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-zo3yd0OzHqIhJeZs8KguG4hJI7-0_AM',data,{headers})
            console.log(res)
        } catch (error) {
            setMessage('Something went wrong')
            setTimeout(()=>setMessage(''),2000)
            console.log(error)
        }
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <div className={classes.formdiv}>
                <label>Email</label>
                <input type='text' ref={email}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Password</label>
                <input type='password' ref={password}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Confirm Password</label>
                <input type='password' ref={confirmPassword}></input>
            </div>
            <button className={classes.button}>SignUp</button>
            <p>Already signUp, click to Login</p>
            {message && <p style={{color:'red'}}>{message}</p>}
        </form>
    )
}
export default SignUpForm