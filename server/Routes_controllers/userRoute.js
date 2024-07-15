// creating the end points for the server client interaction..
const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const userHistoryModel = require("../models/userHistory");
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newuser = new userModel({
      name,
      email,
      password,
    });
    const user = await userModel.findOne({ email });
    if (user) {
      res.status(401).json({ message: "user already registered" });
    } else {
      const saveduser = await newuser.save();
      // const findUser = await userModel.findOne({ name });
      res.status(201).json(saveduser);
    }
  } catch (error) {
    res.status(401).json(error);
  }
});
// Logging in the user to the database
router.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
    const userEmail = await userModel.findOne({ email });
    const userAllData = await userModel.find(userEmail);
    if (!userEmail) {
      res.status(401).json({
        message: "invalid username",
      });
    }
    res.status(201).json(userAllData);
  } catch (error) {
    res.status(401).json(error);
  }
});
// Deleting the user to the database
router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deleteUser = await userModel.findByIdAndDelete(userId);
    if (!deleteUser) {
      res.status(401).json({
        message: "user not found",
      });
    }
    res.status(201).json({
      message: "user deleted",
      //   deleteUser
    });
  } catch (error) {
    res.status(400).json(error);
  }
});
// Fetchinf the user data by id
router.get("/getuser/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const findUser = await userModel.findById(userId);
    res.status(201).json(findUser);
  } catch (error) {
    res.status(401).json({ message: "userdata not found" });
  }
});
// updating the history of the user in an array
router.post("/details/:id", async (req, res) => {
  const userid = req.params.id;
  const { name, details } = req.body;
  try {
    const newuser = new userHistoryModel({
      name,
      userid,
      details,
    });
    const saveddetails = await newuser.save();
    res.status(201).json(saveddetails);
  } catch (error) {
    res.status(401).json(error);
  }
});
// fetching the users history from data base
router.get("/userhis", async (req, res) => {
  // const { userid } = req.body;
  try {
    const usershistory = await userHistoryModel.find();
    res.status(201).json(usershistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// fetching the all usershistoyr from data base
router.get("/allHistory", async (req, res) => {
  try {
    const usershistory = await userHistoryModel.find();
    res.status(201).json(usershistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
