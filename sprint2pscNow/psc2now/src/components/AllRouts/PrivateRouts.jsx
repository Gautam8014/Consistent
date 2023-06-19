import React from 'react'
import { useContext } from 'react'
import { Authcontext } from '../Context/Authentication'
import { Navigate } from 'react-router-dom'

export const PrivateRouts = ({children}) => {
    const {isAuth}=useContext(Authcontext)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
  return children
}
