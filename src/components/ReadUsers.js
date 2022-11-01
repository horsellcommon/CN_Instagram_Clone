import React from "react";
import { useState, useEffect } from "react";
import { readUsers } from "../utils";

const ReadUsers = () => {
  const [usernames, setUsernames] = useState();

  useEffect(() => {
    loadUsers();
  }, []);

  //Can't use async inside useEffect so do it all outside and bring it in
  const loadUsers = async () => {
    let users = await readUsers();
    setUsernames(users);
  };

  return (
    <div className="container">
      {usernames?.length > 0 ? (
        <div className="usernames">
          {usernames.map((user) => (
            <h3>{user}</h3>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No users found.</h3>
        </div>
      )}
    </div>
  );
};

export default ReadUsers;
