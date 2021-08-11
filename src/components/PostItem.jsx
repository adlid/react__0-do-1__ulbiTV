import React from 'react'
import c from '../Styles/PostItem.module.css'
import MyButton from './UI/button/MyButton'
export default function PostItem(props) {
    return (
        <div className={c.post}>
            <div className={c.post__content}>
                <strong> {props.number} {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>

            </div>
            <div className={c.post__btn}>
                <MyButton onClick={()=>{props.remove(props.post)}}>Delete</MyButton>
            </div>
        </div>
    )
}

