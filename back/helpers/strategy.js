const passport = require("passport");
const connection = require("./db");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    (email, password, cb) => {
      connection.query(
        "SELECT email, password FROM users WHERE email=?",
        [email],
        (err, user) => {
          if (err) {
            return cb(err);
          }
          if (user.length === 0) {
            return cb(null, false, {
              message:
                "This email is not registered... Maybe you need to sign up.",
            });
          }

          let isSame = bcrypt.compareSync(password, user[0].password);
          if (isSame) {
            return cb(null, user[0].email, {
              message: "You have been successfully signed in",
            });
          } else {
            return cb(null, false, {
              message: "Please check your password and try again.",
            });
          }
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY_JWT,
    },
    (jwtPayload, cb) => {
      return cb(null, jwtPayload);
    }
  )
);
