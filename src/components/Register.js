import React from "react";
import { useState } from "react";
import { regUser } from "../utils";

const Register = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Email:
        <input onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Password:
        <input onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button type="submit">Click here to register</button>
    </form>
  );
};

export default Register;
