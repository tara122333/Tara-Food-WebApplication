import React from "react";
import DiningCarousel from "./DiningCarousel";

const Dining = () =>{
    return(
        <>
            <div className="lg:container lg:mx-auto lg:w-full lg:px-24 lg:my-4 bg-gray-100 py-3 lg:py-10">
                <DiningCarousel />
            </div>
        </>
    );
}

export default Dining;