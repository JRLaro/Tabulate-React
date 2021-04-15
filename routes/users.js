const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const User = require("../models/User");

//@route --> POST api/users
//@description --> Register user
//@access --> Public
router.post(
  "/",
    body("name", "Name is required")
        .not()
        .isEmpty(),
        body('email', 'Email is required').isEmail(),
    body('password', 'Password with 6 or more characters is required').isLength({min: 6})
    ,
  (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({errors: errors.array()}) // this will return an array of missing criteria 
      }

      res.send('Congratulations - you passed')
  }
);

module.exports = router;
