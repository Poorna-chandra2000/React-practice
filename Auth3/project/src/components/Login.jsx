import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useLoginMutation } from '../features/api/apiSlice';
import { setCredentials } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials(userData));
     // console.log(userData.data.refreshToken);
      toast.success('Login successful!');
      navigate('/posts');
    } catch (err) {
      toast.error('Failed to login');
    }
  };

  // const selector=useSelector((state) => state.auth.token2);
  // console.log(selector);

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;