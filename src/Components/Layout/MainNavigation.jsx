import classes from "./MainNavigation.module.css"
import AuthContext from "../../Store/authContext"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
const MainNavigation=()=>{
    const history = useHistory()
    const authCtx = useContext(AuthContext)
    const logoutHandler=()=>{
        localStorage.removeItem('token')
        authCtx.logout()
        history.replace('/login')
    }
    return(
        <nav className={classes.navbar}>
            <h2>Expense Tracker</h2>
            <div>
                <ul className={classes.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li><button onClick={logoutHandler}>logout</button></li>
                </ul>
            </div>
        </nav>
    )
}
export default MainNavigation