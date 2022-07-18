import googleOAuth from 'passport-google-oauth';

import { UserModel } from '../database/Users';

const GoogleStrategy = googleOAuth.OAuth2Strategy;



export default(passport)=>{
    passport.use(
        new GoogleStrategy({
            clientID:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:"http://localhost:4000/auth/google/callback"
        },
        async(accessToken,refreshToken,profile,done)=>{
            //  create new user
            const newUser = {
                fullname:profile.displayName,
                email:profile.emails[0].value,
                profilePic : profile.photos[0].value,
            };
            console.log(profile.displayName);
            try {
                const user = await UserModel.findOne({email:newUser.email});
                console.log(user);
                // const token = user.generateAuthToken();
                if(user){
                    // const token = user.generateAuthToken();
                    // console.log(token);
                    // return token;
                    // done(null,{user,token});
                    done(null,user);
                }else{

                    // const token = user.generateAuthToken();
                    const user = await UserModel.create({newUser});
                    done(null,{user});

                }
            } catch (error) {
                done(error,null);
            }
        })
    );
    passport.serializeUser((userData,done)=>{done(null,userData)});
passport.deserializeUser((id,done)=>{done(null,id)});

};
