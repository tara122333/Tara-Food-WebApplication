import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = (props) => {
  return (
    <>
      <div className="my-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFLhXZMotSC3A/profile-displayphoto-shrink_800_800/0/1656750765178?e=1665619200&v=beta&t=W-Ny0kbOuIE3EmFDMXUkYOA8m5-mWhknAW-36r6TaBs"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Tara Chand Kumawat</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-red-500 border border-red-500 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">
              Delivery
            </h5>
            <small className="text-gray-500">
              3 Days Ago
            </small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi enim dolorem aut eius, aliquam temporibus ipsa, facere repellendus totam sit blanditiis incidunt, optio exercitationem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque velit iusto assumenda culpa hic pariatur expedita consequatur nisi dicta eius, tenetur repellat. Accusamus, velit ipsum.lorem25 Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus laborum reiciendis nostrum, inventore ex corrupti dignissimos harum culpa voluptate nihil, maiores optio, tenetur est!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;