import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function PostForm({create}) {
    const [post, setpost] = useState({title: '', body:''})
    const addNewPost =(e)=>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setpost({title:'', body: ''})
    }
    return ( 
        <div> 
            <form>
                <MyInput value={post.title} onChange={e=>setpost({...post, title:e.target.value})} placeholder="name of the post"/>
                <MyInput value={post.body} onChange={e=>setpost ({...post, body:e.target.value})} placeholder="description"/>
                <MyButton onClick={addNewPost}> Create new Post</MyButton>
             
            </form>
        </div>
      
    )
}

export default PostForm

