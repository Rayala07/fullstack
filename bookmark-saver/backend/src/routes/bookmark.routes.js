const express = require("express");
const bookmarkController = require("../controllers/bookmark.controller");

const bookmarkRouter = express.Router();

bookmarkRouter.post("/create", bookmarkController.createBookmark);

bookmarkRouter.get("/fetch", bookmarkController.fetchBookmarks);

bookmarkRouter.delete("/delete/:id", bookmarkController.deleteBookmark);

module.exports = bookmarkRouter;
