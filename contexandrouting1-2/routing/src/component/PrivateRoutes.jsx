import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './Context/Contex'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
  const {isAuth}= useContext(AuthContext);

  if(!isAuth){
    return <Navigate to="/login"/>
  }
  return children
    
  
}
