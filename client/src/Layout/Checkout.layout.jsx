import React from "react";

// component
import Navbar from "../Components/Navbar/checkoutNavbar";

const CheckoutLayout = (props) =>{
    return(
        <>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-24 ">
                {
                    props.children
                }
            </div>

        </>
    );
}
export default CheckoutLayout;