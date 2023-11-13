import classes from "./MainNavigation.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { authActions } from "../../Store/auth"
const MainNavigation=()=>{
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    const history = useHistory()
    const logoutHandler=()=>{
        localStorage.removeItem('token')
        dispatch(authActions.logout())
        history.replace('/login')
    }
    return(
        <nav className={classes.navbar}>
            <h2>Expense Tracker</h2>
            <div>
                <ul className={classes.list}>
                    <li>Home</li>
                    <li>About</li>
                    {isLoggedIn && <button className={classes.button} onClick={logoutHandler}>logout</button>}
                </ul>
            </div>
        </nav>
    )
}
export default MainNavigation