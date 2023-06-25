import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Home } from '../Components/Page/Home'
import { Product } from '../Components/Page/Product'
import { Singleproduct } from '../Components/Page/Singleproduct'
import { About } from '../Components/Page/About'
import { Login } from '../Components/Page/Login'

export const Allrouts = () => {
  return (
    <div>

        <Routes>


 <Route  path="/"  element={<Home/>}></Route> 
 <Route  path="/products"  element={<Product/>}></Route>
 <Route path="/product/:id"  element={<Singleproduct/>}></Route>
 <Route  path="/about"  element={<About/>}></Route>    
 <Route  path="/login"  element={<Login/>}></Route>       
        </Routes>
    </div>
  )
}
