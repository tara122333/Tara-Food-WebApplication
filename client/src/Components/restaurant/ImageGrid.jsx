import React from "react";
import {FiCamera} from 'react-icons/fi'

const ImageGrid = (props)=>{
    return(
        <>
            <div className="w-full h-60 md:hidden">
                    <img src={props.image[0]} alt="restaurant" className="w-full h-full object-cover rounded-lg"/>
                </div>
                <div className="hidden w-full md:flex h-96 gap-1 rounded-lg">
                    <div className="w-full h-full overflow-hidden rounded-lg">
                        <img src={props.image[0]} alt="restaurant" className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110 cursor-pointer"/>
                    </div>
                    <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
                        <div className="w-full h-2/4 overflow-hidden rounded-lg">
                            <img src={props.image[1]} alt="restaurant" className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110 cursor-pointer"/>
                        </div>
                        <div className="w-full h-2/4 overflow-hidden rounded-lg">
                            <img src={props.image[2]} alt="restaurant" className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110 cursor-pointer"/>
                        </div>

                    </div>
                    <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
                        <div className="w-full h-2/4 relative">
                            <img src={props.image[3]} alt="restaurant" className="w-full h-full object-cover rounded-lg"/>
                            <div className="w-full h-full bg-black bg-opacity-40 absolute inset-0 rounded-lg" />
                            <h4 className="absolute inset-y-2/4	z-20 w-full h-full text-center text-white font-semibold">
                                View Gallery
                            </h4>
                        </div>
                        <div className="w-full h-2/4 relative">
                            <img src={props.image[4]} alt="restaurant" className="w-full h-full object-cover rounded-lg"/>

                            <div className="w-full h-full bg-gray-400 bg-opacity-90 absolute inset-0 rounded-lg" />
                            <div className="absolute inset-y-1/4 z-20 w-full h-full flex flex-col text-center text-white font-semibold items-center">
                            <div className="p-3 bg-black rounded-full bg-opacity-50">
                                <FiCamera />
                            </div>
                            <h4>
                                Add Photos
                            </h4>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ImageGrid;