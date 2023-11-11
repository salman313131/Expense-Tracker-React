import React, { useState } from 'react'
const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthProvider=(props)=>{
    const [token,setToken] = useState('')
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