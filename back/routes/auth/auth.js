const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.post("/signup", (req, res) => {
  const { email, password, name, lastname } = req.body;
  const dataUser = { email, password, name, lastname };

  connection.query("INSERT INTO users SET ?", [dataUser], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send("I am in POST signup");
    }
  });
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
