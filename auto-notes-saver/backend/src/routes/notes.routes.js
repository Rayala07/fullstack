const express = require("express");
const notesController = require("../controllers/notes.controller");

const notesRouter = express.Router();

notesRouter.post("/create", notesController.createNote);

notesRouter.get("/fetch", notesController.fetchNotes);

notesRouter.put("/update/:id", notesController.updateNote);

module.exports = notesRouter;
