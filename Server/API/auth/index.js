// Library
import express from 'express';
import { UserModel } from '../../database/allModels';
import passport from "passport";


const Router = express.Router();


// validation config
import {ValidSignup,ValidSignin} from '../../validation/auth';



/*
route      ==> /signup
method     ==> POST
Des        ==> signUp with email and password
params     ==> none
Access     ==> public
*/
Router.post("/signup",async(req,res)=>{
    try {
        await ValidSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token  = newUser.generateAuthToken();
        return res.status(200).json({
            token,message : "user added successfully",status:"success"
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




/*
route      ==> /signin
method     ==> POST
Des        ==> signUp with email and password
params     ==> none
Access     ==> public
*/
Router.post("/signin",async(req,res)=>{
    try {
        await ValidSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token =  user.generateAuthToken();
        return res.json({
                token,user,message:"signin successfully",status:"success"
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});






/* 
route      ==> /google
method     ==> GET
Des        ==> Google signin
params     ==> none
Access     ==> public
*/
Router.get("/google",
    passport.authenticate("google",{
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/user.phonenumbers.read"
        ],
    }
));


/*
route      ==> /google/callback
method     ==> GET
Des        ==> Google signin callback
params     ==> none
Access     ==> public
*/
Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      // Successful authentication, redirect home.
      return res.redirect(
        `http://localhost:3001/google/${req.session.passport.user.token}`
      );
    }
  );


export default Router;