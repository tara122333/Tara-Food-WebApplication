import React from "react";
import {FaRegUser} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';
import {BiSearch} from 'react-icons/bi';
import {RiArrowDownSFill} from 'react-icons/ri';

const NavbarLg = () =>{
    return (
        <>
            <div className="flex justify-between gap-4 items-center w-full">
                <div className="w-40 py-2 cursor-pointer">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo"  className="w-full h-full"/>
                </div>
                <div className="flex items-center border shadow-md rounded-md px-3 py-1 w-2/4 gap-3 border-gray-200">
                    <div className="flex items-center gap-3 border-r-2 border-r-gray-400">
                        <GrLocation className="text-red-500 text-xl"/>
                        <div className="">
                            <input type="search" name="location_search" id="location_search" placeholder="Jaipur" className="outline-none text-gray-700" />
                        </div>
                        <RiArrowDownSFill className="text-2xl text-gray-700"/>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                        <BiSearch className="text-2xl text-gray-500 "/>
                        <div className="w-full">
                            <input type="search" name="food_search" id="food_search" placeholder="Search for restaurants and your dish" className="outline-none w-full py-2"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <button className="text-gray-600 hover:text-black text-xl">Log in</button>
                    <button className="text-gray-600 hover:text-black text-xl">Sign up</button>
                </div>
            </div>
        </>
    );
}

const NavbarSm = () =>{
    return (
        <>
            <div className="flex justify-between items-center gap-3 px-2">
                <div className="h-10 w-28 p-2">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo"  className="w-full h-full"/>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div className="bg-red-500 rounded-full px-3 py-2">
                        <button className="text-white">Use App</button>
                    </div>
                    <div className="border rounded-full p-3">
                        <FaRegUser className="text-red-500 font-bold"/>
                    </div>
                </div>
            </div>
        </>
    );
}

const Navbar = () =>{
    return(
        <>
            <div className="lg:hidden shadow-md py-1 bg-white">
                <NavbarSm />
            </div>
            <div className="hidden lg:flex py-2 container mx-auto w-full px-24">
                <NavbarLg />
            </div>
        </>
    );
}

export default Navbar;