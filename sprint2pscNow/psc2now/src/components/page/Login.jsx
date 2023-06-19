import React, { useState } from 'react'
import { useContext } from 'react';
import { Authcontext } from '../Context/Authentication';
import { Navigate } from 'react-router-dom';

export const Login = () => {
    const[email, setEmail]=useState("eve.holt@reqres.in");
    const[password, setPassword]=useState("cityslicka")

             
                 const {login, isAuth} =useContext(Authcontext)
    // console.log(email,password)
    let inputValue={
        email,
        password,
    }
 
     const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(" https://reqres.in/api/login",{ 
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(inputValue)
        })
        .then(res=>res.json())
        // .then(res => console.log(res));
         .then(res=>login(res.token));
     }

  if(isAuth){
    return <Navigate to="/"/>
  }



  return (
    <div>
   <form action=""  onSubmit={handleSubmit}>
    <input type="text" placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}} />
    <br />
    <input type="password" placeholder='password'  onChange={(e)=>{setPassword(e.target.value)}} />
    <br />
    <br />
    <input type="submit" />
   </form>

    </div>
  )
}
