import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
// `${import.meta.env.VITE_BASE_URL}
    axios
      .get("http://localhost:4000/users/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  }, [navigate]);

  return <div>UserLogout</div>;
};

export default UserLogout;
