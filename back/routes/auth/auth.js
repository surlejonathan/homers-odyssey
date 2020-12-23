const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../../helpers/strategy");

router.post("/signup", (req, res) => {
  const { email, password, name, lastname } = req.body;
  let hash = bcrypt.hashSync(password, 10);
  const dataUser = { email, password: hash, name, lastname };

  connection.query("INSERT INTO users SET ?", [dataUser], (err, results) => {
    if (err) {
      res.status(500).send({ flash: err.message });
    } else {
      res.status(200).json({ flash: "User has been signed up!" });
    }
  });
});

router.post("/signin", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send(err.message);
    if (!user) return res.status(400).json({ message: info.message });
    const token = jwt.sign({ user }, process.env.SECRET_KEY_JWT);
    return res.json({ user, token });
  })(req, res);
});

router.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.put("/users/:id", (req, res) => {
  const idUser = req.params.id;
  const dataToUpdate = req.body;
  connection.query(
    "UPDATE users SET ? WHERE id=? ",
    [dataToUpdate, idUser],
    (err, results) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
