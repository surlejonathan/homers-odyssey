import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Paper,
  TextField,
  Button,
  makeStyles,
  CssBaseline,
  Snackbar,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    flexDirection: "column",
  },

  link: {
    alignSelf: "flex-end",
    justifySelf: "flex-start",
    padding: theme.spacing(3, 0),
  },

  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(10, 2),
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItem: "flex-end",
  },

  submit: {
    margin: theme.spacing(3),
    width: "auto",
    alignSelf: "flex-end",
  },
}));

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const [flash, setFlash] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signin", userData)
      .then((response) => response.data)
      .then((res) => setFlash(res.flash))
      .catch((err) =>
        setFlash("We could not sign you in, please verify your details")
      );
    setOpen(true);
  };

  const handleClose = (reason) => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Grid
        container
        alignItems='center'
        style={{ height: "100%", maxWidth: "1200px", margin: "auto" }}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container alignItems='center' justify='center'>
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <img src='http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png' />
              </Grid>
              <Grid className={classes.grid} item xs={12} sm={6}>
                <Link to='/signup' className={classes.link}>
                  Not registered yet ? Create an account !
                </Link>
                <h1>Sign In!</h1>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    required
                    margin='normal'
                    fullWidth
                    type='email'
                    name='email'
                    label='Email'
                    value={email}
                    onChange={handleChange}
                  />{" "}
                  <TextField
                    required
                    margin='normal'
                    fullWidth
                    aria-invalid='false'
                    type='password'
                    name='password'
                    label='Password'
                    value={password}
                    onChange={handleChange}
                  />{" "}
                  <Link to='/profile' className={classes.submit}>
                    <Button type='submit' variant='contained' color='primary'>
                      Submit
                    </Button>
                  </Link>
                </form>
              </Grid>
            </Grid>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              autoHideDuration={6000}
              open={open}
              onClose={handleClose}
              message={flash !== undefined && flash}
              action={[
                <IconButton
                  key='close'
                  aria-label='Close'
                  color='inherit'
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
