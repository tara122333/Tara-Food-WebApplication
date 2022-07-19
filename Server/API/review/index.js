// Library
import  express from "express";
// import passport from "passport";

// database model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();




/*
route      ==> /new 
method     ==> POST
Des        ==> add new Food review/rating
params     ==> none
Access     ==> public
body       ==> review object
*/
Router.post("/new", async(req,res)=>{
    try {
        const {reviewData} = req.body;

        await ReviewModel.create(reviewData);
        return res.status(200).json({review : "successfully created Reviews"});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});



/*
route      ==> /delete 
method     ==> delete
Des        ==> delete review/rating
params     ==> _id
Access     ==> public
body       ==> review object
*/
Router.delete("/delete/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);
        return res.status(200).json({review : "successfully deleted Review"});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});



export default Router;