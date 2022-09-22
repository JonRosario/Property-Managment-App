const User = require("../models/User")
const bcrypt = require("bcrypt")

async function users (req, res) {
  let everyUser = await User.find({}) 
  try {
    res.send(everyUser)
  } catch (error) {
    res.status(400).send(error)
  }
}

const login = (req, res) => {
  User.findOne({ name: req.body.username }, (err, user) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    if (!user) {
      res.status(400).json({ msg: "Given Username already exist" });
      return;
    }
    console.log(req.body.password, user);

    let passwordIsCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (passwordIsCorrect) {
      delete user.password;

      res.json(user);
    } else {
      res.status(204).json({ msg: "Incorrect password" });
      return;
    }
  });
};

module.exports = {
  users,
  login
};