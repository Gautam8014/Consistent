import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export const Products = () => {

    const[state, setState]=useState([])
    const[page, setPage]= useState(1)
    const[searchParam, setSearchparam]= useSearchParams()
    const[sort, setSort]=useState("")
    const[total,setTotal]=useState(1)
  
// console.log(total.length)
    useEffect(()=>{
        getData();
    },[page, sort])
    let limit=5;
    // limit and element
    let ele=(total.length)
     let totalpage= Math.ceil(ele/limit)
     console.log(totalpage)

    const getData= async()=>{

        let url=`http://localhost:8080/products?_page=${page}&_limit=${limit}`
        if(sort==="high"){
            url+="&_sort=price&_order=desc"
        }  if(sort==="low"){
            url+="&_sort=price&_order=asc"

        }
   let res= await fetch(url);
   let data= await res.json();
   setState(data)
  
  
    }
    useEffect(()=>{
     let paramObj={page}
     setSearchparam(paramObj)

    },[page,sort])


    useEffect(()=>{
        length()
    },[])
    const length=async()=>{
        let url=`http://localhost:8080/products`
        let res= await fetch(url);
   let data= await res.json();
   setTotal(data)

    }


  return (
    <div>
        <select name="" id="" onChange={(e)=>{setSort(e.target.value)}}>
            <option value="">--</option>
            <option value="high">hightTolow</option>
            <option value="low">Lowtohigh</option>
        </select>

    <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>

        {
            state?.map((e)=>{
                return <div key={e.id}>
                    <img src={e.image} alt="" width={200} height={200} />
                    <p>{e.price}</p>
                    <h2>{e.id}</h2>
                    <Link to={`/products/${e.id}`}>more detais</Link>
                </div>
            })
        }
        </div>
        <button disabled={page===1} onClick={()=>{setPage(page-1)}}>prev</button>
        <button>{page}</button>
        <button disabled={page===totalpage} onClick={()=>{setPage(page+1)}}>next</button>
    </div>
  )
}
