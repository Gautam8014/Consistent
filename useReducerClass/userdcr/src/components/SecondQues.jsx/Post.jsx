// import React from 'react'
// import { useReducer } from 'react'
// import {useState, useEffect} from "react"




// const initialState ={
//     post : [],
//     loading: "",
//     error: false
// };

// const reducer=(state, action)=>{
// console.log(action);


// switch(action.type){
//     case "FETCH_LOADING" : {
//         return {
//             ...state,
//             loading : true,
//             data: [],
//             // error : false,
//         };

//     }
//     case "FETCH_SUCCESS" :{
//         return {
//             ...state,
//             loading : false,
//             data: action.payload,
//             // error : false,
//         };
//     } 
//     // case "FETCH ERROR":{
//     //     return {
//     //         ...state,
//     //         loading : false,
//     //         data: [],
//     //         error : true,
//     //     };

//     // }
//     default :
//     throw new Error("action is invalid")

//     }
// }

// export const Post = () => {

//     // const [ data, setdata]= useState([]);
//     // const[loading , setLoading]= useState("")

// const [state, dispatch] =useReducer(reducer , initialState)

// useEffect(()=>{
//     getData();
// },[])
// const getData= async()=>{
// //setLoading(true);



//   let res= await fetch("https://fakestoreapi.com/products")
//   let data = await res.json();
//   dispatch({type: "FETCH_SUCCESS" , payload: data})
// }
//    const {data , loading}= state;

//   return (
//     <div>Post</div>
//   )
// }



import React, { useEffect, useReducer, useState } from "react";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    throw Error("Something wrong happended");
  }
};

// inital state
const initalState = {
  posts: [],
  loading: false,
  error: false
};

// reducer function
const reducer = (state, action) => {
  // console.log(state);
  // console.log(action);

  switch (action.type) {
    case "FETCH_LOADING": {
      return {
        ...state,
        loading: true,
        error: false,
        posts: []
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
        posts: []
      };
    }

    default:
      throw new Error("Action type is invalid");
  }
};

function Posts() {
  // usestate --> import usestate
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState([]);
  // const [Error, setError] = useState([]);
  const [state, dispatch] = useReducer(reducer, initalState);

  const getDataFromApi = (url) => {
    // setLoading(true);
    dispatch({ type: "FETCH_LOADING" });
    getData(url)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res });
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  useEffect(() => {
    getDataFromApi("https://jsonplaceholder.typicode.com/posts");
  }, []);

  console.log(state);
  const { posts, loading, error } = state;
  console.log(posts);

  return <div>{/* map this  */}</div>;
}

export default Posts;
