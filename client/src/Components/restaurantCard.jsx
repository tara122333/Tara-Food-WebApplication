import React from "react";
import {FiStar} from 'react-icons/fi';
const RestaurantCard = (props) =>{
    return(
        <>
            <div className="bg-white hover:shadow-lg p-4 mb-4 w-full rounded-2xl transition duration-700 ease-in-out md:w-1/2 lg:w-1/3">
                <div className="w-full h-56 lg:h-64 relative">
                    <div className="flex justify-between items-end absolute w-full bottom-3">
                        <div className="flex flex-col gap-2 items-star">
                            {
                                props.isPro && (
                                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Pro Extra 20% OFF</span>
                                )
                            }
                            {
                                props.isOff && (
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{`₹${props.isOff}% OFF`}</span>
                                )
                            }
                            
                            
                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded	mr-3">{props.durationOfdelivery} min</span>
                    </div>
                    <img src={props.images.length && props.images[0]} alt="restaurant" className="w-full h-full rounded-lg lg:rounded-xl"/>
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium">{props.name}</h4>
                        <span className="flex gap-2 justify-center items-center bg-green-500 rounded-sm lg:rounded-md px-2 text-white font-bold">
                        {props.restaurantReviewValue} <FiStar />
                        </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                        <p>{props.cuisine.join(", ")}</p>
                        <p>₹ {props.averageCost} for one</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RestaurantCard;