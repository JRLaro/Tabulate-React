const express = require('express');
const router = express.Router();

//@route --> GET api/notes
//@description --> Get all user notes
//@access --> Private
router.get('/', (req, res) => {
  res.send('Get Notes');
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
