// Library
import  express from "express";
// import passport from "passport";
import AWS from 'aws-sdk';
import multer from 'multer';

// database model
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


/*
route      ==> /
method     ==> POST
Des        ==> upload given image to s3 bucket, and saves file link to mongodb 
params     ==> none
Access     ==> public
*/

Router.post("/", upload.single("file"), async(req,res)=>{
    try {
        const file = req.file;
        const bucketOptions = {
            Bucket:"tara-food-app-image",
            Key:file.originalname,
            Body:file.buffer,
            ContentType:file.mimetype,
            // ACL : "public-read",
        };
        
        const uploadImage = await s3Upload(bucketOptions);
        return res.status(200).json({uploadImage});

    } catch (error) {
        return res.status(500).json({error : error.message});
    }
})

export default Router;