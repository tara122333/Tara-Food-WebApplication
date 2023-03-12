import {FiStar} from 'react-icons/fi';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';


import { getImage } from '../Redux/Reducer/Images/Image.action.js';


const RestaurantCard = (props) =>{

    const [image, setImage] = useState({
        images: [],
      });
      const dispatch = useDispatch();
    
      useEffect(() => {
        props.photos &&
          dispatch(getImage(props.photos)).then((data) =>
            setImage(data.payload.images)
          );
      }, [props.photos]);
      
    return(
        <>
        <Link to={`/restaurant/${props._id}`} className="w-full md:w-1/2 lg:w-1/3">
            <div className="w-full px-4 py-1  md:p-4">
            <div className="bg-white shadow-lg lg:shadow-none hover:shadow-lg mb-4 w-full border border-white rounded-2xl transition duration-700 ease-in-out  hover:border hover:border-gray-200">
                <div className="w-full h-56 lg:h-64 relative">
                    <div className="flex justify-between items-end absolute w-full bottom-3">
                        <div className="flex flex-col gap-1">
                            <div>
                            {
                                props.isPro && (
                                    <span className="bg-red-500 text-white px-1 lg:px-2 rounded text-xs lg:text-sm">Pro Extra 20% OFF</span>
                                )
                            }
                            </div>
                            <div>
                            {
                                props.isOff && (
                                    <span className="bg-blue-600 text-white px-1 lg:px-2 rounded text-xs lg:text-sm">{`₹${props.isOff}% OFF`}</span>
                                )
                            }
                            </div>
                            
                            
                        </div>
                        <span className="bg-white bg-opacity-75 px-1 text-sm lg:text-sm rounded mr-3">{props.durationOfdelivery} min</span>
                    </div>
                    <img src={image.images.length && image.images[0].location} alt="restaurant" className="w-full h-full rounded-lg lg:rounded-xl"/>
                </div>

                <div className="flex flex-col gap-2 my-2 p-3">
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">{props.name}</h4>
                        <span className="flex text-xs lg:text-sm gap-1 justify-center items-center bg-green-500 rounded-md lg:rounded-lg px-1 lg:px-2 text-white font-bold">
                        {props.restaurantReviewValue} <FiStar className="text-xs"/>
                        </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                        <p className="text-sm lg:text-base">{props.cuisine.join(", ")}</p>
                        <p className="text-sm lg:text-base">₹ {props.averageCost} for one</p>
                    </div>
                </div>
            </div>
            </div>
        </Link>
        </>
    );
}

export default RestaurantCard;