import React from "react";
import DeliveryCarousel from "./DeliveryCarousel";
import DeliveryBrands from "./Brands";
import RestaurantCard from "../restaurantCard";

const Delivery = () =>{
    return(
        <>
            <div className="bg-gray-100 py-3 lg:pb-10">
                <DeliveryCarousel />
            </div>
            <div className="py-3 lg:pb-10 my-5">
                <DeliveryBrands />
            </div>
            <div className="lg:container lg:mx-auto lg:w-full lg:px-24">
                <h1 className="text-xl px-3 mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">Best Food in Bengaluru</h1>
                <div className="flex flex-wrap ">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </div>
            </div>
        </>
    );
}

export default Delivery;