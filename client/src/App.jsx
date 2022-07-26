import React from "react";
import Temp from "./Components/temp";
import HomeHOC from "./HOC/Home.HOC";

function App() {
  return (
  <>
    <HomeHOC path="/" exact element={Temp}/>
    <HomeHOC path="/:type" exact element={Temp}/>
  </>
  );
}

export default App;
