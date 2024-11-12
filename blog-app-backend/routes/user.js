import express from "express";
const router = express.Router();
import User from "../schema/User.js";

router.get("/register", (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  const user = new User(newUser);
  user.save();
  res.send("User registered successfully");
});

export default router;
