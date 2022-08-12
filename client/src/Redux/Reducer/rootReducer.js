import {combineReducers} from 'redux';

import restaurant from './restaurant/restaurant.reducer';
import Image from './Images/Image.reducer';

const rootReducer = combineReducers({restaurant,Image});

export default rootReducer;