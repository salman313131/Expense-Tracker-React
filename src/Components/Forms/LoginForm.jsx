import { useContext, useRef, useState } from "react"
import classes from './LoginForm.module.css'
import axios from "axios"
import AuthContext from "../../Store/authContext"
import { Link,useHistory } from "react-router-dom"
const LoginForm=()=>{
    const [message,setMessage] = useState('')
    const email = useRef()
    const password = useRef()
    const authCtx = useContext(AuthContext)
    const history = useHistory()
    const submitHandler= async (e)=>{
        e.preventDefault()
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        if(emailValue == '' || passwordValue == ''){
            setMessage('Please fill all the details')
            setTimeout(()=>setMessage(''),2000)
            return
        }
        const data=JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true
        })
        const headers={
            'Content-Type':'application/json'
        }
        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-zo3yd0OzHqIhJeZs8KguG4hJI7-0_AM',data,{headers})
            console.log(res)
            authCtx.login(res.data.idToken)
            authCtx.localIdSet(res.data.localId)
            localStorage.setItem('token',res.data.idToken)
            localStorage.setItem('local',res.data.localId)
            history.replace('/expense')
        } catch (error) {
            setMessage(error.message)
            setTimeout(()=>setMessage(''),2000)
            console.log(error)
        }
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <h1>Log In</h1>
            <div className={classes.formdiv}>
                <label>Email</label>
                <input type='text' ref={email}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Password</label>
                <input type='password' ref={password}></input>
            </div>
            <Link to='/forgot'>Forgot Password</Link>
            <button className={classes.button}>LogIn</button>
            <Link to='/signup'>
                <p>New User, click to Sign Up</p>
            </Link>
            {message && <p style={{color:'red'}}>{message}</p>}
        </form>
    )
}
export default LoginForm