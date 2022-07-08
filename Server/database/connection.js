import mongoose from "mongoose";
// import dotenv from "dotenv";

mongoose.connect('mongodb://localhost:27017/TaraFood',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Data Base connection successfully");
}).catch((error)=>{
    console.log(`Error is : ${error}`);
});

