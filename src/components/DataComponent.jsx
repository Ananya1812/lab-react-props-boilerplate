// DataComponent.jsx
import App from "../App";
import elephant from "../images/elephant.jpeg"; // Import your elephant image here

const DataComponent = () => {
  const imageData = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,

      img: elephant,
    },
  ];

  return (
    <div className="container">
      {imageData.map((element) => {
        // console.log(element);
        return <App key={element.id} props={element} />;
      })}
    </div>
  );
};
export default DataComponent;
