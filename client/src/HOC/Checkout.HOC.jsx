import React from "react";
import { Route,Routes} from "react-router-dom";

import CheckoutLayout from "../Layout/Checkout.layout";

const CheckoutHOC = ({element:Component,...rest})=>{
    const fun = (props) =>{
        return (<CheckoutLayout> <Component {...props} /> </CheckoutLayout>);
    }
    return(
        <>
            <Routes>
                {/* <Route {...rest} element={fun(rest)}/> */}
                <Route {...rest} element={fun(rest)}/>
            </Routes>
        </>
    );
}

export default CheckoutHOC;