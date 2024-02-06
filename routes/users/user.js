const express = require("express");
const userRoute = express.Router();
const User = require("../../models/user/User");

//register
userRoute.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.json({ data: user });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = userRoute;
