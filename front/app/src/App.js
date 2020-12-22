import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();

function App() {
  return (
    <div className='App'>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
