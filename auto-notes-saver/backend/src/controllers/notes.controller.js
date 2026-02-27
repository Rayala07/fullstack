const noteModel = require("../models/note.model");

async function createNote(req, res) {
  const { title, body } = req.body;

  const note = await noteModel.create({
    title,
    body,
  });

  res.status(201).json({
    note,
  });
}

async function fetchNotes(req, res) {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Fetch Success",
    notes,
  });
}

async function updateNote(req, res) {
  const noteId = req.params.id;

  const { title, body } = req.body;

  const updatedNote = await noteModel.findByIdAndUpdate(
    { _id: noteId },
    {
      title,
      body,
    },
    {
      new: true,
    },
  );

  res.status(200).json({
    message: "Update Success",
    note: updatedNote,
  });
}

module.exports = {
  createNote,
  fetchNotes,
  updateNote,
};
