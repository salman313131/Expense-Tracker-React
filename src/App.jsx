import SignUpForm from './Components/Forms/SignUpForm'
import LoginForm from './Components/Forms/LoginForm'
import UpdateProfile from './Components/Forms/UpdateProfile'
import Layout from './Components/Layout/Layout'
import DailyExpenses from './Components/Expenses/DailyExpenses'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from './Store/authContext'
import ForgotPasword from './Components/Forms/ForgotPassword'
import { useContext } from 'react'
function App() {
  const authCtx = useContext(AuthContext)
  return (
  <Layout>
    <Switch>
      <Route path='/signup'>
        <SignUpForm />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      {authCtx.isLoggedIn && <Route path='/update'>
        <UpdateProfile />
      </Route>}
      <Route path='/forgot'>
        <ForgotPasword />
      </Route>
      {authCtx.isLoggedIn && <Route path='/expense'>
        <DailyExpenses />
      </Route>}
      <Route path='*'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  </Layout>
  )
}

export default App
