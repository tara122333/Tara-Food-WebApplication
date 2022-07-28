import React from "react";

import { NextArrow,PrevArrow } from "../Arrows";
import Slider from 'react-slick';

import DeliveryCategory from "./DeliveryCategory";

const DeliveryCarousel = () =>{
    const categories = [
        {
            image : "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title : "Pizza",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            title : "Burger",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            title : "Chicken",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            title : "Biryani",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title : "Rolls",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
            title : "Home Style",
        },
        {
            image : "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
            title : "Shawarma",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
            title : "Shake",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
            title : "Chaat",
        },
        {
            image : "https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
            title : "Ice Cream",
        },
        {
            image : "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
            title : "Fries",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
            title : "Shake",
        },
    ];


    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return(
        <>
            <div>
                <h1 className="font-normal text-2xl px-3 lg:container lg:mx-auto lg:w-full lg:px-24 lg:my-4 lg:text-3xl lg:font-medium">Inspiration for your first order</h1>
                <div className="lg:hidden flex flex-wrap items-center justify-start w-full">
                    {
                        categories.map((items)=>(
                            <DeliveryCategory {...items}/>
                        ))
                    }
                </div>
                <div className="hidden lg:block container mx-auto w-full px-24">
                    <Slider {...settings}>
                    {
                        categories.map((items)=>(
                            <DeliveryCategory {...items}/>
                        ))
                    }
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default DeliveryCarousel;