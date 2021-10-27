import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
import { db } from "./firebase";
import firebase from "firebase";
import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//import Modal from '@mui/material/Modal';
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState([]);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
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

  const signUp = (event) => {

  }
  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
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

    <Button onClick={() => setOpen(true)}>Sign Up</Button>
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
