import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Login from "./Login.jsx";
import Posts from "./Posts.jsx";



const NavRouter = () => {

  return (
    <div>
       <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/contact" element={<Posts />}/>
        </Routes>
    </div>
  )
}

export default NavRouter
