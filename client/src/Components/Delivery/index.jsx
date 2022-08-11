import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";


import DeliveryCarousel from "./DeliveryCarousel";
import DeliveryBrands from "./Brands";
import RestaurantCard from "../restaurantCard";

const Delivery = () =>{

    const [restaurantList, setRestaurantList] = useState([
        // {
        //     isPro : true,
        //     isOff : 30,
        //     durationOfdelivery : 40,
        //     images : [],
        //     name : "",
        //     restaurantReviewValue : 4.1,
        //     cuisine : [],
        //     averageCost : 150
        // },
    ]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants
      );
    
      useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
      }, [reduxState.restaurants]);

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
                    
                    {
                        restaurantList.map((items)=>(
                            <RestaurantCard {...items} key={items._id}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Delivery;