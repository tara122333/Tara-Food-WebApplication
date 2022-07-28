import React from "react";
import {FiStar} from 'react-icons/fi';
const RestaurantCard = () =>{
    return(
        <>
            <div className="bg-white hover:shadow-lg p-4 mb-4 w-full rounded-2xl transition duration-700 ease-in-out md:w-1/2 lg:w-1/3">
                <div className="w-full h-56 lg:h-64 relative">
                    <div className="flex justify-between items-end absolute w-full bottom-0">
                        <div className="flex flex-col gap-2 items-star">
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Pro Extra 20% OFF</span>
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">30% OFF</span>
                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded	mr-3">43 min</span>
                    </div>
                    <img src="https://b.zmtcdn.com/data/pictures/chains/7/58607/4307315f24c7474ba57b31f38b4abfaa_o2_featured_v2.jpg?output-format=webp" alt="restaurant" className="w-full h-full rounded-lg lg:rounded-xl"/>
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium">Auntie Fung's</h4>
                        <span className="flex gap-2 justify-center items-center bg-green-500 rounded-sm lg:rounded-md px-2 text-white font-bold">
                            4.1 <FiStar />
                        </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                        <h3>Asian, Thai</h3>
                        <span>₹150 for One</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RestaurantCard;