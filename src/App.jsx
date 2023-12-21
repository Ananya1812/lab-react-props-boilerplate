// App.jsx

import React from "react";
import "./App.css";
import DataComponent from "./components/DataComponent";

function App({ props }) {

  return (
    <div>
      <img src={props.img} alt=""  />
    </div>
  );
}

export default App;
