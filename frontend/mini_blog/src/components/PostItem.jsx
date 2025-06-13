import React from "react";
import "./PostItem.css";

const PostItem = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;
