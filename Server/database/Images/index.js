import mongoose  from "mongoose";

const ImageSchema = new mongoose.Schema({
    images:{
        type:String,
        require:true
    }
},{
    timestamps:true
});

export const ImageModel = mongoose.model("Images",ImageSchema);