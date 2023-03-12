// Library
import googleOAuth from 'passport-google-oauth20';
import { UserModel } from '../database/allModels';

const GoogleStrategy = googleOAuth.Strategy;

export default(passport)=>{
    passport.use(
        new GoogleStrategy({
            // clientID:process.env.GOOGLE_CLIENT_ID,
            clientID:process.env.GOOGLE_CLIENT_ID,
            // clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `/auth/google/callback`
        },
        async(accessToken,refreshToken,profile,done)=>{

            //  create new user
            const newUser = {
                fullname:profile.displayName,
                email:profile.emails[0].value,
                profilePic : profile.photos[0].value,
                // phoneNumber : profile.ph
            };
            // console.log(profile.displayName);
            // console.log(profile.emails[0].value);
            // console.log(profile.photos[0].value);
            try {
                const user = await UserModel.findOne({email:newUser.email});
                // console.log(user);
                if(user){
                    const token = user.generateAuthToken();
                    done(null,{user,token});
                }else{
                    
                    const user = await UserModel.create(newUser);
                    const token = user.generateAuthToken();
                    done(null,{user,token});
                }
            } catch (error) {
                done(error,null); // first argument is return to google and second argument return to the callback
            }
        })
    );
    passport.serializeUser((userData,done)=> done(null,{...userData}));
    passport.deserializeUser((id,done)=>done(null,id));

};
