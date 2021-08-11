
import { useState } from "react";
import Counter  from "./components/counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
  const [posts, setposts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Javascript', body: 'Is Awesome'},
    {id:3, title: 'Javascript', body: 'Good language'},
    {id:4, title: 'Javascript', body: 'Description'},
  ]);
  console.log()
 const addNewPost = (e) =>{
  e.preventDefault()
  
  const newPost = {
    id: Date.now(),
    title,
    body
  }
  console.log(newPost)
  setposts([...posts,{...post, id:Date.now()}])
  setpost({title: '', body:''})
 }
  return (
    <div >
      
      <PostList posts={posts }/>
    </div>
  );
}

export default App;
