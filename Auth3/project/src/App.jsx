import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import Posts from './components/Posts';
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {refreshAuthToken} from "./features/auth/authSlice.js";
import {useEffect} from "react";

function App() {

    const isAuthenticated=useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    // if(authenticated) {
    //     setTimeout(()=> {
    //         dispatch(refreshAuthToken(),2000);
    //     })
    //
    // }


    useEffect(() => {
        let timeout;
        if (isAuthenticated) {
            timeout = setTimeout(() => {
                dispatch(refreshAuthToken());
                console.log("Token retrieved");
            }, 2000); // Trigger after 2 seconds
        }

        return () => clearTimeout(timeout); // Cleanup timeout when component unmounts or dependency changes
    }, [dispatch, isAuthenticated]);


    useEffect(() => {
        if (isAuthenticated) {
            console.log("Is Authenticated")

            return dispatch(refreshAuthToken());
        }
        const interval = setInterval(() => {
            dispatch(refreshAuthToken());
        }, 7000); // Every 10 seconds

        return () => clearInterval(interval);
    }, [dispatch]);




    return (

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

  );
}

export default App;