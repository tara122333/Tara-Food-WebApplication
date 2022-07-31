import React from "react";
import PictureCarouselCard from "../PictureCarousel";
import Slider from 'react-slick';
import {NextArrow,PrevArrow} from '../Arrows';

const DiningCarousel = () =>{
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                nextArrow:false,
                prevArrow: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: false,
                prevArrow: false,
              },
            },
          ],
    };

    return(
        <>
            <div className=" flex flex-col gap-2 md:gap-4 lg:gap-5 w-full">
                <h1 className="font-medium text-xl px-3 lg:text-3xl">Collections</h1>
                <div className="w-full">
                    <Slider {...settings}>
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                        <PictureCarouselCard />
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default DiningCarousel;