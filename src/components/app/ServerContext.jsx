import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext()

const ServerProvider = ({children}) => {

    const [state,setState] = useState()

    const isTester = false
    
    useEffect(()=>{
        const server = {
            server_dev: "http://localhost:8080",
            server_dep: "https://gentle-plains-28872.herokuapp.com"
        }
        if (isTester) {
            setState(server.server_dev)
        } else {
            setState(server.server_dep)
        }
    },[isTester])

    const value = {
        state,
        setState
    }
    return (
        <Context.Provider value={value}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

const useServer = (setterOnly) => {
    const { state, setState } = useContext(Context)
    return setterOnly ? [setState] : [state, setState]
}

export {
    ServerProvider,
    useServer
}