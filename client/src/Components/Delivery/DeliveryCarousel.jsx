import React from "react";

import { NextArrow,PrevArrow } from "../Arrows";
import Slider from 'react-slick';

import DeliveryCategory from "./DeliveryCategory";

const DeliveryCarousel = () =>{
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
                    <DeliveryCategory />
                    <DeliveryCategory />
                    <DeliveryCategory />
                    <DeliveryCategory />
                    <DeliveryCategory />
                    <DeliveryCategory />
                </div>
                <div className="hidden lg:block container mx-auto w-full px-24 justify-center items-center">
                    <Slider {...settings}>
                        <DeliveryCategory />
                        <DeliveryCategory />
                        <DeliveryCategory />
                        <DeliveryCategory />
                        <DeliveryCategory />
                        <DeliveryCategory />
                        <DeliveryCategory />
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default DeliveryCarousel;