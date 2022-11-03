import React from "react";
import { useState } from "react";
import { updateUser } from "../utils";

const UpdateUser = ({ user }) => {
  console.log(user);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const updateUsername = async (e) => {
    e.preventDefault();
    console.log(username);
    await updateUser(user, "username", username);
  };
  const updateEmail = async (e) => {
    e.preventDefault();
    console.log(email);
    await updateUser(user, "email", email);
  };
  const updatePassword = async (e) => {
    e.preventDefault();
    console.log(password);
    await updateUser(user, "password", password);
  };

  return (
    <>
      <form onSubmit={updateUsername}>
        <label>
          Update username:
          <input onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="submit">Click here to update username value</button>
      </form>

      <form onSubmit={updateEmail}>
        <label>
          Update email:
          <input onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Click here to update email value</button>
      </form>

      <form onSubmit={updatePassword}>
        <label>
          Update password:
          <input onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="submit">Click here to update password value</button>
      </form>
    </>
  );
};

export default UpdateUser;
