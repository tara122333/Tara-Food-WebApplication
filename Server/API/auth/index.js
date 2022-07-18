// Library
import express from 'express';
import { UserModel } from '../../database/allModels';

// import passport, { use } from 'passport';

const Router = express.Router();



// route      ==> /signup
// method     ==> POST
// Des        ==> signUp with email and password
// params     ==> none
// Access     ==> public

Router.post("/signup",async(req,res,next)=>{
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token  = newUser.generateAuthToken();
        return res.status(200).json({
            token,essage : "user added successfully"
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

// Router.post("/signin",async(req,res,next)=>{
//     try {
//         const {email,password} = req.body.credentials;
//         const user = await UserModel.findByEmailAndPassword(email,password);
//         // const user = await UserModel.create({email,password,fullname});
//         const token =  user.generateAuthToken();
//         return res.json({
//                 token,user
//         });

//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });


// route      ==> /google
// method     ==> GET
// Des        ==> Google signUp
// params     ==> none
// Access     ==> public

// Router.get("/google",passport.authenticate("google",{
//     scope: [
//         "https://www.googleapis.com/auth/userinfo.profile",
//         "https://www.googleapis.com/auth/userinfo.email",
//       ],
// }
// ));



// route      ==> /callback
// method     ==> GET
// Des        ==> Google signUp with callback
// params     ==> none
// Access     ==> public
// Router.get(
//     "/google/callback",
//     passport.authenticate("google", { failureRedirect: "/" }),
//     function (req, res) {
//       console.log(req.session);
//       // Successful authentication, redirect home.
//       res.json({ token: req.session.passport.user.token });
//     }
//   );


export default Router;