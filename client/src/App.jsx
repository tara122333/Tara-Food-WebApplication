import React from "react";
import axios from "axios";



import Temp from "./Components/temp";
import HomeHOC from "./HOC/Home.HOC";
import Home from "./page/Home";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import Overview from "./page/restaurant/Overview";
import OrderOnline from "./page/restaurant/OrderOnline";
import Reviews from "./page/restaurant/Review"
import Menu from "./page/restaurant/Menu";
import Photos from "./page/restaurant/Photos";
import CheckoutHOC from "./HOC/Checkout.HOC";
import Checkout from "./page/Checkout";


if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


function App() {
  return (
  <>
    <HomeHOC path="/" exact element={Temp}/>

      <HomeHOC exact path="/:type" element={Home}/>

      <RestaurantHOC path="/restaurant/:id" exact element={Home}/>
      <RestaurantHOC path="/restaurant/:id/overview" exact element={Overview}/>
      <RestaurantHOC path="/restaurant/:id/order-online" exact element={OrderOnline}/>
      <RestaurantHOC path="/restaurant/:id/reviews" exact element={Reviews}/>
      <RestaurantHOC path="/restaurant/:id/menu" exact element={Menu}/>
      <RestaurantHOC path="/restaurant/:id/photos" exact element={Photos}/>
      <CheckoutHOC path="/checkout/orders" exact element={Checkout}/>
  </>
  ); 
}

export default App;
