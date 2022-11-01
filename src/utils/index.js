export const regUser = async (username, email, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data);
    setter(data.username);
  } catch (error) {
    console.log(error);
  }
};

export const readUsers = async () => {
  try {
    const response = await fetch("http://localhost:5001/read", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // console.log(data.user);
    const usernames = data.user.map((users) => users.username);
    // console.log(usernames)
    return usernames;
  } catch (error) {
    console.log(error);
  }
};

export const updateUsers = async (username) => {
  try {
    const response = await fetch("http://localhost:5001/update", {
      method: "UPDATE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({})
    })
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async () => {};
