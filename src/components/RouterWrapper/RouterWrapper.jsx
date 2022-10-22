import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeScreen from "../../screens/Home/HomeScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import LoginScreen from './../../screens/Login/LoginScreen';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";  
import UnprotectedRoute from "../UnprotectedRoute/UnprotectedRoute";
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
import { useAuthContext } from './../../context/AuthContext';

const RouterWrapper = () => {
  const { isAuthFetched } = useAuthContext()
  return (
    <>
      <Navbar />
      {isAuthFetched ? (
      <Routes>
        {/* rutas no protegidas: home, resgiter, login, coursesList y blogList*/}
        <Route path="/" element={<UnprotectedRoute ><HomeScreen /></UnprotectedRoute>} />
        <Route path="/register" element={<UnprotectedRoute ><RegisterScreen /></UnprotectedRoute>} />
        <Route path="/login" element={ <UnprotectedRoute ><LoginScreen /></UnprotectedRoute>} />
        <Route path="/blogs" element={<UnprotectedRoute ><BlogListScreen /></UnprotectedRoute>} />
        <Route path='/courses' element={<UnprotectedRoute> <CourseListScreen /></UnprotectedRoute>} />


        {/*rutas protegidas -> hace falta tener token -> estar logado */}
        <Route path="/profile" element={<ProtectedRoute><UsersProfileScreen /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UsersListScreen /></ProtectedRoute>} />
        <Route path='/users/:id/update' element={<ProtectedRoute><UsersUpdateScreen /></ProtectedRoute>} />
        <Route path="/blog/create" element={<ProtectedRoute><BlogFormScreen /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<ProtectedRoute><BlogDetailScreen /></ProtectedRoute>} />
        <Route path='/blog/:id/update' element={<ProtectedRoute><BlogUpdateScreen /></ProtectedRoute>} />
        <Route path='/course/create' element={<ProtectedRoute><CourseFormScreen /></ProtectedRoute>} />
        <Route path='/course/:id' element={<ProtectedRoute><CourseDetailScreen /></ProtectedRoute>} />
        <Route path='/course/:id/update' element={<ProtectedRoute><CourseUpdateScreen /></ProtectedRoute>} />
      </Routes>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default RouterWrapper;
