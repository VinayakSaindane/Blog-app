import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import { PostProvider } from "./context/PostContext";
import PostForm from "./components/PostForm";

function App() {
  return (
    <PostProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/create" element={<PostForm />} />
        </Routes>
      </Router>
    </PostProvider>
  );
}

export default App;