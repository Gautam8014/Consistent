import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {

let mayLink=[
    {
        path:"/login",
        title: "Login"
    },
    {
        path:"/contact",
        title: "Contact"
    },  {
        path:"/products",
        title: "Products"
    },  {
        path:"/",
        title: "Home"
    },
]
let navStyle={
    backgroundColor: "blue",
    padding:"30px"

}
let linkStyle={
    color:"white",
    textDecoration:"none",
    marginRight: "60px"
}
  return (
    <div style={navStyle}>

        {
            mayLink.map((e)=>{
                return <Link to={e.path} style={linkStyle}>{e.title}</Link>
            })
            
        }
     
    </div>
  )
}
