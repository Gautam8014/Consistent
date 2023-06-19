import React from 'react'

import { Route,Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { Product } from './page/Product'
import { About } from './page/About'
import { Login } from './page/Login'
import { Single } from './page/Single'
import { PrivateRoutes } from './PrivateRoutes'

export const AllRouts = () => {
  return (
   <Routes>
  <Route  path='/' element={<Home/>}></Route>
  <Route  path='/product' element={<Product/>}></Route>
  <Route  path='/about' element={<PrivateRoutes><About/></PrivateRoutes>}></Route>
  <Route  path='/login' element={<Login/>}></Route>
  <Route  path='/product/:id' element={<Single/>}></Route>


   </Routes>
  )
}
