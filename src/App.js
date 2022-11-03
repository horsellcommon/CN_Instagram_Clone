import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import ReadUsers from "./components/ReadUsers";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <h1>Register</h1>
      <Register setter={setUser} />

      {user ? (
        <>
          <h2>Welcome, {user}!</h2>
          <ReadUsers />
          <UpdateUser user={user} />
          <DeleteUser user={user} />
        </>
      ) : (
        <h2>Please register.</h2>
      )}
    </div>
  );
}

export default App;
