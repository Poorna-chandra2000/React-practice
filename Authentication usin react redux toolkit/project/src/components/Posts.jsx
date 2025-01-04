import { useGetAllPostsQuery } from '../features/api/apiSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import CreatePost from './CreatePost';

const Posts = () => {
  const { data: posts, error, isLoading } = useGetAllPostsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    toast.info('Logged out successfully');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div className="posts-container">
      <div className="header">
        <h1>Posts</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <CreatePost />
      <div className="posts-grid">
        {posts?.data?.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.author && (
              <p className="author">By: {post.author.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;