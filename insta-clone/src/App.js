import React from "react";
import Post from "./Post";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          classsName="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>
      <Post
        username="manvi0308"
        caption="learning"
        userimage="https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Post
        username="manvi0308"
        caption="learning"
        userimage="https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Post
        username="manvi0308"
        caption="learning"
        userimage="https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  );
}

export default App;
