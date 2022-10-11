import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomeScreen from "../../screens/Home/HomeScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import LoginScreen from './../../screens/Login/LoginScreen';

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterWrapper;
