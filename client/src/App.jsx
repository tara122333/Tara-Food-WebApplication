import React from "react";
import Temp from "./Components/temp";
import HomeHOC from "./HOC/Home.HOC";
import Master from "./Components/master";
import RestaurantHOC from "./HOC/Restaurant.HOC";

function App() {
  return (
  <>
    <HomeHOC path="/" exact element={Temp}/>
    {/* <Routes>
    <Route to="/">
      <Navigate to="/delivery"/>
    </Route>
    </Routes> */}

      <HomeHOC exact path="/:type" element={Master}/>

      <RestaurantHOC path="/restaurant:id" exact element={Temp}/>
  </>
  );
}

export default App;
