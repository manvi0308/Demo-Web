import "./App.css";
import Post from "./Components/Post/Post";
import React, { useState, useEffect } from "react";
/* 
Collection is a group of documents/docs
Every Post is a document/docs in Firebase
*/
import { db } from './Firebase';
function App() {
  const [posts, setPosts] = useState([
    {
      username: "manvi0308",
      caption: "Learning through props",
      imageUrl:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    },
    {
      username: "ritu94",
      caption: "Ritu Chaddha",
      imageUrl:
        "https://media.istockphoto.com/photos/view-of-midwestern-house-in-late-afternoon-in-autumn-with-flowers-and-picture-id1330821551?b=1&k=20&m=1330821551&s=170667a&w=0&h=AaIlkaRbfjgdUmbTH8L2KGPGTWBs5zihMY6CzjXFdtk=",
    },
    {
      username: "mayank",
      caption: "Adarsh Auto House",
      imageUrl:
        "https://media.istockphoto.com/photos/modern-gadgets-in-interior-of-coworking-office-during-covid19-picture-id1284066336?b=1&k=20&m=1284066336&s=170667a&w=0&h=TMgnF3hn1Dv3qC4Y1yG-9FDI7lGSbulbhHDq7BizQz4=",
    },
  ]);

  // useEffect runs a piece of code based on a specific conditions
  useEffect(() =>{
    // this is where the code runs
    // every single time a document is added, snapshot fires and updates the UI
    db.collection('insta').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data() ))
      // doc.data will give the caption, name and the imageURL
      // or in simple words the columns of the database
    })
  }, [posts])
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {
        /*& Looping through the posts using the state */
        posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      }
    </div>
  );
}

export default App;
