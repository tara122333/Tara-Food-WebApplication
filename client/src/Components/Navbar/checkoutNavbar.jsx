import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Navbar = () => {

  return (
    <>
      <nav className=" p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <div className="container px-4 md:px-24 mx-auto">
          <div className="flex w-full items-center justify-between ">
            <AiOutlineArrowLeft />
            <div className="w-28">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="border p-2 border-gray-300 text-red-500 rounded-full">
                {/* <img
                  src=""
                  alt="avatar"
                  className="w-full h-full rounded-full object-cover"
                /> */}
                
              <FaUserAlt />
              </div>
              Tara
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;