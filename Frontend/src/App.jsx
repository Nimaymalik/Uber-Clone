import React from "react";
import { Route, Routes } from "react-router-dom";
// import userLogin from "./pages/userLogin";
import userSignup from "./pages/userSignup";
import captainSignup from "./pages/captainSignup";
import Home from "./pages/home";

const App = () => {
  return (
    <div> app
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<userlogin />} />
        <Route path="/signup" element={<userSignup />} />
        <Route path="/captain-login" element={<captainSignup />} /> */}
      </Routes>
    </div>
  );
};

export default App;
