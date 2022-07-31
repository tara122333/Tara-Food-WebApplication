import React from "react";

const NutritionCard = ({title,image}) =>{
    return(
        <>
            <div className="bg-white shadow rounded-md w-28 h-full px-3 md:px-4  md:w-64">

                <div>
                    <img src={image} alt="food" className="w-full h-full object-cover rounded-t-md"/>
                </div>
                <div>
                    <h3 className="text-sm my-1 text-center font-light md:text-xl">
                        {title}
                    </h3>
                </div>
            </div>
        </>
    );
}

const NutritionCarousalCard = (props) => {
    return (
      <>
        <NutritionCard {...props} />
      </>
    );
  };


export default NutritionCarousalCard;
