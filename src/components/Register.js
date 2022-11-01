import React from "react";
import { useState } from "react";

const Register = async ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

      <button tpye="submit">Click here to register</button>
    </form>
  );
};

export default Register;
