import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// const elm = <h1>Welcome to Phase-2</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(elm)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
