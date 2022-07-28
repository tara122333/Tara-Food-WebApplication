import React from "react";



const DeliveryCategorySm = ({image,title}) =>{
    return(
        <>
            <div className="lg:hidden w-1/4 flex flex-col gap-3">
                <div className="h-24 w-24 my-4">
                    <div className="w h-full bg-white rounded-full p-1">
                        <img src={image} alt="Pizza" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <h3 className="text-center text-base my-1 font-light">{title}</h3>
                </div>
                
            </div>
        </>
    );
}

const DeliveryCategoryLg = ({image,title}) =>{
    return(
        <>
            <div className="hidden lg:flex w-full justify-center items-center">
                <div className="w-40 flex flex-col gap-3">
                    <div className="w-full h-full rounded-full p-2 bg-white">
                        <img src={image} alt="food" className="w-full h-full rounded-full" />
                    </div>
                    <h3 className="text-center font-medium text-xl text-gray-600">{title}</h3>
                </div>
            </div>
        </>
    );
}

const DeliveryCategory = (props) =>{
    return(
        <>
            <DeliveryCategorySm {...props} />
            <DeliveryCategoryLg {...props}/>
        </>
    );
}

export default DeliveryCategory;