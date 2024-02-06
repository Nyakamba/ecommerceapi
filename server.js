require("dotenv").config();
const express = require("express");
const app = express();
require("./config/dbConnect");

//middlewares
//routes
app.get("/api/v1/test", () => {
  console.log("Test is successful");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
