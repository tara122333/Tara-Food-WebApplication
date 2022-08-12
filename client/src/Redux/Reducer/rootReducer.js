import {combineReducers} from 'redux';

import restaurant from './restaurant/restaurant.reducer';
import Image from './Images/Image.reducer';
import User from './User/user.reducer';

const rootReducer = combineReducers({restaurant,Image,User});

export default rootReducer;