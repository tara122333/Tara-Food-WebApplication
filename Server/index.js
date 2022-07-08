require("dotenv").config;
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


// DB
// import MongoDb from './database/connection';

// importing microservices route
import Auth from './API/auth';

const Zomato = express();
require("./database/connection");

// middleware
Zomato.use(express.json());
Zomato.use(helmet());
Zomato.use(cors());
Zomato.use(express.urlencoded({ extended: false }));



// Application Route Middleware
Zomato.use('/auth', Auth);


Zomato.get("/",(req,res)=>{
    res.json({message : "Success"});
});

Zomato.listen(4000,()=>{
    // MongoDb().then((error)=>{
    //     if(error){
    //         console.log("databases connected success but server not started " + error);
    //     }
    //     else{
    //         console.log("databases connected success and server started on port 4000");
    //     }
    // }).catch(()=>{
    //     console.log("database does not connected");
    // });
    console.log("server started ");
});