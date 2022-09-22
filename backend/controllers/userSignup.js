const User = require("../models/User")
const bcrypt = require("bcrypt")

const signup = async (req, res) => {
  let user = await User.findOne({ username: req.body.username })
  if (user) {
    res.json(`this user already exists`);
  } else {
    bcrypt.hash(`${req.body.password}`, 8, (err, hash) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      User.create({ username: req.body.username, password: hash, email: req.body.email }).then((user) => {
        res.json(user);
      });
    });
  }
};

module.exports = {
  signup,
}