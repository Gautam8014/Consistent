

import { useState } from "react";
import { useReducer } from "react";
import {reducer} from "./reducer";
function Counter () {
    // const[state, setState] = useState(1)
    // const increasefn= () => {
    // // alert("w")
    // setState(state+1)
    // }

    // const decreasefn= () => {
    //      //alert("w")
    //     setState(state-1)
    // }
   
    // const resetfn= () => {
    //    // alert("w")
    //     setState(0)
    // }
    const [state,dispatch] = useReducer(reducer, {count:0})
    
    return(
        <div>
            <h1>Counter  {state.count}</h1>
            <button onClick={() => {
                dispatch({
                    type: "+increase"
                })
            }}>Increase</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => {
                dispatch({
                    type: "-decrease"
                })

            }} disabled={state.count===0}>Decrease</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => {
                dispatch({
                    type: "0reset"
                })
            }}>Reset</button>
        </div>
        
    )
        }
export default Counter;


