import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginCaptain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CaptainData, setCaptainData] = useState({});

  //handler is used to handle the entries in the form which is entered by the user
  const submitHandler = (e) => {
    //e.prevent disallow the page to reload
    e.preventDefault();

    // when click on login this will clear the form and return the value in the console
    setEmail("");
    setPassword("");

    //this is used to keep the data in the stored in tyhe form of object
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(CaptainData);
    console.log(email, password);
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div className="">
        <img
          className="mb-10 w-16"
          src="https://www.pngall.com/wp-content/uploads/4/Uber-PNG-Image.png"
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
          Register as a Captain?
          <Link to={"/captain-signup"} className="mb-3 text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-5 rounded px-2 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default LoginCaptain;
