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

async function fetchBookmarks(req, res) {
  const bookmarks = await bookmarkModel.find();

  if (!bookmarks) {
    return res.status(404).json({
      message: "Bookmarks are empty",
    });
  }

  res.status(200).json({
    message: "Bookmarks fetched successfully",
    bookmarks,
  });
}

async function deleteBookmark(req, res) {
  const deleteId = req.params.id;

  const bookmark = await bookmarkModel.findById({
    _id: deleteId,
  });

  if (!bookmark) {
    return res.status(404).json({
      message: "bookmark doesn't exist",
    });
  }

  await bookmark.deleteOne();

  res.status(200).json({
    message: "Delete successful",
    bookmark,
  });
}

module.exports = {
  createBookmark,
  fetchBookmarks,
  deleteBookmark,
};
