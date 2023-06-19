import { createContext } from "react";
import { useState } from "react";

export const Authcontext=createContext();



function AuthcontextProvider({children}){
    const [isAuth, setIsauth]=useState(false);
    const [token,setToken]=useState("")
    // console.log(token)

const login=(t)=>{
    setIsauth(true);
    setToken(t)

}
const logout =()=>{
    setIsauth(false)
}



    return <Authcontext.Provider value={{isAuth, token ,login,logout}}>{children}</Authcontext.Provider>
}
export default AuthcontextProvider;