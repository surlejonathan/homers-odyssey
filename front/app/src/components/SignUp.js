import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      email: "",
      password: "",
      passwordBis: "",
      name: "",
      lastname: "",
    });
  };

  render() {
    const { email, password, passwordBis, name, lastname } = this.state;
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />{" "}
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />{" "}
          <input
            type='password'
            name='passwordBis'
            value={passwordBis}
            onChange={this.handleChange}
          />{" "}
          <input
            type='name'
            name='name'
            value={name}
            onChange={this.handleChange}
          />{" "}
          <input
            type='lastname'
            name='lastname'
            value={lastname}
            onChange={this.handleChange}
          />{" "}
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
