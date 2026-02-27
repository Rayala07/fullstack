const express = require("express");
const notesRouter = require("./routes/notes.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/notes", notesRouter);

module.exports = app;
