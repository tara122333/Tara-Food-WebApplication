import React from "react";



const DeliveryCategorySm = () =>{
    return(
        <>
            <div className="lg:hidden w-1/4 flex flex-col gap-3">
                <div className="h-24 w-24 my-4">
                    <div className="w h-full bg-white rounded-full p-2">
                        <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="Pizza" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <h3 className="text-center text-base my-1 font-light">Pizza</h3>
                </div>
                
            </div>
        </>
    );
}

const DeliveryCategoryLg = () =>{

    

    return(
        <>
            <div className="hidden lg:flex">
                <div className="w-40 flex flex-col gap-3">
                    <div className="w-full h-full rounded-full p-2">
                        <img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="food" className="w-full h-full rounded-full" />
                    </div>
                    <h3 className="text-center font-medium text-xl">Burger</h3>
                </div>
            </div>
        </>
    );
}

const DeliveryCategory = () =>{
    return(
        <>
            <DeliveryCategorySm />
            <DeliveryCategoryLg />
        </>
    );
}

export default DeliveryCategory;