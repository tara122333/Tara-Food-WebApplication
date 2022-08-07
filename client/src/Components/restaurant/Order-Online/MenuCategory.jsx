import React from "react";
import classnames from "classnames";


const MenuCategory = (props) =>{
    return(
        <>
            <div className={classnames({
                "text-red-500 py-2 px-1 bg-red-100 border-r-4 border-red-500":
                props.isActive,
            })}>
                <h3 id={props.name} onClick={props.onClickHandler}>
                    {props.name} ({props.items.length})
                </h3>
            </div>
        </>
    )
}

export default MenuCategory;