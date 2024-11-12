import express from "express";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

mongoose.connect("").then(() => console.log("database connected!"));
app.use(userRoutes);

app.listen(3000, () => {
  console.log("server connected");
});
