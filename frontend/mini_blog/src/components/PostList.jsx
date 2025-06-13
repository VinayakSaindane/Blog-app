import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import PostItem from './PostItem';

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;