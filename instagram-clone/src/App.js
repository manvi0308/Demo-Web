import "./App.css";
import React, {useState, useEffect} from 'react'
import Post from "./Post";
import { db } from "./firebase";

function App()
{
    const [posts, setPosts] = useState([]);


//& useEffect runs a piece of code based on a specific conditions
useEffect(() => {
  // this is where the code runs
  // every single time a document is added, snapshot fires and updates the UI
  // insta is the name of the collection
  db.collection("insta").onSnapshot((snapshot) => {
    setPosts(snapshot.docs.map(doc => doc.data()));
}, [post]);
  return (
    <div className="App">
      <div className="App__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {
        posts.map(({id, post}) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  )
}
};

export default App;
