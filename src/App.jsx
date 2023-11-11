import SignUpForm from './Components/Forms/SignUpForm'
import LoginForm from './Components/Forms/LoginForm'
import UpdateProfile from './Components/Forms/UpdateProfile'
import Layout from './Components/Layout/Layout'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from './Store/authContext'
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
      <Route path='*'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  </Layout>
  )
}

export default App
