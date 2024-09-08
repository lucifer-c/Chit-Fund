const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  console.log("path" + req.path + "method" + req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("the app is working on", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
