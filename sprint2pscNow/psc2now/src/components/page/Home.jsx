import React from 'react'
import { useContext } from 'react'
import { Authcontext } from '../Context/Authentication'
import { Navigate } from 'react-router-dom'

export const Home = () => {
    const {token ,isAuth ,logout}=useContext(Authcontext)


    if(!isAuth){
      return <Navigate to="/login"/>
    }
    
  return (
    <div>
        {
            isAuth? ( <div>
                <h1>token :{token}</h1>
                 <button onClick={logout}>Logout</button>
            </div>
            ) : "please log in"
        }
    </div>
  )
}
