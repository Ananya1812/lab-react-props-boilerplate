// App.jsx

import React from "react";
import "./App.css";
import DataComponent from "./components/DataComponent";

function App() {
  const picture = DataComponent(); // Assuming DataComponent returns the image data
  console.log(picture);
  return (
    <div>
      <h1>Kalvium gallery</h1>
      <div className="main">
        {picture.map((image) => {
          return (
            <div className="align" key={image.id}>
              {/* Ensure the src attribute points correctly to the image */}
              <img src={image.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
