import mongoose  from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
    },
    city : {
        type:String,
        require:true,
    },
    address :
        {
            type:String,
            require:true,
        },
    mapLocation :
        {
            type:String,
            require:true,
        },
    cuisine: [String],

    restaurantTimings: String,

    contactNumber: Number,

    website: String,

    popularDishes: [String],

    averageCost: Number,

    amenities: [String],

    menuImage: {
          type: mongoose.Types.ObjectId,
          ref: "Images",
    },

    menu: {
            type: mongoose.Types.ObjectId,
            ref: "Menu",
    },

    reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],

    photos: {
            type: mongoose.Types.ObjectId,
            ref: "Images",
        },

},{
    timestamps:true
});

export const RestaurantModel = mongoose.model("Restaurants",RestaurantSchema);