import express from "express";
const router = express.Router();
import User from "../schema/User.js";

router.post("/register", (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  const user = new User(newUser);
  user
    .save()
    .then(() => res.send("User registered successfully"))
    .catch((error) =>
      res.status(500).send("Error registering user: " + error.message)
    );
});

export default router;
