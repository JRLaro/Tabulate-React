const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

//@route --> POST api/users
//@description --> Register user
//@access --> Public
router.post(
  "/",
  body("name", "Name is required").not().isEmpty(),
  body("email", "Email is required").isEmail(),
  body("password", "Password with 6 or more characters is required").isLength({
    min: 6,
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // this will return an array of missing criteria
    }

    const { name, email, password } = req.body;

    try {
      // is there a user with existing email

      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exist" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

        //returns the TOKEN
      jwt.sign(payload, config.get("jwtSecret"), {
        expiresIn: 36000
      }, (err, token) => {
          if (err) throw err;
          res.json({token})
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("There appears to be a Server Error");
    }
  }
);

module.exports = router;
