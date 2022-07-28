import React from "react";
import DeliveryCarousel from "./DeliveryCarousel";
import DeliveryBrands from "./Brands";

const Delivery = () =>{
    return(
        <>
            <div className="bg-gray-100 py-3 lg:pb-10">
                <DeliveryCarousel />
            </div>
            <div className="py-3 lg:pb-10 my-5">
                <DeliveryBrands />
            </div>
        </>
    );
}

export default Delivery;