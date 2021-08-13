import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
