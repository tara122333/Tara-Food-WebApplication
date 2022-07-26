import React from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import FoodTab from "../Components/FoodTab";
const HomeLayout = (props) =>{
    return(
        <>
            <Navbar />
            <FoodTab />
            {
                props.children
            }
        </>
    );
}
export default HomeLayout;