import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE ={
    user:JSON.parse(localStorage.getItem('user')) || null,
    isFetching:false,
    error:false
}
export const myContext = createContext(INITIAL_STATE)

export const ContextProvider = ({children})  => {
   const [state, dispatch] = useReducer(Reducer,INITIAL_STATE)

   useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
   },[state.user])

   return(
    <myContext.Provider value = {{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch
    }}>
       {children}

    </myContext.Provider>
   )

}





































/* import { createContext, useReducer } from "react"
import Reducer from "./Reducer"

const INITIAL_STATE = {
    user:null,
    isFetching:false,
    error:false
}

 export const myContext = createContext(INITIAL_STATE)

 export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    return(
        <myContext.Provider 
          value = {{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
          }}
        >
            {children}
        </myContext.Provider>
    )

 } */