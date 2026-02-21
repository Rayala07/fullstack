const express = require("express");
const bookmarkController = require("../controllers/bookmark.controller");

const bookmarkRouter = express.Router();

bookmarkRouter.post("/create", bookmarkController.createBookmark);

bookmarkRouter.get("/fetch/bookmarks", bookmarkController.fetchBookmarks);

module.exports = bookmarkRouter;
