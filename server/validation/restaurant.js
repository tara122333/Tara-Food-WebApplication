import Joi from 'joi';

export const ValidRestaurantCity = (restaurantObject) =>{
    const Schema = Joi.object({
        city:Joi.string().required(),
    });
    return Schema.validateAsync(restaurantObject);
}


export const ValidRestaurantSearchString = (restaurantObject) =>{
    const Schema = Joi.object({
        searchString :Joi.string().required(),
    });
    return Schema.validateAsync(restaurantObject);
}
