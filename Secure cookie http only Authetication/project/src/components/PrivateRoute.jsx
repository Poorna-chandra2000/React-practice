import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../features/auth/authSlice';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;