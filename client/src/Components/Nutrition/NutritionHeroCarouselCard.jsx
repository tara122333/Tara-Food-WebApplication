import React from "react";

const NutritionHeroCarouselCard = (props) =>{
    return(
        <>
            <div className="w-full h-52  md:h-72">
                <img src={props.img} alt="nutrition" className="w-full h-full"/>
            </div>
        </>
    );
}


export default NutritionHeroCarouselCard;
