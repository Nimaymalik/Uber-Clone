const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser=require("cookie-parser")

const connectDB = require("./Database/db");
const userRoutes = require("./Routes/user.Routes");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/users", userRoutes);

module.exports = app;
