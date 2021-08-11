import React from 'react'
import c from './MyInput.module.css'
export default function MyInput(props) {
    return (
       
            <input className={c.input} {...props}/>
        
    )
}
