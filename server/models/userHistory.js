const mongoose = require("mongoose");

const userHostory = new mongoose.Schema({
  userid: String,
  name: String,
  details: [
    {
      sector: String,
      problems: String,
      ideas: String,
    },
  ],
});

const userHistoryModel = mongoose.model("userhistory", userHostory);
module.exports = userHistoryModel;
