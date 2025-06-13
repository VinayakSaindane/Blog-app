import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addPost } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, content };
    addPost(newPost);

    console.log("Post submitted:", newPost); // ✅ Correct logging

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={inputStyle}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post here..."
        required
        style={textareaStyle}
      ></textarea>
      <button type="submit" style={buttonStyle}>
        Add Post
      </button>
    </form>
  );
}

// Simple inline styles (or move to CSS)
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
};

const textareaStyle = {
  padding: "10px",
  fontSize: "16px",
  height: "100px",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default PostForm;
