import React from 'react'
import { useReducer } from 'react'



const initialState=0;
const reducer=(state , action)=>{

console.log(state,action);

// if(action.type==="INCREMENT_COUNT"){
//     return state+1

// }
// if(action.type==="DECREMENT_COUNT"){
//    return  state-1
// }
// if(action.type==="RESET_COUNT"){
//     return  initialState
//  }



switch(action.type){
    case "INCREMENT_COUNT" :
        return state+1;

case "DECREMENT_COUNT" :
    return state-1

case "RESET_COUNT" :
    return initialState

 
   default :
    throw new Error("action type is not valied")


}
}

export const Counter1 = () => {
// manage state using useReducr

const [state , dispatch] =useReducer(reducer , initialState)

const handleAdd=()=>{

    //dispatch ("call some action")
    dispatch({type: "INCREMENT_COUNT"});
}

 const handleSub=()=>{
    dispatch({type: "DECREMENT_COUNT"});
 }
 const handleReset=()=>{
    dispatch({type: "RESET_COUNT"});
 }


  return (
    <div>
<h1>counter : {state}</h1>
<button  onClick={handleAdd}>add 1</button>
<button disabled={ state===0} onClick={handleSub}>sub 1</button>
<button onClick={handleReset}>reset</button>

    </div>
  )
}
