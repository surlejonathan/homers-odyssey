const express = require("express");
const router = express.Router();
const passport = require("passport");
const authRouter = require("./auth/auth");

router.get("/", (req, res) => {
  res.send("youhou");
});

router.use("/auth", authRouter);

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

module.exports = router;
