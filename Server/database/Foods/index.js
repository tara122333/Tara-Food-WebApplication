import mongoose  from "mongoose";

const FoodSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    isVeg : {
        type:Boolean,
        default : false,
    },
    isContainsEgg : {
        type:Boolean,
        default:false,
    },
    category:{
        type:String,
        require:true,
    },
    photos:{
        type:mongoose.Types.ObjectId,
        ref: "Images",
    },
    price:
    {
        type:Number,
        default:150,
        require:true,
    },
    addOns:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Foods"
        },
    ],

    restaurant : {
        type:mongoose.Types.ObjectId,
        ref:"Restaurants",
        require:true,
    },


},{
    timestamps:true
});

export const FoodModel = mongoose.model("Foods",FoodSchema);