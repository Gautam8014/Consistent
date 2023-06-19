import React, { useContext } from 'react'
import { AuthContext } from '../Context/Contex'
import { Navigate } from 'react-router-dom'

export const Home = () => {
     const {token ,isAuth, logout}=useContext(AuthContext)

     if(!isAuth){
      return <Navigate to="/login"/>
     }
  return (
    <div>
        <h1>Token : {token}</h1>
        <button onClick={()=>{logout()}}>Logout</button>
    </div>
  )
}
