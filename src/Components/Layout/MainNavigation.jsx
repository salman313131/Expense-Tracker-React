import classes from "./MainNavigation.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { authActions } from "../../Store/auth"
import { themeActions } from "../../Store/theme"
const MainNavigation=()=>{
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    const isPremiumUser = useSelector(state=>state.theme.isPremium)
    const premium = useSelector(state=>state.expense.totalExpense)
    const isPremium = Number(premium) >= 100
    const history = useHistory()
    const logoutHandler=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('local')
        dispatch(authActions.logout())
        history.replace('/login')
    }
    const premiumHandler=()=>{
        dispatch(themeActions.setPremium())
    }
    return(
        <nav className={classes.navbar}>
            <h2>Expense Tracker</h2>
            <div>
                <ul className={classes.list}>
                    <li>Home</li>
                    <li>About</li>
                    {isLoggedIn && <button className={classes.button} onClick={logoutHandler}>logout</button>}
                    {isLoggedIn && isPremium && !isPremiumUser && <button className={classes.button} style={{backgroundColor:'red'}} onClick={premiumHandler}>Premium</button>}
                </ul>
            </div>
        </nav>
    )
}
export default MainNavigation