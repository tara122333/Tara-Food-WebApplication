require("dotenv").config;
require("./database/connection");

// Library
import express from 'express'; // express
import cors from 'cors';  //cors
import helmet from 'helmet';  //helmet
import passport from 'passport'; //passport
const session = require('express-session') // session

// imports my modules
// import googleAuthConfig from "./configs/google-passport.config"; // google AuthConfig



// DB
// import MongoDb from './database/connection';

// importing microservices route
import Auth from './API/auth';

const Zomato = express();



Zomato.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));



// Application middleware
Zomato.use(express.urlencoded({ extended: false }));
Zomato.use(helmet());
Zomato.use(cors());
Zomato.use(express.json());
Zomato.use(passport.session());
Zomato.use(passport.initialize());

// Zomato.use(session());


// googleAuthConfig(passport);
// routeAuthConfig(passport);






// Application Route
Zomato.use('/auth', Auth);


Zomato.get("/",(req,res)=>{
    res.json({message : "Success"});
});



//server listening
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