import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => console.log("Error!", error));
  }, [])
  return (
    <div className="App">
      <Card data={data}/>
    </div>
  );
}

export default App;
