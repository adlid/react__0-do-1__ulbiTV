
import { useMemo, useState } from "react";
import Counter  from "./components/counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './App.css'
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setposts] = useState([
    {id:1, title: 'Javascript is good', body: 'Description'},
    {id:2, title: 'Python', body: 'Is Awesome'},
    {id:3, title: 'C#', body: 'Good language'},
    {id:4, title: 'Delphi', body: 'Description'},
  ]);
  const [filter, setfilter] = useState({sort:'', query:''})

  

  const sortedPosts = useMemo(()=>{
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=>{
      return post.title.toLowerCase().includes(filter.query)
    })
  },[filter.query, sortedPosts])

  const createPost = (newPost) =>{
    setposts([...posts, newPost])
  }
  const removePost = (post)=>{
    setposts(posts.filter(item=>{
      return item.id !== post.id
    }))
  }

  return (
    <div className="container">
      <PostForm create={createPost} />
      <hr style={{margin:'15px 0'}} />
      <PostFilter filter={filter} setFilter={setfilter}/>
      {
        sortedAndSearchedPosts.length !==0 
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts }/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдена</h1>
      }
     
    </div>
  );
}

export default App;
