import React, { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const addPost = async (newPost) => {
    const res = await fetch("http://localhost:5002/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    const data = await res.json();
    setPosts((prevPosts) => [...prevPosts, data]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
