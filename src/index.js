import React from "react";
import ReactDOM from "react-dom";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
