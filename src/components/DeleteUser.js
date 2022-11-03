import React from "react";

import { deleteUser } from "../utils";

const DeleteUser = ({ user }) => {
  const deleteAcc = async (e) => {
    e.preventDefault();
    await deleteUser(user);
  };

  return (
    <form onSubmit={deleteAcc}>
      <button type="submit">Delete your account</button>
    </form>
  );
};
