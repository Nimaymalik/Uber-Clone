//we make this page to check the particular user logied in to the page or not
//if not then it will not move to the next page

import React, {useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <> {children}</>;
};

export default UserProtectedWrapper;
