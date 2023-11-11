import React, { useState } from 'react'
const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthProvider=(props)=>{
    const istoken = localStorage.getItem('token')
    const [token,setToken] = useState(istoken)
    const loggedIn = !!token
    const loginHandler=(token)=>{
        setToken(token)
    }
    const logoutHandler=()=>{
        setToken()
    }
    const authContext = {
        token:token,
        isLoggedIn: loggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return(
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    )
}
export default AuthContext