import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
let link=[
    {
        path:"/",
        title:"Home"
    },
    {
        path:"/product",
        title:"Product"
    },
    {
        path:"/about",
        title:"yashi"
    },
    {
        path:"/login",
        title:"Login"
    }
]

var navStyle = {
    backgroundColor: "black",
    padding: "20px",
    textAlign: "Center",
  };
  var lStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "50px",
  };

  return (
    <div style={navStyle}>
    
        {
          link.map((e)=>{
            return(
                <Link key={e.path} to={e.path} style={lStyle} >{e.title}</Link>

            )
          })  
        }

    </div>
  )
}
