import express from 'express';
import { UserModel } from '../../database/allModels';
require("dotenv").config();

import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';

const Router = express.Router();



// route      ==> /signup
// method     ==> POST
// Des        ==> signUp with email and password
// params     ==> none
// Access     ==> public

Router.post("/signup",async(req,res,next)=>{
    try {
        const {email,password,fullname} = req.body.credentials;
        await UserModel.userShouldNotExist(email);
        const user = await UserModel.create({email,password,fullname});
        const token = user.generateAuthToken();
        return res.json({
                token,user
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


// route      ==> /signin
// method     ==> POST
// Des        ==> signUp with email and password
// params     ==> none
// Access     ==> public

Router.post("/signin",async(req,res,next)=>{
    try {
        const {email,password} = req.body.credentials;
        const user = await UserModel.findByEmailAndPassword(email,password);
        // const user = await UserModel.create({email,password,fullname});
        const token = user.generateAuthToken();
        return res.json({
                token,user
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




export default Router;