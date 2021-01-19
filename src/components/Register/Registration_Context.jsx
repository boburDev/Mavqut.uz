import React, { createContext, useContext, useEffect, useState } from 'react'
const Context = createContext()

const RegistrationProvider = ({children})=>{

    const [state, setState] = useState(localStorage.getItem("access_token"))
    useEffect(()=>{
        if (state) {
            // setState(state)
            window.localStorage.setItem('access_token', state)
        }else{
            window.localStorage.removeItem('access_token')
        }
    },[state])
    
    
        const value = {
            state,
            setState
        }
    return (
        <Context.Provider value={value}>
        <Context.Consumer>
            {
                ()=> children
            }
        </Context.Consumer>
        </Context.Provider>
    )
}

const useRegistration = (setterOnly) =>{
    const { state, setState } = useContext(Context)
    return setterOnly ? [setState] : [state,setState]
}

export {
    RegistrationProvider,
    useRegistration
}