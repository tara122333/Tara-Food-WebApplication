import React from "react";
import Temp from "./Components/temp";
import HomeHOC from "./HOC/Home.HOC";
import Master from "./Components/master";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import Overview from "./page/restaurant/Overview";
import OrderOnline from "./page/restaurant/OrderOnline";
import Reviews from "./page/restaurant/Review"
import Menu from "./page/restaurant/Menu";
import Photos from "./page/restaurant/Photos";
import CheckoutHOC from "./HOC/Checkout.HOC";

function App() {
  return (
  <>
    <HomeHOC path="/" exact element={Temp}/>

      <HomeHOC exact path="/:type" element={Master}/>

      <RestaurantHOC path="/restaurant/:id" exact element={Temp}/>
      <RestaurantHOC path="/restaurant/:id/overview" exact element={Overview}/>
      <RestaurantHOC path="/restaurant/:id/order-online" exact element={OrderOnline}/>
      <RestaurantHOC path="/restaurant/:id/reviews" exact element={Reviews}/>
      <RestaurantHOC path="/restaurant/:id/menu" exact element={Menu}/>
      <RestaurantHOC path="/restaurant/:id/photos" exact element={Photos}/>
      <CheckoutHOC path="/checkout/orders" exact element={Photos}/>
  </>
  ); 
}

export default App;
