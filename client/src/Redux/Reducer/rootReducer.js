import {combineReducers} from 'redux';

import restaurant from './restaurant/restaurant.reducer';
import image from './Images/Image.reducer.js';
import user from './User/user.reducer';

const rootReducer = combineReducers({restaurant,image,user});

export default rootReducer;