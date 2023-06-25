import React from 'react'
import { Link } from 'react-router-dom'
export const ProductCard = ({e}) => {
  return (
    <div>
<div>
      <img src={e.image} alt="" height="200" width="200"/>
      <p>{e.title}</p>
      <p>{e.price}</p>
      <p>{e.id}</p>
      
<Link to={`/product/${e.id}`}><h2>More Details</h2></Link>
    </div>
    </div>
  )
}
