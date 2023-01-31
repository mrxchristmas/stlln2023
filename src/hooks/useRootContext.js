// import { AuthContext } from "../context/AuthContext";+
import { RootContext } from "../context/RootContext";
import { useContext } from "react";

export const useRootContext =()=>{
    const context = useContext(RootContext)

    if(!context){
        throw Error('useRootContext must be inside an AuthContextProvider')
    }

    return context
}