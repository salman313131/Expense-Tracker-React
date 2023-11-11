import SignUpForm from './Components/Forms/SignUpForm'
import LoginForm from './Components/Forms/LoginForm'
import UpdateProfile from './Components/Forms/UpdateProfile'
import { Switch, Route, Redirect } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route path='/signup'>
        <SignUpForm />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Route path='/update'>
        <UpdateProfile />
      </Route>
      <Route path='*'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  )
}

export default App
