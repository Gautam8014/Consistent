import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Home } from '../page/Home'
import { Contact } from '../page/Contact'
import { Products } from '../page/Products'
import { Login } from '../page/Login'
import { SingleProduct } from '../page/SingleProduct'
import { NotfoundPage } from '../page/NotfoundPage'
import { PrivateRouts } from './PrivateRouts'

export const AllRouts = () => {  
  return (
    <div>
<Routes>
<Route  path='/' element={<Home/>}></Route>
<Route  path='/contact' element={<Contact/>}></Route>
<Route  path='/products' element={<PrivateRouts><Products/></PrivateRouts>}></Route>
<Route  path='/login' element={<Login/>}></Route>
<Route  path='/products/:id' element={<SingleProduct/>}></Route>
<Route  path='*' element={<NotfoundPage/>}></Route>

</Routes>



    </div>
  )
}
