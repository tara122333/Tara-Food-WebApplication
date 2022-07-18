import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food:{
        type:mongoose.Types.ObjectId,
        ref:"Foods",
    },
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
    },
    rating:{
        type:Number,
        required:true,

    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    reviewText :{
        type:String,
        required:true,
    },
    photos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Images",
      }
    ],
},
{
  timestamps:true
});

export const ReviewModel = mongoose.model("Reviews",ReviewSchema);
