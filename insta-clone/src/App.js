import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
import { db } from "./firebase";
import firebase from 'firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('insta').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
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