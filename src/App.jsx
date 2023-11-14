import SignUpForm from './Components/Forms/SignUpForm'
import LoginForm from './Components/Forms/LoginForm'
import UpdateProfile from './Components/Forms/UpdateProfile'
import Layout from './Components/Layout/Layout'
import DailyExpenses from './Components/Expenses/DailyExpenses'
import { Switch, Route, Redirect } from 'react-router-dom'
import ForgotPasword from './Components/Forms/ForgotPassword'
import { useSelector } from 'react-redux'
function App() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  return (
  <Layout>
    <Switch>
      <Route path='/signup'>
        <SignUpForm />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      {isLoggedIn && <Route path='/update'>
        <UpdateProfile />
      </Route>}
      <Route path='/forgot'>
        <ForgotPasword />
      </Route>
      <Route path='/expense'>
        <DailyExpenses />
      </Route>
      <Route path='*'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  </Layout>
  )
}

export default App
