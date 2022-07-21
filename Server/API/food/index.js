// Library
import  express from "express";
// import passport from "passport";

// database model
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

// import data validation

import { ValidateRestaurantId , Validatecategory} from "../../validation/food";


/*
route      ==> /r
method     ==> GET
Des        ==> Get all the foods based on the perticular restaurants 
params     ==> _id
Access     ==> public
*/
Router.get("/r/:_id", async(req,res)=>{
    try {
        await ValidateRestaurantId(req.params);
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant : _id});
        if(!foods) return res.status(404).json({message : "foos Not found"});
        return res.status(200).json({foods});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});


/*
route      ==> /r
method     ==> GET
Des        ==> Get all the foods based on the perticular category 
params     ==> category
Access     ==> public
*/
Router.get("/r/:category", async(req,res)=>{
    try {
        await Validatecategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({category : {$regex : category , $options : "i"}});
        if(!foods) return res.status(404).json({message : "foos Not found"});
        return res.status(200).json({foods});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});

export default Router;