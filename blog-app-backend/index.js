import express from "express";
const app = express();


app.use("/", (req, res) => {
  console.log("Hello World");
  res.send("hi");
});

app.listen(3000, () => {
  console.log("port running");
});
