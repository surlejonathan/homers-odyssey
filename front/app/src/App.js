import React from "react";
import SignUp from "./components/SignUp";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();

function App() {
  return (
    <div className='App'>
      <MuiThemeProvider theme={theme}>
        <SignUp />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
