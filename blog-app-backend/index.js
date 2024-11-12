import express from "express";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect(
    "mongodb+srv://axyz08554:hQJJwSp5HdLLxuCU@cluster0.qctqmju.mongodb.net/"
  )
  .then(() => console.log("database connected!"));
app.use(userRoutes);

app.listen(3000, () => {
  console.log("server connected");
});
