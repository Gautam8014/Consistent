import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import { Flex, Spacer } from '@chakra-ui/react'

export const Nav = () => {

    let mylink=[
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Products",
            path: "/products"
        },
        {
            title: "Login",
            path: "/login"
        },
    ]
  return (
    <Flex color='blue' bg={"yellow"} justifyContent={"space-between"}>
   {
    mylink.map((e)=>(<RouterLink key={e.path} to={e.path}>{e.title}</RouterLink>))
   }

    </Flex>
  )
}
