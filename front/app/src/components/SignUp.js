import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    passwordBis: "",
    name: "",
    lastname: "",
  });

  const { email, password, passwordBis, name, lastname } = userData;

  const [flash, setFlash] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", userData)
      .then((response) => response.data)
      .then((res) => setFlash(res.flash))
      .catch(() => setFlash("This email already exists"));
  };

  return (
    <div>
      <h1>{JSON.stringify(userData, 1, 1)}</h1>
      <p>{flash !== undefined && flash}</p>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />{" "}
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />{" "}
        <input
          type='password'
          name='passwordBis'
          value={passwordBis}
          onChange={handleChange}
        />{" "}
        <input type='name' name='name' value={name} onChange={handleChange} />{" "}
        <input
          type='lastname'
          name='lastname'
          value={lastname}
          onChange={handleChange}
        />{" "}
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default SignUp;
