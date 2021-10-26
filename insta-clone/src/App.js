import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [posts, setPosts] = useState([
    {
      username: "manvi0308",
      caption: "learning",
      userimage:
        "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      username: "manvi0308",
      caption: "learning",
      userimage:
        "https://images.unsplash.com/photo-1611434995348-6e9c012ed5d3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    },
    {
      username: "manvi0308",
      caption: "learning",
      userimage:
        "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);

  useEffect(() => {
    // this is where the code runs
    db.collection('insta').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data))
    })

  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <img
          classsName="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          userimage={post.userimage}
        />
      ))}
    </div>
  );
}

export default App;
