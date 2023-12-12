import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './AppClass';
import AppClass from "./AppClass";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClass />
    <App />
    {}
  </React.StrictMode>
);
