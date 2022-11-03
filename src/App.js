import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import Login from "./components/Login";
import ReadUsers from "./components/ReadUsers";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import Fetcher from "./components/Fetcher";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <h1>Register</h1>
      <Register setter={setUser} />
      <h1>Login</h1>
      <Login setter={setUser} />

      {user ? (
        <>
          <h2>Welcome, {user}!</h2>
          <ReadUsers />
          <UpdateUser user={user} />
          <DeleteUser user={user} />
          <Fetcher />
        </>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
}

export default App;
