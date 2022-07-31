import React from "react";

import { NextArrow,PrevArrow } from "../Arrows";
import Slider from 'react-slick';

import DeliveryCategory from "./DeliveryCategory";

const DeliveryBrands = () =>{
    const brands = [
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
            title : "Meghana Foods",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
            title : "Empire Restaurant",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
            title : "McDonald's",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/0a8086a96c6bb8c1f3006e3a84488e1f_1605160890.png?output-format=webp",
            title : "Anand Sweets",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
            title : "KFC",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/526e7511008f07f7d630549c7c5809b1_1638685733.png?output-format=webp",
            title : "Leon Grill",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
            title : "Adyar Ananda Bhavan",
        },
        {
            image : "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
            title : "Shake",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp",
            title : "FreshMenu",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
            title : "Burger King",
        },
        {
            image : "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp",
            title : "Pizza Hut",
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
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: false,
                prevArrow: false,
              },
            },
          ],
    };

    return(
        <>
            <div>
                <h1 className="font-normal text-xl px-3 lg:container lg:mx-auto lg:w-full lg:px-24 lg:my-4 lg:text-3xl lg:font-medium">Top brands for you</h1>
                <div className="px-4 lg:block lg:container lg:mx-auto w-full lg:px-24 my-3">
                    <Slider {...settings}>
                    {
                        brands.map((items)=>(
                            <div>
                                <div className="lg:flex w-full justify-center items-center h-full">
                                    <div className="w-20 h-40 lg:w-40 lg:h-60 flex flex-col gap-2 lg:gap-4">
                                        <div className="w-full h-20 lg:h-40 rounded-full p-1 bg-white shadow-lg">
                                            <img src={items.image} alt="food" className="w-full h-full rounded-full"/>
                                        </div>
                                        <h3 className="text-center text-base my-1 font-light lg:font-medium lg:text-gray-600 lg:text-xl">{items.title}</h3>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default DeliveryBrands;