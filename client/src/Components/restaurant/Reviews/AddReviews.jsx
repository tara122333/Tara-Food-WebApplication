import React,{useState} from "react";
import ReviewModel from "./ReviewModel";

const AddReviewCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => setIsOpen(true);

  return (
    <>
      <ReviewModel isOpen={isOpen} setIsOpen={setIsOpen}/>
      <h3 className="text-xl font-medium">Rate your experience for</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      <button className="text-red-500" onClick={openModel}>
        Write a review
      </button>
    </>
  );
};

export default AddReviewCard;