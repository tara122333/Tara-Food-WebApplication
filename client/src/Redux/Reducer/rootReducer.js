import {combineReducers} from 'redux';

import restaurant from './restaurant/restaurant.reducer';
import images from './Images/Image.reducer.js';
import user from './User/user.reducer';

const rootReducer = combineReducers({restaurant,images,user});

export default rootReducer;