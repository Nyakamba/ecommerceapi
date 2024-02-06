const express = require("express");
const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.send("users test route is successful");
});

userRoute.post("/register", (req, res) => {
  const username = req.body.username;
  res.json({ username });
});

module.exports = userRoute;
