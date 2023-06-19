import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const Product = () => {
  const [state,setState]=useState([]);
  const[page, setPage]=useState(1)
   let [searchParam, setSearchparam]=useSearchParams()
// console.log(state)

  useEffect(()=>{
    getData()
  },[page])

  const getData= async()=>{

    let res= await fetch( `http://localhost:8080/products?_page=${page}&_limit=5`)
    let data = await res.json();
    setState(data)
  }
useEffect(()=>{
  let paramObj={page}
  setSearchparam(paramObj)

},[page])





  return (
    <div>
    <div  style={{display: "grid" ,gridTempateColom: "1fr 1fr 1fr"}}>
{
  state?.map((e ,i)=>{
    return <div key={i} >
   
      <img src={e.image} alt="" width="200" />
      <p>{e.title}</p>
      <p>{e.price}</p>
      
   
    </div>

  })
}


    </div>
    <button disabled={page===1} onClick={()=>{setPage(page-1)}} >prev</button>
    <button>{page}</button>
    <button  onClick={()=>{setPage(page+1)}}>next</button>
    </div>
  )
}
