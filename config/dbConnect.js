const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Db Connected Successifully");
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
