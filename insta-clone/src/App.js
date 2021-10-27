import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
import { db } from "./firebase";
import firebase from "firebase";
import { Modal } from "@material-ui/core";

// 1:19:57

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState([]);
  const [close, setClose] = useState([]);

  useEffect(() => {
    db.collection("insta").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div>
          <h2>I am a modal</h2>
        </div>
      </Modal>
      <div className="app__header">
        <img
          classsName="app__headerImage"
          alt="Header picture"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          userimage={post.userimage}
        />
      ))}
    </div>
  );
}

export default App;
