require("dotenv").config();
require("./database/connection");

// Library
import express from 'express'; // express
import cors from 'cors';  //cors
import helmet from 'helmet';  //helmet
import passport from 'passport'; //passport
const session = require('express-session') // session

// imports my modules

// import configs
import googleAuthConfig from "./config/google.config"; // google AuthConfig
import routeConfig from './config/route.config';




// DB
// import MongoDb from './database/connection';

// importing microservices route
import Auth from './API/auth';
import Restaurant from './API/restaurant';
import Food from './API/food';
import Image from './API/image'
import Order from './API/order';
import Reviews from './API/review';
import User from './API/user';
import MailService from "./API/Mail";

const Zomato = express();



Zomato.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));



// Application middleware
Zomato.use(express.json());
Zomato.use(express.urlencoded({ extended: false }));
Zomato.use(helmet());
Zomato.use(cors());
Zomato.use(passport.initialize());
Zomato.use(passport.session());



// passpoer configuration
googleAuthConfig(passport);
routeConfig(passport);


// Application Route
Zomato.use('/auth', Auth);
Zomato.use('/restaurant',Restaurant);
Zomato.use('/food',Food);
Zomato.use('/image',Image);
Zomato.use('/order',Order);
Zomato.use('/reviews',Reviews);
Zomato.use('/user',User);
Zomato.use('/mail',MailService);


Zomato.get("/",(req,res)=>{
    res.json({message : "Success"});
});



//server listening
Zomato.listen(3000,()=>{
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