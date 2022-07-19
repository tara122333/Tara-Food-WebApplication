import Joi from 'joi';

export const ValidSignup = (userData) =>{
    const Schema = Joi.object({
        fullname:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(5).max(15).required(),
        address:Joi.array().items(Joi.object({detail:Joi.string(),for:Joi.string()})),
        phoneNumber:Joi.number()
    });
    return Schema.validateAsync(userData);
} 
export const ValidSignin = (userData) =>{
    const Schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(5).max(15).required(),
    });
    return Schema.ValidSignin(userData);
} 