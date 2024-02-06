const express = require("express");
const productRoute = express.Router();

productRoute.get("/", (req, res) => {});

productRoute.post("/register", (req, res) => {});

module.exports = productRoute;
