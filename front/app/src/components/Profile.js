import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Paper,
  makeStyles,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson",
  });

  const { email, name, lastname } = profile;

  /*   const [flash, setFlash] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/profile", userData)
      .then((response) => response.data)
      .then((res) => setFlash(res.flash))
      .catch((err) =>
        setFlash("We could not sign you in, please verify your details")
      );
    setOpen(true);
  };

  const handleClose = (reason) => {
    setOpen(false);
  }; */

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
                <img
                  className='avatar'
                  src='http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png'
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <h1>My Profile</h1>
                <List>
                  <ListItem>
                    <ListItemText primary='Email :' secondary={email} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Name :' secondary={name} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Lastname :' secondary={lastname} />
                  </ListItem>
                </List>
                <Link to='/signin' className={classes.submit}>
                  <Button type='submit' variant='contained' color='primary'>
                    Log out
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
