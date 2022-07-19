// Library
import  express from "express";
// import passport from "passport";

// database model
import { OrderModel } from "../../database/allModels";

const Router = express.Router();


/*
route      ==> /  
method     ==> GET
Des        ==> Get all the orders based on the id 
params     ==> _id
Access     ==> public
*/
Router.get("/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const getOrder = await OrderModel.findOne({_id});
        if(!getOrder) return res.status(404).json({message : "Order Not found"});
        return res.status(200).json({getOrder});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});



/*
route      ==> /new  
method     ==> POST
Des        ==> add New Order
params     ==> _id
Access     ==> public
*/
Router.post("/new/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const {orderDetails} = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate( // orderDetails is an array so we used findOneAndUpdate
            {
            user : _id,
            },
            {
                $push : {orderDetails},
            },
            {
                new:true,
            }
        ); 

        if(!addNewOrder) return res.status(404).json({message : "Order Not found"});
        return res.status(200).json({addNewOrder});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});


export default Router;