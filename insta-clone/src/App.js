import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
import { db, auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Modal, Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
require("firebase/auth");

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);

  // The below is what checks if you are logged in or not, and keeps you logged in on refresh
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user has logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // if user has logged out...
        setUser(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [user, username]);
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

  // Handles the entire signup process
  const signUp = (event) => {
    // to prevent refresh
    event.preventDefault();

    // handles the user authentication from firebase
    // email and password are from state
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        return authuser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    // close the signup modal
    setOpen(false);
  };

  // Handles the sign in password
  const signin = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    // close the modal
    setOpenSignIn(false);
  };
  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                classsName="app__headerImage"
                alt="Header picture"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              ></img>
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          classsName="app__headerImage"
          alt="Header picture"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>
      {/*! Login and signup button, this is just a fancy if else loop*/}
      {
        user? (
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ): (<Button onClick={() => setOpen(true)}>Sign Up</Button>)
      }
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
