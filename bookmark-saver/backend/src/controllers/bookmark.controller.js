const bookmarkModel = require("../models/bookmark.model");

async function createBookmark(req, res) {
  const { title, link } = req.body;

  if (title === "" || link === "") {
    return res.status(400).json({
      message: "Invalid Input",
    });
  }

  const bookmark = await bookmarkModel.create({
    title,
    link,
  });

  res.status(201).json({
    message: "Created Bookmark",
    bookmark,
  });
}

async function fetchBookmarks(req, res) {}

module.exports = {
  createBookmark,
  fetchBookmarks,
};
