import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post._id}`);
  };

  return (
    <div className="post-card" onClick={handleClick}>
      <h3>{post.title}</h3>
      <h4>{post.content}</h4>
    </div>
  );
};


export default PostItem;
