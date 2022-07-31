import React from "react";

import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";
import NutritionCard from "./NutritionCard";

const Nutrition = () =>{
    return(
        <>
            <div className="px-4 lg:block lg:container lg:mx-auto w-full lg:px-24">
                <div>
                    <NutritionHeroCarousel />
                </div>
                <div className="my-6 md:my-9">
                    <NutritionCarousel />
                </div>
                <div className="flex justify-between flex-wrap">
                    <div className=" p-4 md:w-1/2 lg:w-1/3">
                        <NutritionCard
                        bg="red"
                        image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                        />
                    </div>
                    <div className=" p-4 md:w-1/2 lg:w-1/3">
                        <NutritionCard
                        bg="red"
                        image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                        />
                    </div>
                    <div className=" p-4 md:w-1/2 lg:w-1/3">
                        <NutritionCard
                        bg="red"
                        image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                        />
                    </div>
                    <div className=" p-4 md:w-1/2 lg:w-1/3">
                        <NutritionCard
                        bg="red"
                        image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                        />
                    </div>
                    <div className=" p-4 md:w-1/2 lg:w-1/3">
                        <NutritionCard
                        bg="red"
                        image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                        />
                    </div>
                    <div className=" p-4 md:w-1/2 lg:w-1/3">
                        <NutritionCard
                        bg="red"
                        image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                        />
                    </div>
                    
                </div>
            </div>
                
        </>
    );
}


export default Nutrition;
