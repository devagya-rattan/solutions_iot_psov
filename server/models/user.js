const mongoose = require("mongoose");
const user = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    history: [],
  },
  { timestamps: true, required: true }
);
const userModel = mongoose.model("users", user);

module.exports = userModel;
