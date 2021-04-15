const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

//@route --> GET api/auth
//@description --> Get logged in user
//@access --> Private
router.get('/', auth, async (req, res) => {
  try { // req.user was assigned via middleware
      const user = await User.findById(req.user.id).select('-password')
      res.json(user);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('There appears to be a Server ERROR')
  }
});

//@route --> POST api/auth
//@description --> Auth user and get token
//@access --> Public
router.post(
  '/',
  [
    body('email', 'Email is required').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // this will return an array of missing criteria
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid email' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid password' });
      }
      // if everything is okay, we will get the user:id (User.findOne)
      const payload = {
        user: {
          id: user.id,
        },
      };

      //returns the TOKEN
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('There appears to be a Server Error');
    }
  }
);

module.exports = router;
