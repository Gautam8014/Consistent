import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
export const Singleproduct = () => {
const[state, setState]=useState({});
const {id}=useParams();
console.log(state)
useEffect(()=>{
  getData();
  },[])




  const getData=()=>{
  axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
  console.log(res.data)
  setState(res.data)
  })
  
    
  
  
  }

  return (
    <div>
      {
        <div>
          <img src={state.image} alt="" />
          <p>{state.description}</p>
          <h2>{state.category}</h2>
        </div>
      }
    </div>
  )
}
