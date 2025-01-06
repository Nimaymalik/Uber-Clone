import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginCaptain from "./pages/LoginCaptain";
import SignupCaptain from "./pages/SignupCaptain";
import Home2 from "./pages/Home2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/captain-login" element={<LoginCaptain />} />
        <Route path="/captain-signup" element={<SignupCaptain />} />
        <Route path="/home" element={<Home2 />} />
      </Routes>
    </div>
  );
};

export default App;
