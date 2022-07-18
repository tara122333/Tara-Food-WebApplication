// Library
import  express from "express";
// import passport from "passport";

// database model
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();


/*
route      ==> /
method     ==> GET
Des        ==> Get all the restaurants details based on the city
params     ==> none or use URL query
Access     ==> public
*/
// /restaurant/?city=jaipur

Router.get("/",async(req,res)=>{
    try {
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        if(!restaurants) return res.status(404).json({message : "restaurants not found"});
        return res.status(200).json({restaurants});

    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});

/*
route      ==> /
method     ==> GET
Des        ==> Get all the restaurants based on the id
params     ==> _id
Access     ==> public
*/

Router.get("/:_id",async(req,res)=>{
    try {
        const {_id} = req.params;
        const restaurants = await RestaurantModel.findOne({_id});
        if(!restaurants) return res.status(404).json({message : "restaurants not found"});
        return res.status(200).json({restaurants});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});

/*
route      ==> /search
method     ==> GET
Des        ==> Get all the restaurants based on search String
params     ==> searchString
Access     ==> public
*/

Router.get("/search",async(req,res)=>{
    try {
        const {searchString} = req.body;
        const restaurants = await RestaurantModel.find({
            name : { $regex : searchString, $options : "i"},
        });
        if(!restaurants) return res.status(404).json({message : "restaurants not found"});
        return res.status(200).json({restaurants});

    } catch (error) {
        return res.status(500).json({error : error.message});
    }
})



export default Router;