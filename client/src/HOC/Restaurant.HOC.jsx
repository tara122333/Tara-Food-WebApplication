import React from "react";
import { Route,Routes} from "react-router-dom";

import RestaurantLayout from "../Layout/Restaurant.layout";

const RestaurantHOC = ({element:Component,...rest})=>{
    const fun = (props) =>{
        return (<RestaurantLayout> <Component {...props} /></RestaurantLayout>);
    }
    return(
        <>
            <Routes>
                <Route {...rest} element={fun(rest)}/>
            </Routes>
        </>
    );
}

export default RestaurantHOC;