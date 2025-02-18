import { createContext, useState } from "react";

export const mainContet= createContext<any>(null)

const ConstProvider = ({children}:any)=>{
    const [user, setUser]= useState<boolean>(false)
    const ConstData = {
        user,
        setUser
    }
    return(
        <mainContet.Provider value={ConstData}>
            {children}
        </mainContet.Provider>
    )
}
export default ConstProvider