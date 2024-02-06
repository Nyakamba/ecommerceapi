require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./routes/users/user");

require("./config/dbConnect");

//middlewares
app.use(express.json());
//routes
app.use("/api/v1/users/", userRoute);

//server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
