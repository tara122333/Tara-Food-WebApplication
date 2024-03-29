import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/restaurant/MenuSimilarRestaurantcard";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import Mapview from "../../Components/restaurant/MapView";

const Overview = () => {

  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row relative gap-4">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-red-500">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection menuTitle="Menu" pages="3" image={
                [
                  "https://b.zmtcdn.com/data/menus/148/100148/94e49d3b6f6ee0bbe1363358c9afc929.jpg",
                  "https://b.zmtcdn.com/data/menus/148/100148/7c1683df4cedfabcb6cbc26c4ad99905.jpg",
                  "https://b.zmtcdn.com/data/menus/148/100148/69e35bcfcf33d529c0e239b6862f7bf0.jpg",
                ]
            } />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-500 text-blue-600 px-3 py-1 rounded-full">
                Delivery
            </span>
            <span className="border border-gray-500 text-blue-600 px-3 py-1 rounded-full">
                Delivery
            </span>
            <span className="border border-gray-500 text-blue-600 px-3 py-1 rounded-full">
                Delivery
            </span>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹100 for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
              </Slider>
            </div>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
          </div>
          <div className="my-4 w-full  md:hidden flex flex-col gap-4">
            <Mapview
              title="Sodhani Sweets Pvt. Ltd."
              phno={`+919694088136`}
              mapLocation={[26.94347920947382, 75.71841272310175]}
              address="Opposite Nagar Nigam, Bapu Nagar, Jaipur"
            />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-4"
        >
          <Mapview
            title="Sodhani Sweets Pvt. Ltd."
            phno={`+919694088136`}
            mapLocation={[26.94347920947382, 75.71841272310175]}
            address="Opposite Nagar Nigam, Bapu Nagar, Jaipur"
          />
        </aside>
      </div>
    </>
  );
};

export default Overview;