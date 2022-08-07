import React from "react";
import Temp from "./Components/temp";
import HomeHOC from "./HOC/Home.HOC";
import Master from "./Components/master";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import Overview from "./page/restaurant/Overview";

function App() {
  return (
  <>
    <HomeHOC path="/" exact element={Temp}/>

      <HomeHOC exact path="/:type" element={Master}/>

      <RestaurantHOC path="/restaurant/:id" exact element={Temp}/>
      <RestaurantHOC path="/restaurant/:id/overview" exact element={Overview}/>
      <RestaurantHOC path="/restaurant/:id/order-online" exact element={Temp}/>
      <RestaurantHOC path="/restaurant/:id/reviews" exact element={Temp}/>
      <RestaurantHOC path="/restaurant/:id/menu" exact element={Temp}/>
      <RestaurantHOC path="/restaurant/:id/photos" exact element={Temp}/>
  </>
  ); 
}

export default App;
