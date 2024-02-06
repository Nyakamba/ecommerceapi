const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/User");

//register
const registerCtrl = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.json({ data: user });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//login
const loginCtrl = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json("All fields are required");
  }

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.json("Invalid login credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, userFound.password);

    if (!isPasswordValid) {
      return res.json("Invalid login credentials");
    }

    const accessToken = jwt.sign({
      id: userFound._id,
      isAdmin: userFound.isAdmin,
    });

    res.status(200).json(userFound);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { registerCtrl, loginCtrl };
