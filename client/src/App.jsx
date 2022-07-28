import React from "react";
import Temp from "./Components/temp";
import HomeHOC from "./HOC/Home.HOC";
import Master from "./Components/master";

function App() {
  return (
  <>
    <HomeHOC path="/" exact element={Temp}/>
    <HomeHOC path="/:type" exact element={Master}/>
  </>
  );
}

export default App;
