import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppClass from "./AppClass";
import DataComponent from "./components/DataComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClass />
  <DataComponent />
    {}
  </React.StrictMode>
);
