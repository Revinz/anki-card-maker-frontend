import React from "react";
import "./App.css";
import MainPage from "./pages/Main/MainPage";
import "./root.css";
const debug = require("debug")("app");

function App() {
  debug("APP!! WORKING!!");
  console.log("app..");

  return (
    <div className="App">
      <header className="App-header">
        <MainPage />
      </header>
    </div>
  );
}

export default App;
