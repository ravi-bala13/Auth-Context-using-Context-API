import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function LoginInput() {
  const { handleLogin, settingToken } = useContext(LoginContext);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    // setDetails({
    //   email: "",
    //   password: "",
    // });

    axios
      .post("https://reqres.in/api/login", details)
      .then((res) => {
        console.log("res:", res.data);
        settingToken(res.data);
        handleLogin();
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={Submit}>
        <input
          type="text"
          value={details.email}
          onChange={changeHandler}
          name="email"
          placeholder="Enter name"
        />
        <br />
        <input
          type="text"
          value={details.password}
          onChange={changeHandler}
          name="password"
          placeholder="Enter password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginInput;
