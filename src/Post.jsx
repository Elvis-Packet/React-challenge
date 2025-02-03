// src/Post.js
import React, { useState } from 'react';

function Post({ post }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleLike}>Like {likes}</button>
    </div>
  );
}

export default Post;
