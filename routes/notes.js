const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {body, validationResult} = require('express-validator')

const User = require('../models/User');
const Note = require('../models/Note')

//@route --> GET api/notes
//@description --> Get all user notes
//@access --> Private
router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
    res.json(notes)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('There appears to be a Server Error')
  }
});

//@route --> POST api/notes
//@description --> Add new notes
//@access --> Private
router.post('/', (req, res) => {
  res.send('Add Notes');
});

//@route --> PUT api/notes/:id
//@description --> Update user notes
//@access --> Private
router.put('/:id', (req, res) => {
  res.send('Update Notes');
});

//@route --> GET api/notes/:id
//@description --> Delete user notes
//@access --> Private
router.delete('/:id', (req, res) => {
  res.send('Delete Notes');
});

module.exports = router;
