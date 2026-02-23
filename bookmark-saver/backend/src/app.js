const express = require("express");
const bookmarkRouter = require("./routes/bookmark.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/bookmarks", bookmarkRouter);

module.exports = app;
