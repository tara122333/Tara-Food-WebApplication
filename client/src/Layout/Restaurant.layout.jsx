import React from "react";
const RestaurantLayout = (props) =>{
    return(
        <>
        
            <h1>This is Restaurant</h1>
            {
                props.children
            }
        </>
    );
}
export default RestaurantLayout;