import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './app/store';
import Login from './components/Login';
import Posts from './components/Posts';
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/posts" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;