import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/Contex';
import { Navigate } from 'react-router-dom';

export const Login = () => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("");
     const {login, isAuth}=useContext(AuthContext)



    // console.log(email,password)
    let inputValues={
        email,
        password
    }

  const handleSubmit=()=>{
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    })
      .then((res) => res.json())
      .then((res) => login(res.token));
  }
    if(isAuth){
       return <Navigate to= "/"/>
    }




  return (
    <div>
<input type="text" placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}} />
<br />
<input type="password" placeholder='password'  onChange={(e)=>{setPassword(e.target.value)}} />
<br />
<button onClick={handleSubmit}>Login</button>

    </div>
  )
}
