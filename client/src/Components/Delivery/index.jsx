import React, { useState } from "react";
import DeliveryCarousel from "./DeliveryCarousel";
import DeliveryBrands from "./Brands";
import RestaurantCard from "../restaurantCard";

const Delivery = () =>{

    const [restaurantList, setRestaurantList] = useState([
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/0/60340/e4432457273c33bcd1f287e6ec473749.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/0/60340/773037a54535261f43738546f29aedf1.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Auntie Fung's",
            restaurantReviewValue : 4.1,
            cuisine : ["Asian", "Thai", "Chinese", "Vietnamese"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/chains/8/51418/4f4440d6f4e39151f92a850c27ac13f7.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/8/51418/6d4d04396c5d7f59c760fceeaed5693f.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Pizza Hut",
            restaurantReviewValue : 4.1,
            cuisine : ["Pizza", "Fast Food", "Desserts"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/chains/5/61555/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/5/61555/298cd1d512282f56a9aef6aa4601ad75.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Burger King",
            restaurantReviewValue : 4.1,
            cuisine : ["Burger", "Fast Food", "Beverages"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/0/60340/e4432457273c33bcd1f287e6ec473749.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/0/60340/773037a54535261f43738546f29aedf1.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Auntie Fung's",
            restaurantReviewValue : 4.1,
            cuisine : ["Asian", "Thai", "Chinese", "Vietnamese"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/chains/8/51418/4f4440d6f4e39151f92a850c27ac13f7.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/8/51418/6d4d04396c5d7f59c760fceeaed5693f.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Pizza Hut",
            restaurantReviewValue : 4.1,
            cuisine : ["Pizza", "Fast Food", "Desserts"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/chains/5/61555/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/5/61555/298cd1d512282f56a9aef6aa4601ad75.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Burger King",
            restaurantReviewValue : 4.1,
            cuisine : ["Burger", "Fast Food", "Beverages"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/0/60340/e4432457273c33bcd1f287e6ec473749.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/0/60340/773037a54535261f43738546f29aedf1.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Auntie Fung's",
            restaurantReviewValue : 4.1,
            cuisine : ["Asian", "Thai", "Chinese", "Vietnamese"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/chains/8/51418/4f4440d6f4e39151f92a850c27ac13f7.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/8/51418/6d4d04396c5d7f59c760fceeaed5693f.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Pizza Hut",
            restaurantReviewValue : 4.1,
            cuisine : ["Pizza", "Fast Food", "Desserts"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [
                "https://b.zmtcdn.com/data/pictures/chains/5/61555/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/5/61555/298cd1d512282f56a9aef6aa4601ad75.jpg?fit=around|300:273&crop=300:273;*,*"
            ],
            name : "Burger King",
            restaurantReviewValue : 4.1,
            cuisine : ["Burger", "Fast Food", "Beverages"],
            averageCost : 150
        },
        {
            isPro : true,
            isOff : 30,
            durationOfdelivery : 40,
            images : [],
            name : "",
            restaurantReviewValue : 4.1,
            cuisine : [],
            averageCost : 150
        },
    ]);


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