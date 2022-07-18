// Library
import  express from "express";
// import passport from "passport";

// database model
import { MenuModel } from "../../database/allModels";

const Router = express.Router();


/*
route      ==> /list
method     ==> GET
Des        ==> Get all the menu based on the id 
params     ==> _id
Access     ==> public
*/

Router.get("/r/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne({_id});
        if(!menus) return res.status(404).json({message : "Menu Not found"});
        return res.status(200).json({menus});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});



/*
route      ==> /image
method     ==> GET
Des        ==> Get all the menu images based on the id 
params     ==> _id
Access     ==> public
*/

Router.get("/image/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne({_id});
        if(!menus) return res.status(404).json({message : "Menu Not found"});
        return res.status(200).json({menus});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});
