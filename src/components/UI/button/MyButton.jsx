import React from 'react'
import c from './MyButton.module.css'
export default function MyButton({children, ...props}) {
    
    return (
        <button {...props} className={c.myBtn}>
            {children}
        </button>
    )
}
