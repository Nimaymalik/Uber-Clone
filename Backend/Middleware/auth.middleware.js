//checking that the same user is login or not

const userModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const { request } = require("express");

const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  // finding the token in cookies or header
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  const isBlackToken = await userModel.findOne({ token: "token" });

  if (isBlackToken) {
    return res.status(401).json({ message: "unauthorized" });
  }

  //then decoding the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
};
