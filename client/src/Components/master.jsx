import React from "react";
import { useParams } from "react-router-dom"; 
import Delivery from "./Delivery";
import Dining from "./Dining";
import NightLife from "./NightLife";
import Nutrition from "./Nutrition";



const Master = () =>{
    const {type} = useParams();
    return(
        <>
            <div className="my-5 mb-14">
                {type==="delivery" && <Delivery />}
                {type==="dining" && <Dining />}
                {type==="night" && <NightLife />}
                {type==="nutri" && <Nutrition />}
            </div>
        </>
    );
}

export default Master;