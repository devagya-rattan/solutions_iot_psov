//creating a server
const express = require("express");
const mongoDB = require("mongoose");
const colors = require("colors");
const config = require("dotenv");
const cors = require("cors");
const userRoute = require("./Routes_controllers/userRoute");
const app = express();
const PORT = 8080;
// connecting the server to the database
config.config(); //to config .env file
mongoDB
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`connected to the MOngodbDatabase`.black.bgGreen))
  .catch((error) => {
    console.log(`error generated ${error}`.white.bgRed);
  });
// starting the development server
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoute);
app.listen(PORT, () => {
  console.log(` server is working on port ${PORT} `.america.bgMagenta);
});
