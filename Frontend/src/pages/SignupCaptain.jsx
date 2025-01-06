import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupCaptain = () => {
  //we use usestate as a 2 way binding method
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userData, setUserData] = useState({});

  //handler is used to handle the entries in the form which is entered by the user
  const submitHandler = (e) => {
    //prevent automatic/default reload
    e.preventDefault();

    // when click on login this will clear the form and return the value in the console
    setEmail("");
    setPassword("");
    setfirstname("");
    setlastname("");

    //this is used to keep the data in the stored in tyhe form of object
    setUserData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });

    console.log(userData);
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
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-2 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-2 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium  mb-2">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h3 className="text-lg font-medium">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2  w-full text-lg placeholder:text-base">
            Signup
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to={"/login"} className="mb-3 text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque
          nihil explicabo autem ea atque sed eveniet, consequatur aliquam a!z
        </p>
      </div>
    </div>
  );
};

export default SignupCaptain;
