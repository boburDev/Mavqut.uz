import { createContext, useContext, useState } from 'react'
const Context = createContext()

const SideBarProvider = ({children})=>{

    const [state, setState] = useState({
        index:'main'
    })

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

const useSideBar = (setterOnly) =>{
    const { state, setState } = useContext(Context)
    return setterOnly ? [setState] : [state,setState]
}

export {
    SideBarProvider,
    useSideBar
}