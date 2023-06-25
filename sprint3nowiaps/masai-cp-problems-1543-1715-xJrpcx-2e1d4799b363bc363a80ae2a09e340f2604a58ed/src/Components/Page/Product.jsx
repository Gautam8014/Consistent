import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Box } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'
const initialState={
products:[],
loading:false,
error:null,
}


const reducer=(state, action)=>{

  switch(action.type){

case "loadingtrue" :
  return{
    ...state,
    loading:true,
    error: null

}
case "fetchSuccess" : 
return {
  
  ...state,
  products:action.payload,
  loading:false,
  error:null,
  
}
case "fetchfailuar" :
  return{
  ...state,
  error:action.payloady
}


    default:
      throw Error("invalid action");
  }

}
export const Product = () => {
// const[state, setState]=useState([])

const[state, dispatch]=useReducer(reducer, initialState);
const{products, loading,error}=state;


console.log(state)
useEffect(()=>{
getData();
},[])
const getData=()=>{

  //loading true
  dispatch({type: "loadingtrue"})

  axios.get("http://localhost:8080/products").then((res)=>{
console.log(res.data)
dispatch({type: "fetchSuccess", payload:res.data })
  }).catch((error)=>{
    dispatch({type: "fetchfailuar" , payload: error.msg})
  })

  


}

if(loading){
  return(
    <div>
loading........;
    </div>
  )
  }

 

  return (
    <Box  bg='tomato' w='100%' p={4} color='white'>

   
{
  products.map((e)=>(
    <ProductCard e={e}/>
  ))
}
    </Box>
  )
}
