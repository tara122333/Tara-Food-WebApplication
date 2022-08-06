import React from "react";
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/restaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import { TiStar } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import TabContainer from "../Components/restaurant/Tabs";

const RestaurantLayout = (props) =>{
    return(
        <>
            <RestaurantNavbar />
            <div className="px-3 my-2 lg:container lg:mx-auto lg:w-full lg:px-24">
                <div>
                    <ImageGrid image={
                        [
                        "https://b.zmtcdn.com/data/pictures/7/20235387/de5b4acc93cf11b7d6ca7e756f9102d9.jpg", 
                        "https://b.zmtcdn.com/data/pictures/7/20235387/8d6063c70746fd6645b3454bf35a63d1.jpg", 
                        "https://b.zmtcdn.com/data/pictures/7/20235387/7d5016df85af0cec46fe57610210450c.jpg", 
                        "https://b.zmtcdn.com/data/reviews_photos/d81/8b955bd47c0cb35429d5e66bd7ebed81_1653979616.jpg",
                        "https://b.zmtcdn.com/data/reviews_photos/079/a3890ae759ae26f3a1084a094c67a079_1655204138.jpg" 
                        ]
                    }/>
                </div>
                <div className="my-4">
                    <RestaurantInfo 
                    name="Boteco Restaurante Brasileiro"
                    restaurantRating="3.8"
                    deliveryRating="4.1"
                    cuisine="Brazilian, Steak, South American, Beverages"
                    address="MG Road, Bangalore"
                    />
                </div>
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStar /> Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabContainer></TabContainer>
                </div>
                {props.children}
            </div>
        </>
    );
}
export default RestaurantLayout;