import { createContext } from "react";
import { useState } from "react";   

export const UserContext = createContext("");
export const UserProvide = ({children}) => {
    const [user,setuser] =useState("");
    const obj = {
        user,setuser
    }
    return(
        <UserContext value={obj}>
            {children}
        </UserContext>
    )
}