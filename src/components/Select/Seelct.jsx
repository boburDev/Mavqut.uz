import React, { useContext, useState, createContext } from 'react'
import cc from 'classnames'
import './Select.css'

const Context = createContext()

export const Select = ({ children, defaultValue, onSelect }) => {

    const [currentValue,setCurrentValue] = useState(defaultValue)
    const [placeholder,setPlaceholder] = useState('Choose')
    const [opened,setOpened] = useState(false)

    const value = {
        currentValue,
        setCurrentValue,
        onSelect,
        setPlaceholder,
        opened,
        setOpened,
    }

    return (
    <Context.Provider value={value}>
        <Context.Consumer>
           {
           () => (
            <div
                tabIndex={0}
                className={cc({ select: true, active: opened})}
                onBlur={
                    () => setOpened(false)
                }
            >
                <div className="picker"
                onClick={()=> setOpened(!opened)}
                >
                    <p className="picker-text">{placeholder}</p>
                    <span className="top-piker"><span className="bottom-piker"></span></span>
                </div>
                <ul className="options">
                    {children}
                </ul>
            </div>
           )
           }
        </Context.Consumer>
    </Context.Provider>
    )
}


export const Option = ({ children, value, placeholder}) => {

    const { currentValue,setCurrentValue, onSelect, setPlaceholder, setOpened } = useContext(Context)
    return (
    <>
       <li
        className={currentValue === value ? 'selected' : null}
        onClick={ e => {
            setCurrentValue(value)
            setPlaceholder(placeholder)
            setOpened(false)
            if(onSelect){
                onSelect(value,placeholder)
            }
        }}
        >
           {children}
        </li>
    </>
        )
}