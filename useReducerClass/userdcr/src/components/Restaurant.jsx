import React, { useState } from 'react'

import { useReducer } from 'react'
import axios from "axios"


const initialState={
data :[],
loading: false,
error: false,
}
const reducer=(state , action)=>{
    console.log(action)

    switch(action.type){

        case "FETCH_LOADING" : {
            return {
                ...state,
                data: [],
                loading : true,
                error: false
            };
        }
            case  "FETCH_SUCCESSS" : {
                return {
                    ...state,
                    data: action.payload,
                    loading : false,
                    error: false
                }
            };
            case "FETCH_ERROR": {
                return {
                    ...state,
                    data: [],
                    loading : false,
                    error: true
                };
            }
                
        


        default:
             throw new Error("invalid action type")
    }

}


export const Restaurant = () => {
const[state, dispatch]= useReducer(reducer, initialState)


const getData=()=>{
    dispatch({type: "FETCH_LOADING"})
    axios.get("http://localhost:8080/restaurants").then((res)=>{
        dispatch({type: "FETCH_SUCCESSS" ,  payload: res.data})
        console.log(res);
        console.log(res.data);
    }).catch((error)=>{
        dispatch({type: "FETCH_ERROR"})
    })

}

useState(()=>{
    getData()
},[])



console.log(state);
const{data, error, loading}=state;


if(loading){
    return <h1>Loading....</h1>
}
if(error){
    return <h1>something went erong</h1>
}


  return (
    <div>
        <h1>Restaurent</h1>
    <div style={{display: "grid" , gridTemplateColumns : "1fr 1fr 1fr "}}>
        
  {
    data.map((e)=>(
        
        <div>

            
            <h1>{e.name}</h1>
            <img src={e.image} alt="" />
            <h3>{e.type}</h3>

        </div>
    ))
  }

    </div>
    </div>
  )
}
