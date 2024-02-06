const express = require("express");
const { registerCtrl, loginCtrl } = require("../../controllers/user/userCtrl");
const userRoute = express.Router();

//register
userRoute.post("/register", registerCtrl);

//login

userRoute.post("/login", loginCtrl);

module.exports = userRoute;
