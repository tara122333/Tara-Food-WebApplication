import {combineReducers} from 'redux';

import restaurant from './restaurant/restaurant.reducer';
import Image from './Images/Image.reducer.js';
import user from './User/user.reducer';

const rootReducer = combineReducers({restaurant,Image,user});

export default rootReducer;