import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeScreen from "../../screens/Home/HomeScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import LoginScreen from './../../screens/Login/LoginScreen';
//import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";  //falta por usar, sólo está creado
import UsersProfileScreen from "../../screens/Users/UsersProfileScreen";
import BlogFormScreen from './../../screens/Blog/BlogForm/BlogFormScreen';
import BlogListScreen from "../../screens/Blog/BlogList/BlogListScreen";
import BlogDetailScreen from './../../screens/Blog/BlogDetail/BlogDetailScreen';
import BlogUpdateScreen from '../../screens/Blog/BlogUpdate/BlogUpsateScreen'
import UsersListScreen from '../../screens/Users/UsersListScreen'
import UsersUpdateScreen from "../../screens/Users/UsersUpdateScreen";
import CourseListScreen from '../../screens/Course/CourseList/CourseListScreen'
import CourseFormScreen from '../../screens/Course/CourseForm/CourseFormScreen'
import CourseUpdateScreen from "../../screens/Course/CourseUpdate/CourseUpdateScreen";
import CourseDetailScreen from "../../screens/Course/CourseDetail/CourseDetailScreen";

const RouterWrapper = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<UsersProfileScreen />} />
        <Route path="/users" element={<UsersListScreen />} />
        <Route path='/users/:id/update' element={<UsersUpdateScreen />} />
        <Route path="/blogs" element={<BlogListScreen />} />
        <Route path="/blog/create" element={<BlogFormScreen />} />
        <Route path="/blog/:id" element={<BlogDetailScreen />} />
        <Route path='/blog/:id/update' element={<BlogUpdateScreen />} />
        <Route path='/courses' element={<CourseListScreen />} />
        <Route path='/course/create' element={<CourseFormScreen />} />
        <Route path='/course/:id' element={<CourseDetailScreen />} />
        <Route path='/course/:id/update' element={<CourseUpdateScreen />} />
      </Routes>
    </>
  );
};

export default RouterWrapper;
