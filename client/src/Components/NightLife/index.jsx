import React from "react";
import NightLifeCarousel from "./NightLifeCarousel";

const NightLife = () =>{
    return(
        <>
            <div className="lg:container lg:mx-auto lg:w-full lg:px-24 lg:my-4 bg-gray-100 py-3 lg:py-10">
                <NightLifeCarousel />
            </div>
        </>
    );
}

export default NightLife;