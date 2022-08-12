// Library
import  express from "express";
import passport from "passport";

// database model
import { UserModel } from "../../database/allModels";

const Router = express.Router();



/*
route      ==> /
method     ==> GRT
Des        ==> GET User
params     ==> _id
Access     ==> public
body       ==> none
*/
Router.get("/",passport.authenticate("jwt"), async(req,res)=>{
    try {
        const { email, fullname, phoneNumber, address } =
        req.session.passport.user._doc;

        return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});




/*
Route     /:_id
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params._id);
      const { fullname } = user;
  
      return res.json({ user: { fullname } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  
  

/*
route      ==> /update 
method     ==> PUT
Des        ==> update user id
params     ==> _id
Access     ==> public
body       ==> user Data
*/
Router.put("/update/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const {userData} = req.body;
        const updateUserData = await UserModel.findByIdAndDelete(
            _id,
            {
                $set : userData
            },
            {
                new : true
            }
        );
        if(!updateUserData) return res.status(404).json({Error : "User Not Found"});
        return res.status(200).json({updateUserData});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});



export default Router;