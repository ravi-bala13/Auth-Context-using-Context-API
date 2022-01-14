import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Navebar } from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Navebar />
      <Body />
    </div>
  );
}

export default App;
