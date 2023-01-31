import { createContext,  useReducer, useState } from "react";

export const RootContext = createContext()

export const rootReducer =(state, action)=>{
    switch (action.type) {
        case 'SET_HUE' :
            return { ...state, hue: action.payload }
            
        default:
            return state
    }
}



export const RootContextProvider =({children})=>{

    const [state, dispatch] = useReducer(rootReducer, {
        hue: 0,
    })

    // console.log(state)


    return (
        <RootContext.Provider value={{ ...state, dispatch }}>
            { children }
        </RootContext.Provider>
    )
}