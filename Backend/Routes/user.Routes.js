const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.Controller");
const { body } = require("express-validator");
const authMiddleware = require("../Middleware/auth.middleware");
const userModel = require("../Models/user.model");

// register for user
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

//login for user
router.post(
  "/login",
  [
    //email password
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must contain 6 characters"),
  ],
  userController.loginUser
);

//get user profile

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

router.get('/logout',authMiddleware.authUser,userController.logoutUser);

module.exports = router;
