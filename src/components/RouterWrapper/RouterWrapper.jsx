import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeScreen from "../../screens/Home/HomeScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import LoginScreen from './../../screens/Login/LoginScreen';
//import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";  //falta por usar, sólo está creado
import UsersProfileScreen from "../../screens/Users/UsersProfileScreen";
import BlogFormScreen from './../../screens/Blog/BlogForm/BlogFormScreen';
import BlogListScreen from "../../screens/Blog/BlogList/BlogListScreen";
import BlogDetailScreen from './../../screens/Blog/BlogDetail/BlogDetailScreen';

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<UsersProfileScreen />} />
        <Route path="/blog/create" element={<BlogFormScreen />} />
        <Route path="/blogs" element={<BlogListScreen />} />
        <Route path="/blog/:id" element={<BlogDetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterWrapper;
