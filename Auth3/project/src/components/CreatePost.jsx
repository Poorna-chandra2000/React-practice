import { useState } from 'react';
import { useCreatePostMutation } from '../features/api/apiSlice';
import { toast } from 'react-toastify';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createPost] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content }).unwrap();
      setTitle('');
      setContent('');
      toast.success('Post created successfully!');
    } catch (err) {
      toast.error('Failed to create post');
    }
  };

  return (
    <div className="create-post-form">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;