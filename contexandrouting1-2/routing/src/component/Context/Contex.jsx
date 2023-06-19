

import { createContext, useState } from "react";

export const AuthContext= createContext()



function AuthContextProvider({children}){
const[isAuth, setIsAuth]= useState(false)
const[token, setToken]=useState("");


const login=(tok)=>{
    setIsAuth(true)
    setToken(tok)
}
const logout=()=>{
    setIsAuth(false)
    
}




    return <AuthContext.Provider value={{isAuth,token, login,logout}} >
{children}
    </AuthContext.Provider>


}
export default AuthContextProvider;