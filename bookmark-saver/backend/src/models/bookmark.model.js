const mongoose = require("mongoose");

bookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  link: {
    type: String,
    required: [true, "Link is required"],
  },
});

module.exports = mongoose.model("bookmark", bookmarkSchema);