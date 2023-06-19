import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"

export const SingleProduct = () => {
  const[state, setState]=useState({})
  const{id}=useParams();


  console.log(state)

  useEffect(()=>{
      getData();
  },[])


  const getData= async()=>{

      let url=`http://localhost:8080/products/${id}`
 let res= await fetch(url);
 let data= await res.json();
 setState(data)


  }
  return (
    <div>
        {
            
                 <div >
                    <img src={state.image} alt="" width={200} height={200} />
                    <p>{state.price}</p>
                    <h2>{state.id}</h2>
                    <h4>{state.category}</h4>
                 
                </div>
          
        } 
    </div>
  )
}
