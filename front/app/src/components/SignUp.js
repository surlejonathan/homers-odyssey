import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@test.fr",
    };
    this.udpateEmailField = this.udpateEmailField.bind(this);
  }
  udpateEmailField(e) {
    const { email } = this.state;
    this.setState({ email: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input
          type='email'
          name='email'
          onChange={(e) => this.udpateEmailField(e)}
        />
      </div>
    );
  }
}

export default SignUp;
