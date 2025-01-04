import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/auth/authSlice';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectCurrentToken);
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;