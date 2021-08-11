import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts}) {
    return (
        <div>
             <h1>Список постов</h1>
            {
                posts.map((post, index)=>{
                return <PostItem number={ index + 1 } post={post} key={post.id}/>
                })
            }
        </div>
    )
}
