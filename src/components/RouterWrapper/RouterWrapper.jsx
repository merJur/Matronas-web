import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeScreen from "../../screens/Home/HomeScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import LoginScreen from './../../screens/Login/LoginScreen';
//import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";  //falta por usar, sólo está creado
import UsersProfileScreen from "../../screens/Users/UsersProfileScreen";

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/users/:id" element={<UsersProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterWrapper;
