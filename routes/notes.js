const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Note = require("../models/Note");

//@route --> GET api/notes
//@description --> Get all user notes
//@access --> Private
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("There appears to be a Server Error");
  }
});

//@route --> POST api/notes
//@description --> Add new notes
//@access --> Private
router.post(
  "/",
  [
    auth,
    [
      body("title", "Please make sure that your note has a title")
        .not()
        .isEmpty(),
      // body('body','It appears that your note is empty').not().isEmpty()
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // this will return an array of missing criteria
    }

    const { title, body } = req.body;

    try {
      const newNote = new Note({
        title,
        body,
        user: req.user.id,
      });

      const note = await newNote.save();
      res.json(note);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("There appears to be a Server ERROR");
    }
  }
);

//@route --> PUT api/notes/:id
//@description --> Update user notes
//@access --> Private
router.put("/:id", auth, async (req, res) => {
  const { title, body } = req.body;

  //Build Note object
  const noteFields = {};
  if (title) noteFields.title = title;
  if (body) noteFields.body = body;

  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ msg: "Note not found" });

    //Ensures that the user owns the note

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true }
    );

    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("There appears to be a Server ERROR");
  }
});

//@route --> DELETE api/notes/:id
//@description --> Delete user notes
//@access --> Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    //Let's look for the note via the ID
    if (!note) return res.status(404).json({ msg: "Note was not found" });

    //if note is found, we want to make sure that the User owns the note
    if (note.user.toString() !== req.user.id) {
  return res.status(401).json({msg: 'Not Authorized to view'})
}
    await Note.findByIdAndRemove(req.params.id);

    res.json({msg: 'Your Note was Removed'})

  } catch (err) {
    console.error(err.message);
    res.status(500).send("There appears to be a Server ERROR");
  }
});

module.exports = router;
