import React from "react";
import { useState, useEffect } from "react";
import { updateUsers } from "../utils";

const UpdateUser = ({ setter }) => {
    const [username, setUsername] = useState();
    const [key, setKey] = useState();
    const [value, setValue] = useState();
  
    const submitHandler = async (e) => {
      e.preventDefault();
      // console.log(username, email, password);
      await updateUsers(username, key, value, setter);
    };
  
    return (
      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input onChange={(e) => setUsername(e.target.value)} />
        </label>
  
        <label>
          What key would you like to change?:
          <input onChange={(e) => setKey(e.target.value)} />
        </label>
  
        <label>
          New Value:
          <input onChange={(e) => setValue(e.target.value)} />
        </label>
  
        <button type="submit">Click here to update value</button>
      </form>
    );
  };
  
  export default UpdateUser;
  