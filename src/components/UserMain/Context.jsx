import React, { createContext, useContext, useState } from 'react'
const Context = createContext()

const TypeProvider = ({children})=>{

    const [state, setState] = useState('Namaz')

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

const useCategory = (setterOnly) =>{
    const { state, setState } = useContext(Context)
    return setterOnly ? [setState] : [state,setState]
}

export {
    TypeProvider,
    useCategory
}