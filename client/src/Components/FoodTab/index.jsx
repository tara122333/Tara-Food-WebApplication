import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { Link } from "react-router-dom";
import classnames from "classnames";

const MobileTabs = () =>{
    const [allTypes,setAllTypes] = useState([
          {
            id: "delivery",
            icon: <RiShoppingBag3Line />,
            name: "Delivery",
          },
          {
            id: "dining",
            icon: <IoFastFoodOutline />,
            name: "Dining Out",
          },
          {
            id: `night`,
            icon: <BiDrink />,
            name: "Night life",
          },
          {
            id: `nutri`,
            icon: <IoNutritionOutline />,
            name: "Nutrition",
          },
        ]);

        const {type} = useParams();
    return(
        <>
            <div className="fixed bottom-0 p-3 bg-white shadow-lg flex w-full justify-around md:justify-evenly items-center lg:hidden gap-2 z-10">
                
                {
                    allTypes.map((items)=>(
                        <Link to={`/${items.id}`}>
                            <div className={type=== items.id ? "flex relative justify-center items-center flex-col text-xl text-red-400" : "flex justify-center items-center flex-col text-xl"}>
                                {items.icon}
                                <div className={type===items.id ? "absolute -top-3 w-full h-2 border-t-2 border-red-400" : ""} />
                                <h5 className="text-sm">
                                    {items.name}
                                </h5>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </>
    );
}
const LargeTabs = () =>{
    const [allTypes,setAllTypes] = useState([
        {
            id: "delivery",
            imageDefault:
              "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive:
              "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name: "Delivery",
            activeColor: "yellow",
          },
          {
            id: "dining",
            imageDefault:
              "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive:
              "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            activeColor: "blue",
      
            name: "Dining Out",
          },
          {
            id: `night`,
            imageDefault:
              "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive:
              "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            activeColor: "purple",
      
            name: "Night life",
          },
          {
            id: `nutri`,
            imageDefault:
              "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            imageActive:
              "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            activeColor: "yellow",
      
            name: "Nutrition",
          },
    ]);

    const {type} = useParams();
    return(
        <>
            <div className="hidden lg:flex gap-14 container mx-auto px-24 my-8 w-full">
                
                {
                    allTypes.map((items)=>(
                        <Link to={`/${items.id}`}>
                            <div className="flex items-center pb-4 gap-3 transition duration-700 ease-in-out">
                                <div className={classname("w-16 h-16 p-4 rounded-full bg-gray-100",{[`bg-${items.activeColor}-100`] : type===items.id})}>
                                    <img src={type===items.id ? items.imageActive : items.imageDefault} alt="delivery" className="w-full h-full"/>
                                </div>
                                <h3 className={type===items.id ? "text-xl text-red-400" : "text-xl text-gray-700"}>
                                    {items.name}
                                </h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
const FoodTab = () =>{
    return(
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    );
}

export default FoodTab;