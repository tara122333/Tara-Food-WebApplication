// Library
import  express from "express";
import passport from "passport";

// database model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();



/*
Route     /
Des       Get all review
Params    resid
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:resid", async (req, res) => {
    try {
      const reviews = await ReviewModel.find({ restaurant: req.params.resid });
      return res.json({ reviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });




/*
Route     /new
Des       Add new food review/rating
Params    none
BODY      review object
Access    Public
Method    POST  
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { _id } = req.session.passport.user._doc;
      const { reviewData } = req.body;
  
      await ReviewModel.create({ ...reviewData, user: _id });
  
      return res.json({ review: "Sucessfully Created Review." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
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