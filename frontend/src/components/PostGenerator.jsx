import React, { useState } from 'react';
import axios from 'axios';

export default function PostGenerator() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/post`);
      setPost(response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button
        onClick={fetchPost}
        disabled={isLoading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isLoading ? '#ccc' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: isLoading ? 'not-allowed' : 'pointer'
        }}
      >
        {isLoading ? 'Генерация...' : 'Создать пост'}
      </button>
      {post && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{post.statement}</p>
          <p style={{ fontSize: '16px', color: '#333' }}>{post.explanation}</p>
          <img
            src={post.imageUrl}
            alt="Сгенерированный пост"
            style={{ width: '100%', marginTop: '20px', borderRadius: '10px' }}
          />
        </div>
      )}
    </div>
  );
}