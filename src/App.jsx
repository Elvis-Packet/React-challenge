// src/App.js
import React, { useState, useEffect } from 'react';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading
  const [error, setError] = useState(null); // New state for error

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty array means this effect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts: {error.message}</div>;

  return (
    <div className="App">
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
