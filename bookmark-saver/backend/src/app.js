const express = require("express");
const bookmarkRouter = require("./routes/bookmark.routes");

const app = express();

app.use(express.json());

app.use("/api/bookmarks", bookmarkRouter);

module.exports = app;