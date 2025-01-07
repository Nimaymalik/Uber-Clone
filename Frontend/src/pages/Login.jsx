import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/Context";
import axios from "axios";

const Login = () => {
  //we use usestate as a 2 way binding method
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  //handler is used to handle the entries in the form which is entered by the user
  const submitHandler = async (e) => {
    //prevent automatic/default reload
    e.preventDefault();

    //this is used to keep the data in the stored in tyhe form of object
    const newUser = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}users/login`,
      newUser
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    // when click on login this will clear the form and return the value in the console
    // setEmail("");
    // setPassword("");
    console.log(newUser);
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div className="">
        <img
          className="mb-10 w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium  mb-2">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium">Enter your password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here?
          <Link to={"/Signup"} className="mb-3 text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/captain-login"}
          className="flex items-center justify-center bg-[#10b461] text-white font-semibold mb-5 rounded px-2 py-2  w-full text-lg placeholder:text-base"
        >
          Login as Captain
        </Link>
      </div>
    </div>
  );
};

export default Login;
