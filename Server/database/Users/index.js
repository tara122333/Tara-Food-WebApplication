import mongoose  from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const UserSchema = new mongoose.Schema({
    fullname: {
        type:String,
        require:true,
    },
    email : {
        type:String,
        require:true,
        unique:true,
    },
    password : {
        type:String,
        require:true,
    },
    address : [
        {
            detail:{
                type:String,
            },
            for : {
                type:String
            }
        },
    ],
    phoneNumber : [
        {
            type:Number,
        }
    ]
},{
    timestamps:true
});


UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({
        user : this._id.toString(),
    },
    process.env.JWT_PRIVATE_KEY
    )
    return token;
};

UserSchema.statics.userShouldNotExist = async (email)=>{
    const user = UserModel.findOne({email});
    if(!user) throw new Error("Email already exist");
    return user;
};

UserSchema.statics.findByEmailAndPassword = async(email,password)=>{
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("Email Does not exist");

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) throw new Error("password does not match");
    return user;
};


UserSchema.pre("save",function(next){
    const user = this;
    if(!user.isModified("password")) return next();
    const Round = 8;
    bcrypt.genSalt(Round,(err,salt)=>{
        if(err) return next(salt);
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err) return next(err);
            user.password = hash;
            return next();
        });
    });
    
});

export const UserModel = mongoose.model("Users",UserSchema);