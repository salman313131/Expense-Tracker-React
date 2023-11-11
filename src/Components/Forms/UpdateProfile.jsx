import { useContext, useEffect, useRef, useState } from "react"
import classes from "./UpdateProfile.module.css"
import axios from 'axios'
import AuthContext from "../../Store/authContext"
const UpdateProfile=()=>{
    const name=useRef()
    const photoUrl=useRef()
    const authCtx = useContext(AuthContext)
    const [clickUpdate,setClickUpdate] = useState(false)
    const clickHandler=()=>{
        setClickUpdate(true)
    }
    const headers={
        'Content-Type':'application/json'
    }
    const submitHandler= async (e)=>{
        e.preventDefault()
        const nameValue = name.current.value;
        const photoUrlValue = photoUrl.current.value;
        if(nameValue=='' || photoUrlValue==''){
            alert('Values are missing')
            return
        }
        const data=JSON.stringify({
            idToken: authCtx.token,
            displayName: nameValue,
            photoUrl: photoUrlValue,
            returnSecureToken: true
        })
        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC-zo3yd0OzHqIhJeZs8KguG4hJI7-0_AM',data,{headers})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        async function fetchData(){
        try {
            const dataSend = JSON.stringify({
                idToken: authCtx.token
            })
            const resData = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyC-zo3yd0OzHqIhJeZs8KguG4hJI7-0_AM',dataSend,{headers})
            if(resData.data.users[0]?.displayName && resData.data.users[0]?.photoUrl){
                setClickUpdate(true)
                name.current.value=resData.data.users[0].displayName;
                photoUrl.current.value=resData.data.users[0].photoUrl;
            }
        } catch (error) {
            console.log(error)
        }}
        fetchData()
    },[])
    return(
        <>
            {!clickUpdate && <p>Click to Update profile<button onClick={clickHandler}>Complete now</button></p>}
            {clickUpdate && <form className={classes.form} onSubmit={submitHandler}>
                <h1>Update Profile</h1>
                <div className={classes.forminput}>
                    <div className={classes.formdiv}>
                        <label>Full Name</label>
                        <input type='text' ref={name}></input>
                    </div>
                    <div className={classes.formdiv}>
                        <label>Photo URL</label>
                        <input type='text' ref={photoUrl}></input>
                    </div>
                </div>
                <button className={classes.button}>Update</button>
            </form>}
        </>
    )
}
export default UpdateProfile