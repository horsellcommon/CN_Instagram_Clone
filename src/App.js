import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <h1>Register</h1>
      <Register />
    </div>
  );
}

export default App;
