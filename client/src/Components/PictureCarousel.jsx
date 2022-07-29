import React from "react";
import {FaCaretRight} from 'react-icons/fa';

const PictureCarouselCard = () =>{
    return(
        <>
            <div className="px-2 lg:px-4">

                <div className="w-full h-80 relative overhidd">
                    <div className="flex flex-col absolute bottom-2 text-white left-2 z-10">
                        <h4 className="text-xl font-sans">Newly Opened</h4>
                        <div className="flex gap-2 items-center">
                            <h6 className="text-lg font-normal">11 Places</h6>
                            <FaCaretRight className="flex items-center text-lg"/>
                        </div>
                    </div>
                    <div className="absolute w-full h-full inset-0  rounded-lg"  style={{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",}}/>
                    <img src="https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040546.png" alt="food" className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"/>
                </div>
            </div>
        </>
    );
}


export default PictureCarouselCard;