import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={props.username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{props.username}</h3>
      </div>
      <img className="post__image" src={props.userimage}></img>
      <h4 className="post__text">
        {props.username}: {props.caption}
      </h4>
    </div>
  );
}

export default Post;
