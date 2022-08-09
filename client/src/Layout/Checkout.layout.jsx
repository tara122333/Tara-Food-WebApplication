import React from "react";

// component
import Navbar from "../Components/Navbar/checkoutNavbar";

const CheckoutLayout = (props) =>{
    return(
        <>
            <Navbar />
            {
                props.children
            }
        </>
    );
}
export default CheckoutLayout;