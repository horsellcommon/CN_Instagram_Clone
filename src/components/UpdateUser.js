import React from "react";
import { useState } from "react";

const UpdateUser = ({ user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <form onSubmit={updateUsername}>
        <label>
          Update username:
          <input onChange={(e) => setUsername(e.target.value)} />
        </label>
      </form>

      <form onSubmit={updateEmail}>
        <label>
          Update email:
          <input onChange={(e) => setEmail(e.target.value)} />
        </label>
      </form>

      <form onSubmit={updatePassword}>
        <label>
          Update password:
          <input onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="submit">Click here to update value</button>
      </form>
    </>
  );
};

export default UpdateUser;
