import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import ReadUsers from "./components/ReadUsers";
import UpdateUser from "./components/UpdateUser";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <h1>Register</h1>
      <Register setter={setUser} />
      <UpdateUser />

      {user ? (
        <>
          <h2>Welcome, {user}!</h2>
          <ReadUsers />
        </>
      ) : (
        <h2>Please register.</h2>
      )}
    </div>
  );
}

export default App;
