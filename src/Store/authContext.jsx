import React, { useState } from 'react'
const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    localId:'',
    login:(token)=>{},
    logout:()=>{},
    localIdSet:(id)=>{}
})

export const AuthProvider=(props)=>{
    const istoken = localStorage.getItem('token')
    const islocalId = localStorage.getItem('local')
    const [token,setToken] = useState(istoken)
    const [localId,setLocalId] = useState(islocalId)
    const loggedIn = !!token
    const loginHandler=(token)=>{
        setToken(token)
    }
    const logoutHandler=()=>{
        setToken('')
        setLocalId('')
    }
    const localIdHandler=(id)=>{
        setLocalId(id)
    }
    const authContext = {
        token:token,
        isLoggedIn: loggedIn,
        localId:localId,
        login: loginHandler,
        logout: logoutHandler,
        localIdSet: localIdHandler
    }
    return(
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    )
}
export default AuthContext