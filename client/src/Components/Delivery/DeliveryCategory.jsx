import React from "react";



const DeliveryCategorySm = ({image,title}) =>{
    return(
        <>
            <div className="lg:hidden w-1/4 flex flex-col gap-3 justify-center items-center">
                <div className="h-20 w-20 lg:w-24 lg:h-24 my-4">
                    <div className="w h-full bg-white rounded-full p-1">
                        <img src={image} alt="Pizza" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <h3 className="text-center text-sm lg:text-base my-1 font-light">{title}</h3>
                </div>
                
            </div>
        </>
    );
}

const DeliveryCategoryLg = ({image,title}) =>{
    return(
        <>
            <div className="hidden lg:flex w-full justify-center items-center h-full">
                <div className="w-40 h-48 flex flex-col">
                    <div className="w-full h-40 rounded-full p-1 bg-white shadow-lg">
                        <img src={image} alt="food" className="w-full h-full object-cover rounded-full" />
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