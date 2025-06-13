import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../components/PostList";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="blog-container">
        <header className="blog-header">
          <h1>📝 Mini Blog</h1>
          <p>Share your thoughts with the world</p>
          <button className="create-post-button" onClick={() => navigate("/create")}>
            + Create New Post
          </button>
        </header>

        <section className="blog-posts-section">
          <h2>All Posts</h2>
          <PostList />
        </section>
      </div>
    </div>
  );
}

export default Home;
