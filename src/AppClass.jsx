import React from "react";
import "./App.css";
import DataComponent from "./components/DataComponent";

function AppClass() {
  const picture = DataComponent(); // Assuming DataComponent returns the image data

  return (
    <div>
      <h1>Kalvium gallery</h1>
    </div>
  );
}

export default AppClass;
