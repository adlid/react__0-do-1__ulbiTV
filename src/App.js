
import { useMemo, useState } from "react";
import Counter  from "./components/counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './App.css'
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setposts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Python', body: 'Is Awesome'},
    {id:3, title: 'C#', body: 'Good language'},
    {id:4, title: 'Delphi', body: 'Description'},
  ]);
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  

  const sortedPosts = useMemo(()=>{
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=>{
      return post.title.toLowerCase().includes(searchQuery)
    })
  },[searchQuery, sortedPosts])

  const createPost = (newPost) =>{
    setposts([...posts, newPost])
  }
  const removePost = (post)=>{
    setposts(posts.filter(item=>{
      return item.id !== post.id
    }))
  }
  const sortPosts=(sort)=>{
    setSelectedSort(sort)
   
  }
  return (
    <div className="container">
      <PostForm create={createPost} />
      <hr style={{margin:'15px 0'}} />
      <div>
        <MyInput
        value={searchQuery}
        onChange={e=>setSearchQuery(e.target.value)}
        placeholder="search"/>
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            {value:'title',name:'Name'},
            {value:'body',name:'description'},
          ]}
        />

      </div>
      {
        sortedAndSearchedPosts.length !==0 
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts }/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдена</h1>
      }
     
    </div>
  );
}

export default App;
